// src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { CONFIG } from '../config';

export async function GET(context) {
  // --- 1. 配置解析 ---
  const parseHandle = (handle) => {
      const clean = handle.startsWith('@') ? handle.slice(1) : handle;
      const parts = clean.split('@');
      if (parts.length < 2) return { username: 'error', instance: 'https://sshup.com', domain: 'sshup.com' };
      
      let domain = parts[1];
      if (domain.endsWith('/')) domain = domain.slice(0, -1);
      
      return { username: parts[0], instance: `https://${domain}`, domain: domain };
  };

  const { username: USER_NAME, instance: INSTANCE_URL, domain: DOMAIN } = parseHandle(CONFIG.FEDIVERSE_HANDLE);

  // --- 2. 智能获取数据 (集成 Mastodon 支持) ---
  let platform = 'unknown';
  let userId = null;
  let rawNotes = [];

  const headers = {
      "User-Agent": "Mozilla/5.0 (compatible; MisskeyBlog/2.0; +https://github.com/Ghfftn/misskey-blog)"
  };

  // > 尝试 Misskey
  try {
      const mkRes = await fetch(`${INSTANCE_URL}/api/users/show`, {
          method: "POST", headers: { "Content-Type": "application/json", ...headers },
          body: JSON.stringify({ username: USER_NAME }),
      });
      if (mkRes.ok) {
          const user = await mkRes.json();
          userId = user.id;
          platform = 'misskey';
      }
  } catch(e) {}

  // > 尝试 Mastodon
  if (platform === 'unknown') {
      try {
          let lookupUrl = `${INSTANCE_URL}/api/v1/accounts/lookup?acct=${USER_NAME}@${DOMAIN}`;
          let mstdRes = await fetch(lookupUrl, { headers: headers });
          if (!mstdRes.ok) {
              lookupUrl = `${INSTANCE_URL}/api/v1/accounts/lookup?acct=${USER_NAME}`;
              mstdRes = await fetch(lookupUrl, { headers: headers });
          }
          if (mstdRes.ok) {
              const user = await mstdRes.json();
              userId = user.id;
              platform = 'mastodon';
          }
      } catch(e) {}
  }

  // 如果找不到用户，返回错误 XML
  if (!userId) {
      return new Response('<error>User lookup failed</error>', { status: 404, headers: { 'Content-Type': 'text/xml' } });
  }

  // > 抓取动态数据
  try {
      if (platform === 'misskey') {
          const res = await fetch(`${INSTANCE_URL}/api/users/notes`, {
              method: "POST", headers: { "Content-Type": "application/json", ...headers },
              body: JSON.stringify({ userId: userId, limit: 20, includeReplies: false, includeMyRenotes: true }),
          });
          if (res.ok) rawNotes = await res.json();
      } else if (platform === 'mastodon') {
          const res = await fetch(`${INSTANCE_URL}/api/v1/accounts/${userId}/statuses?limit=20&exclude_replies=true`, { headers: headers });
          if (res.ok) {
              const mstdNotes = await res.json();
              // 简单的格式转换，让 Mastodon 数据适配下面的 map 逻辑
              rawNotes = mstdNotes.map(n => ({
                  id: n.id,
                  createdAt: n.created_at,
                  text: n.content.replace(/<[^>]+>/g, ''), // 去除 HTML 标签作为纯文本标题
                  files: n.media_attachments,
                  renote: n.reblog ? { text: n.reblog.content.replace(/<[^>]+>/g, '') } : null,
                  url: `${INSTANCE_URL}/@${USER_NAME}/${n.id}` // Mastodon 链接格式
              }));
          }
      }
  } catch(e) {
      console.error(e);
  }

  // --- 3. 生成 RSS ---
  // 修复：只使用 SITE_TITLE，避免 undefined 错误
  const PAGE_TITLE = CONFIG.SITE_TITLE;
  const SITE_URL = context.site || 'https://blog.sshup.com';

  return rss({
    title: PAGE_TITLE,
    description: CONFIG.SITE_DESC,
    site: SITE_URL,
    customData: `
      <image>
        <url>${CONFIG.SITE_ICON}</url>
        <title>${PAGE_TITLE}</title>
        <link>${SITE_URL}</link>
      </image>
      <generator>Misskey-Blog Astro</generator>
    `,
    items: rawNotes.map((note) => {
      const target = note.renote || note;
      
      let title = target.text 
        ? target.text.substring(0, 50) + (target.text.length > 50 ? '...' : '')
        : (target.files && target.files.length > 0 ? '[分享图片]' : '[无标题动态]');
      
      if (!!note.renote) title = `🔄 转发: ${title}`;

      // 链接处理
      const link = note.url || `${INSTANCE_URL}/notes/${note.id}`;

      return {
        title: title,
        pubDate: new Date(note.createdAt),
        description: target.text || '点击查看图片内容',
        link: link,
      };
    }),
  });
}