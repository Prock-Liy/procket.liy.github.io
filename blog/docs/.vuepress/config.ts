import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

export default defineUserConfig({
  // 本地开发默认 "/";CI 构建时通过 VUEPRESS_BASE 指定 GitHub Pages 项目站点子路径
  base: process.env.VUEPRESS_BASE || "/",
  lang: "zh-CN",
  title: "Prock-Liy 的博客",
  description: "代码 · 像素 · 摄影 —— 记录技术学习与生活",
  bundler: viteBundler(),
  head: [
    [
      "script",
      {},
      // 默认暗色:首次访问(无偏好)时初始化为 dark,并在首帧前应用避免闪白;
      // 用户手动切换后以 localStorage 为准,尊重其选择
      'try{if(localStorage.getItem("vuepress-theme-hope-scheme")===null){localStorage.setItem("vuepress-theme-hope-scheme","dark");document.documentElement.setAttribute("data-theme","dark")}}catch(e){}',
    ],
  ],
  theme,
});
