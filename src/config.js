// src/config.js

export const CONFIG = {
  // ==============================================================================
  // 1. IDENTITY (Your Fediverse Account) | 身份识别
  // ==============================================================================
  
  // Format: @username@instance.domain
  // Example: @A@sshup.com
  // 格式：@用户名@实例域名
  FEDIVERSE_HANDLE: '@Z@sshup.com',

  // ==============================================================================
  // 2. SITE META (Website Information) | 网站元信息
  // ==============================================================================

  SITE_TITLE: 'Example',
  SITE_DESC: 'Connecting to fediverse... | 动态同步',
  SITE_ICON: 'https://sshup.com/files/thumbnail-b457fa5b-1189-427d-baa7-389673f93283',

  // ==============================================================================
  // 3. SOCIAL LINKS (Connect to the World) | 社交传送门
  // ==============================================================================
  
  // GitHub 仓库地址 (显示在右上角)
  GITHUB_REPO: 'https://github.com/Ghfftn/misskey-blog',

  // ==============================================================================
  // 4. THEME & COLORS (Customize the Look) | 主题与外观
  // ==============================================================================
  
  THEME: {
    TITLE_GRADIENT_FROM: '#4ade80', 
    TITLE_GRADIENT_TO:   '#8b5cf6', 
    BUTTON_HOVER_COLOR: '#39ff14', 
    BUTTON_HOVER_BORDER_COLOR: '#39ff14', 
    BACKGROUND_GLOW_COLOR: '#1a2e25', 
    CARD_OPACITY: 0.6,
    USERNAME_COLOR: '#ffffff',
    POST_TEXT_COLOR: '#e4e4e7',
    MARQUEE_TEXT: [
      '🍮', '❤️', '💬', '🔄', '😺', 
      '🎉', '🤔', '🚀', '⭐', '👀', 
      '➕', 'System Online', '( ﾟ∀。)', '干杯 🍻'
    ],
  }
};
