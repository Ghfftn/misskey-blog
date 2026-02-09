// src/pages/rss.xml.js
import rss from '@astrojs/rss';

const INSTANCE = 'https://sshup.com';
const USER_ID = 'aid0j1fyuf3i0003';
// 3. 这里也同步更新为“联邦动态博客”
const SITE_TITLE = '否极泰来 | 联邦动态博客';
const SITE_DESC = 'Connecting to fediverse...';
const SITE_ICON = 'https://sshup.com/files/thumbnail-b457fa5b-1189-427d-baa7-389673f93283';

export async function GET(context) {
  const response = await fetch(`${INSTANCE}/api/users/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: USER_ID,
      limit: 20,
      includeReplies: false,
      includeMyRenotes: true
    }),
  });
  const notes = await response.json();

  return rss({
    title: SITE_TITLE,
    description: SITE_DESC,
    site: context.site || 'https://blog.sshup.com',
    customData: `
      <image>
        <url>${SITE_ICON}</url>
        <title>${SITE_TITLE}</title>
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
        link: `${INSTANCE}/notes/${note.id}`,
      };
    }).filter(item => item !== null),
  });
}