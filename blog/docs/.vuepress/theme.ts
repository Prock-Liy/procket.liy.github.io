import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  // GitHub Pages 项目站点完整地址(用于 sitemap / OG 链接拼接)
  hostname: "https://prock-liy.github.io/procket.liy.github.io/",
  author: {
    name: "Prock-Liy",
    url: "https://github.com/Prock-Liy",
  },
  logo: "/avatar.jpg",
  favicon: "/avatar.jpg",
  icon: "iconify",
  // 导航栏右侧 GitHub 入口(theme-hope 内置 Repo 组件)
  repo: "https://github.com/Prock-Liy",
  repoLabel: "GitHub",
  // 默认暗色的实际实现在 config.ts 的 head 内联脚本(首访写入偏好);
  // "switch" 保证导航栏切换按钮可用,用户切到亮色后由 localStorage 记住
  darkmode: "switch",
  navbar,
  sidebar,
  footer: `Copyright © 2026 Prock-Liy | Powered by VuePress & theme-hope`,
  displayFooter: true,
  print: false,
  plugins: {
    blog: {
      avatar: "/avatar.jpg",
      name: "Prock-Liy",
      motto: "代码 · 像素 · 摄影",
      medias: [
        {
          icon: "fa6-brands:github",
          link: "https://github.com/Prock-Liy",
        },
      ],
    },
  },
});
