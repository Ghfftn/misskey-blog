// src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { CONFIG } from '../config';

export async function GET(context) {
  const response = await fetch(`${CONFIG.INSTANCE}/api/users/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: CONFIG.USER_ID,
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
        link: `${CONFIG.INSTANCE}/notes/${note.id}`,
      };
    }).filter(item => item !== null),
  });
}