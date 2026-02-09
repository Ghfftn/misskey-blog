# Fediverse Nexus (Astro Blog Template)

[English](#english) | [中文说明](#chinese)

---

<a name="english"></a>
## 🌐 English Introduction

**Fediverse Nexus** is a stunning, cyberpunk-style personal timeline for the Fediverse (Misskey, Firefish, Sharkey, etc.). 

It connects directly to your Fediverse account API to display your latest notes in a beautiful, "Terminal/Dashboard" interface. No backend server required, fully static, and blazing fast.

### ✨ Key Features
- **Zero Coding Required**: Configurable via a single file.
- **Cyberpunk UI**: Glowing backgrounds, glassmorphism cards, and interactive animations.
- **Auto Sync**: Fetches your latest notes automatically every time the site builds.
- **SEO Friendly**: Includes Open Graph tags and RSS feed generation.
- **Responsive**: Looks great on both desktop and mobile.

### 🚀 Quick Start (No Code Needed)

You don't need to install anything on your computer. Just follow these steps:

#### Step 1: Deploy to Cloudflare
Click the button below to fork this repository and deploy it to Cloudflare Pages for free.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Ghfftn/misskey-blog)

*(Note: After clicking, follow the Cloudflare instructions. When asked for "Framework Preset", select **Astro**).*

#### Step 2: Configuration
Once deployed, the site will show the default content. Now, make it yours:

1.  Go to your new **GitHub Repository** (the one you just created).
2.  Navigate to the `src` folder -> Click on `config.js`.
3.  Click the **Pencil Icon (✏️)** to edit the file.
4.  Change the `FEDIVERSE_HANDLE` to your own (e.g., `'@A@sshup.com'`).
5.  (Optional) Change colors, titles, and emojis in the `THEME` section.
6.  Scroll down and click **"Commit changes"**.

**That's it!** Cloudflare will detect the change and automatically update your site within a minute.

---

<a name="chinese"></a>
## 🌏 中文说明

**Fediverse Nexus** 是一个为联邦宇宙（Misskey, Firefish, Sharkey 等）用户设计的个人动态展示站。

它采用极具科技感的“终端/仪表盘”风格，无需后端服务器，直接通过 API 读取您的公开动态，生成一个无需维护、加载极快的个人博客。

### ✨ 核心特性
- **零代码基础**：只需修改一个配置文件即可使用。
- **赛博朋克风**：流光背景、毛玻璃特效、Q弹的互动动画。
- **自动同步**：每次构建自动抓取您的最新动态。
- **功能完善**：自带 RSS 订阅源、SEO 优化和社交分享卡片。
- **多端适配**：在手机和电脑上都有完美的浏览体验。

### 🚀 快速开始（保姆级教程）

您不需要懂编程，也不需要在电脑上安装任何软件，仅需一个 GitHub 账号。

#### 第一步：一键部署
点击下方的蓝色按钮，将此项目“克隆”到您的 GitHub 并部署到 Cloudflare Pages（免费）。

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Ghfftn/misskey-blog)

*(注意：跳转到 Cloudflare 后，按提示绑定 GitHub 账号。在 "Framework Preset / 框架预设" 选项中，请选择 **Astro**，然后点击保存部署)*

#### 第二步：修改配置 (变成你的网站)
部署成功后，你会看到默认的演示内容。现在我们把它改成你的：

1.  回到你的 **GitHub 仓库**主页。
2.  进入 `src` 文件夹，找到 `config.js` 文件。
3.  点击文件右上角的 **铅笔图标 (✏️)** 进入编辑模式。
4.  找到 `FEDIVERSE_HANDLE`，将其修改为你自己的账号（例如 `'@A@sshup.com'`）。
5.  (选填) 你还可以在 `THEME` 区域修改网站标题、颜色、背景光和顶部的滚动表情。
6.  修改完毕后，划到页面最底部，点击绿色的 **"Commit changes"** 按钮。

**大功告成！** Cloudflare 会自动监测到你保存了文件，并开始自动更新网站。稍等 1 分钟，刷新你的网址，就能看到你的专属博客了！

---

### 🛠️ Advanced / 进阶 (Local Development)

If you are a developer and want to customize the code:
如果您是开发者，想在本地运行：

```bash
# 1. Clone repo
git clone [https://github.com/your-username/misskey-blog.git](https://github.com/your-username/misskey-blog.git)

# 2. Install dependencies
npm install

# 3. Start local server
npm run dev