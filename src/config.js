// src/config.js

export const CONFIG = {
  // ==============================================================================
  // 1. IDENTITY (Your Fediverse Account) | 身份识别 (您的联邦宇宙账号)
  // ==============================================================================
  
  // Format: @username@instance.domain
  // Example: @A@sshup.com
  // 格式：@用户名@实例域名
  // 填写后，系统会自动查找并获取动态。
  FEDIVERSE_HANDLE: '@A@sshup.com',

  // ==============================================================================
  // 2. SITE META (Website Information) | 网站元信息 (显示在浏览器标签页和分享卡片上)
  // ==============================================================================

  // The main title of your blog (e.g., your name or nickname)
  // 网站主标题 (通常填写您的名字或昵称)
  SITE_TITLE: '否极泰来',

  // Site description for SEO and social sharing (Open Graph)
  // 网站描述 (用于 SEO 和分享链接时显示的简介)
  SITE_DESC: 'Connecting to fediverse... | Misskey 动态同步',

  // URL to your avatar or site icon (Square image recommended)
  // 您的头像或网站图标链接 (建议使用正方形图片)
  SITE_ICON: 'https://sshup.com/files/thumbnail-b457fa5b-1189-427d-baa7-389673f93283',

  // ==============================================================================
  // 3. THEME & COLORS (Customize the Look) | 主题与外观 (发挥您的创意！)
  // ==============================================================================
  
  THEME: {
    // >> Main Title Gradient Colors | 主标题渐变色
    // Change these to match your personal mood or avatar colors.
    // 修改这两个颜色可以改变网站的整体色调。
    TITLE_GRADIENT_FROM: '#4ade80', // Start color (Default: Aurora Green) | 渐变起始色 (默认：极光绿)
    TITLE_GRADIENT_TO:   '#8b5cf6', // End color (Default: Electric Purple) | 渐变结束色 (默认：电波紫)

    // >> Interaction Colors | 互动颜色设置
    // Color for buttons, links, and hover effects.
    // 鼠标悬停在按钮、链接或图标上时的文字/发光颜色。
    BUTTON_HOVER_COLOR: '#39ff14',  // Default: Hacker Green | 默认：黑客荧光绿
    
    // [NEW] Border color when hovering over buttons/tags
    // [新增] 鼠标悬停在按钮/标签上时的边框颜色 (通常和上面的发光色一致，也可以不同)
    BUTTON_HOVER_BORDER_COLOR: '#39ff14', 

    // >> Background Glow | 背景氛围光
    // The subtle color glow at the top of the page.
    // 页面顶部的极光背景色 (建议使用深色，营造深空感)。
    BACKGROUND_GLOW_COLOR: '#1a2e25', // Default: Deep Algae | 默认：深藻绿

    // >> Glassmorphism Card Style | 毛玻璃卡片样式
    CARD_OPACITY: 0.6,       // 0.0 = Invisible, 1.0 = Solid. | 0.0 全透，1.0 不透，建议 0.6
    
    // >> Text Colors | 文字颜色
    USERNAME_COLOR: '#ffffff',  // Color of your name in posts | 帖子左上角名字的颜色
    POST_TEXT_COLOR: '#e4e4e7', // Color of the post content | 帖子正文的颜色

    // >> Marquee Ticker Content | 顶部走马灯内容
    // Add Emojis, Kaomojis, or short phrases here. They will scroll infinitely.
    // 在这里添加 Emoji、颜文字或短语。它们会在顶部无限滚动循环。
    MARQUEE_TEXT: [
      '🍮', '❤️', '💬', '🔄', '😺', 
      '🎉', '🤔', '🚀', '⭐', '👀', 
      '➕', 'System Online', '( ﾟ∀。)', '干杯 🍻'
    ],
  }
};