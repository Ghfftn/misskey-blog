// src/pages/rss.xml.js
import rss from '@astrojs/rss';

// --- 配置区域 ---
const INSTANCE = 'https://sshup.com';
const USER_ID = 'aid0j1fyuf3i0003';
const SITE_TITLE = '否极泰来 | Digital Garden';
const SITE_DESCRIPTION = 'Connecting to fediverse...';
// ----------------

export async function GET(context) {
  // 1. 获取 Misskey 数据 (和你主页的逻辑一样)
  const response = await fetch(`${INSTANCE}/api/users/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: USER_ID,
      limit: 20, // RSS 不需要太多，20条够了
      includeReplies: false,
      includeMyRenotes: true
    }),
  });
  const notes = await response.json();

  // 2. 生成 RSS XML
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site || 'https://blog.sshup.com', // 你的自定义域名
    // 3. 把每条 Misskey 笔记转换成 RSS 条目
    items: notes.map((note) => {
      const target = note.renote || note;
      const isRenote = !!note.renote;
      
      // 生成标题：取前30个字，如果没有字就显示“分享图片”
      let title = target.text 
        ? target.text.substring(0, 30) + (target.text.length > 30 ? '...' : '')
        : (target.files && target.files.length > 0 ? '[分享图片]' : '[无标题动态]');
      
      if (isRenote) title = `🔄 转发: ${title}`;

      // 生成内容描述
      const content = target.text || (target.files && target.files.length > 0 ? '点击查看图片' : '');

      return {
        title: title,
        pubDate: new Date(note.createdAt),
        description: content,
        // RSS 点击跳转的链接：跳回 Misskey 原贴
        link: `${INSTANCE}/notes/${note.id}`,
      };
    }),
  });
}