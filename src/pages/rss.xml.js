// src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { CONFIG } from '../config';

export async function GET(context) {
  // 1. 解析 Handle
  const parseHandle = (handle) => {
      const clean = handle.startsWith('@') ? handle.slice(1) : handle;
      const parts = clean.split('@');
      return { username: parts[0], instance: `https://${parts[1]}` };
  };
  const { username, instance } = parseHandle(CONFIG.FEDIVERSE_HANDLE);

  // 2. 获取 ID
  let userId = '';
  try {
    const userRes = await fetch(`${instance}/api/users/show`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username }),
    });
    const userData = await userRes.json();
    userId = userData.id;
  } catch(e) {
    console.error("RSS Error: Failed to fetch user ID");
    return new Response('User ID lookup failed', { status: 500 });
  }

  // 3. 获取笔记
  const response = await fetch(`${instance}/api/users/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: userId,
      limit: 20,
      includeReplies: false,
      includeMyRenotes: true
    }),
  });
  const notes = await response.json();

  const PAGE_TITLE = `${CONFIG.SITE_TITLE} | ${CONFIG.SITE_SUBTITLE}`;

  return rss({
    title: PAGE_TITLE,
    description: CONFIG.SITE_DESC,
    site: context.site || 'https://blog.sshup.com',
    customData: `
      <image>
        <url>${CONFIG.SITE_ICON}</url>
        <title>${PAGE_TITLE}</title>
        <link>${context.site || 'https://blog.sshup.com'}</link>
      </image>
    `,
    items: notes.map((note) => {
      const target = note.renote || note;
      if (target.replyId) return null;

      let title = target.text 
        ? target.text.substring(0, 30) + (target.text.length > 30 ? '...' : '')
        : (target.files && target.files.length > 0 ? '[分享图片]' : '[无标题动态]');
      
      if (!!note.renote) title = `🔄 转发: ${title}`;

      return {
        title: title,
        pubDate: new Date(note.createdAt),
        description: target.text || '点击查看图片内容',
        link: `${instance}/notes/${note.id}`,
      };
    }).filter(item => item !== null),
  });
}