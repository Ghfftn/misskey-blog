# misskey-blog (Astro Theme)

[English](#english) | [中文说明](#chinese)

---

<a name="english"></a>
## 🌐 English Introduction

**misskey-blog** is a stunning, cyberpunk-style personal timeline for the Fediverse (Misskey, Firefish, Sharkey, etc.).

It connects directly to your Fediverse account API to display your latest notes in a beautiful, "Terminal/Dashboard" interface. No backend server required, fully static, and blazing fast.

### ✨ Key Features
- **Zero Coding Required**: Configurable via a single file.
- **Cyberpunk UI**: Glowing backgrounds, glassmorphism cards, and interactive animations.
- **Auto Sync**: Fetches your latest notes automatically every time the site builds.
- **SEO Friendly**: Includes Open Graph tags and RSS feed generation.
- **Responsive**: Looks great on both desktop and mobile.

### 🚀 Quick Start

#### Step 1: One-Click Deploy
Click the button below to deploy this project to Cloudflare Pages.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Ghfftn/misskey-blog)

1.  Log in to Cloudflare and authorize GitHub access.
2.  Cloudflare will automatically create a new repository in your GitHub account.
3.  **Configuration Screen (Important):**
    * **Project name**: You can rename it or keep the default.
    * **Build command**: Ensure it is `npm run build`.
    * **Deploy command**: Keep the default (usually `npx wrangler deploy`).
    * **Framework Preset**: If you see this option, select **Astro**. If you don't see it, just ignore it.
    * **Variables**: Leave them empty.
4.  Click **"Save and Deploy"** (or Deploy).

#### Step 2: Configuration
Once deployed, go to your **newly created GitHub repository**:
1.  Navigate to `src/config.js`.
2.  Edit the file to change `FEDIVERSE_HANDLE` to your own (e.g., `'@user@instance.com'`).
3.  **Commit changes**. Cloudflare will automatically update your site.

---

<a name="chinese"></a>
## 🌏 中文说明

**misskey-blog** 是一个为联邦宇宙（Misskey, Firefish, Sharkey 等）用户设计的个人动态展示站。

它采用极具科技感的“终端/仪表盘”风格，无需后端服务器，直接通过 API 读取您的公开动态，生成一个无需维护、加载极快的个人博客。

### ✨ 核心特性
- **零代码基础**：只需修改一个配置文件即可使用。
- **赛博朋克风**：流光背景、毛玻璃特效、Q弹的互动动画。
- **自动同步**：每次构建自动抓取您的最新动态。
- **功能完善**：自带 RSS 订阅源、SEO 优化和社交分享卡片。
- **多端适配**：在手机和电脑上都有完美的浏览体验。

### 🚀 快速开始（保姆级教程）

您不需要懂编程，也不需要在电脑上安装任何软件，仅需一个 GitHub 账号。

#### 第一步：一键部署 (Cloudflare)
点击下方的 **Deploy to Cloudflare Workers** 按钮，将此项目“克隆”到您的 GitHub 并部署到 Cloudflare Pages（免费）。

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Ghfftn/misskey-blog)

**操作指引：**
1.  点击按钮后，登录 Cloudflare 并授权连接您的 GitHub 账号。
2.  系统会提示将为您创建一个新仓库（Repository），点击继续。
3.  **配置页面设置 (关键步骤)：**
    * **Project name (项目名称)**：可以修改，也可以保持默认。
    * **Build command (构建命令)**：必须是 `npm run build`。
    * **Deploy command (部署命令)**：保持默认即可 (通常是 `npx wrangler deploy`)。
    * **Framework Preset (框架预设)**：如果你能看到这个选项，请选择 **Astro**；如果没看到，**直接忽略即可，保持默认**。
    * **Variables (变量)**：直接留空，不需要填写。
4.  点击页面底部的 **"Save and Deploy"** (或 Deploy) 按钮。
5.  等待约 1 分钟，直到显示 "Success"（成功），您的网站就上线了！

#### 第二步：修改配置 (变成你的网站)
部署成功后，你会看到默认的演示内容。现在我们把它改成你的：

1.  回到你的 **GitHub** 主页，找到刚才 Cloudflare 自动创建的那个仓库（通常叫 `my-misskey-blog` 或类似名字）。
2.  点击进入 `src` 文件夹，找到 `config.js` 文件。
3.  点击文件右上角的 **铅笔图标 (✏️)** 进入编辑模式。
4.  **必填项**：找到 `FEDIVERSE_HANDLE`，将其修改为你自己的账号（格式如 `'@yourname@instance.com'`）。
5.  **选填项**：你还可以在 `THEME` 区域修改网站标题、颜色、背景光和顶部的滚动表情。
6.  修改完毕后，划到页面最底部，点击绿色的 **"Commit changes"** 按钮。

**大功告成！** Cloudflare 会自动监测到你保存了文件，并开始自动更新网站。稍等 1-2 分钟，刷新你的网址，就能看到你的专属博客了！

#### 第三步：绑定域名 (可选)
如果你有自己的域名（如 `blog.example.com`）：

1.  进入 Cloudflare Pages 的项目后台。
2.  点击 **"Custom domains" (自定义域名)** 选项卡，或者直接点击概览页右下角的快捷入口。
3.  点击 **"Set up a custom domain"**，输入你的域名并按提示完成 DNS 解析即可。

---

### 🛠️ 高级开发 (本地运行)

如果您是开发者，想在本地进行二次开发：

```bash
# 1. 克隆仓库
git clone [https://github.com/your-username/misskey-blog.git](https://github.com/your-username/misskey-blog.git)

# 2. 安装依赖
npm install

# 3. 启动本地服务器
npm run dev