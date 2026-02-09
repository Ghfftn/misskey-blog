// src/config.js
export const CONFIG = {
  // 1. 联邦宇宙账号 (格式：@用户名@实例域名)
  FEDIVERSE_HANDLE: '@A@sshup.com',

  // 2. 网站基础信息
  SITE_TITLE: '否极泰来',
  SITE_SUBTITLE: 'FEDIVERSE NEXUS',
  SITE_DESC: 'Connecting to fediverse... | Misskey 动态同步',
  SITE_ICON: 'https://sshup.com/files/thumbnail-b457fa5b-1189-427d-baa7-389673f93283',

  // 3. 🎨 界面主题深度定制
  THEME: {
    // >> 主标题渐变色
    TITLE_GRADIENT_FROM: '#4ade80', // 渐变起始色
    TITLE_GRADIENT_TO:   '#8b5cf6', // 渐变结束色

    // >> 互动元素颜色
    BUTTON_HOVER_COLOR: '#39ff14',  // 悬停高亮色

    // >> 背景氛围
    BACKGROUND_GLOW_COLOR: '#1a2e25', // 顶部极光背景色

    // >> 卡片样式
    CARD_OPACITY: 0.6,       // 卡片透明度
    USERNAME_COLOR: '#ffffff', // 用户名颜色
    POST_TEXT_COLOR: '#e4e4e7',// 正文颜色

    // >> ✨ 顶部走马灯内容 (支持 Emoji、颜文字、短语)
    // 建议多放几个，效果会更好
    MARQUEE_TEXT: [
      '🍮', '❤️', '💬', '🔄', '😺', 
      '🎉', '🤔', '🚀', '⭐', '👀', 
      '➕', 'System Online', '( ﾟ∀。)', '干杯 🍻'
    ],
  }
};