# Prock-Liy 的个人网站

> 代码 · 像素 · 摄影 —— 记录技术学习与生活

基于 **VuePress 2 + vuepress-theme-hope** 搭建的个人站点,采用自定义「像素夜城」视觉主题:全站固定的像素城市壁纸背景层、霓虹青主色、毛玻璃导航栏,兼顾技术知识库的专业感与作品集的表现力。

**在线访问:** [https://prock-liy.github.io/procket.liy.github.io/](https://prock-liy.github.io/procket.liy.github.io/)

## 内容栏目

| 栏目 | 内容 |
| --- | --- |
| [主页](https://prock-liy.github.io/procket.liy.github.io/) | 个人介绍、精选项目、技术专栏、摄影与生活入口 |
| [项目](https://prock-liy.github.io/procket.liy.github.io/projects/) | ai-mcp-gateway、ai-agent-drwo.io、mcp-server-weixin-send-msg |
| [技术学习](https://prock-liy.github.io/procket.liy.github.io/tech/) | 后端开发(Java / Spring / 数据库 / 分布式 / Linux / Docker / 工程实践 / 面试实战)、AI 人工智能、计算机基础 |
| [摄影创作](https://prock-liy.github.io/procket.liy.github.io/photo/) | 摄影学习、视频剪辑、影像作品集 |
| [生活手记](https://prock-liy.github.io/procket.liy.github.io/life/) | 随笔、成长、读书、旅行、年度计划、月度总结 |

## 仓库结构

```
.
├── blog/                      # 站点源码(VuePress 2)
│   ├── docs/
│   │   ├── .vuepress/         # 主题配置、样式、客户端扩展
│   │   │   ├── config.ts      # 站点配置(base 通过 VUEPRESS_BASE 注入)
│   │   │   ├── theme.ts       # 主题配置(导航/侧栏/博客信息/GitHub)
│   │   │   ├── navbar.ts      # 导航栏
│   │   │   ├── sidebar.ts     # 侧边栏(多级)
│   │   │   ├── client.ts      # 全站固定背景层组件
│   │   │   ├── styles/        # 「像素夜城」设计系统
│   │   │   └── public/        # 壁纸、头像等静态资源
│   │   ├── projects/          # 项目介绍页
│   │   ├── tech/              # 技术学习笔记
│   │   ├── photo/             # 摄影创作
│   │   └── life/              # 生活手记
│   └── package.json
└── .github/workflows/deploy.yml  # GitHub Pages 自动部署
```



## 主题说明

「像素夜城」主题要点:

- 全站 `position: fixed` 独立背景层,滚动时壁纸固定不动,路由切换保持稳定
- 分页面类型遮罩体系:首页轻遮罩展示壁纸,内容页重遮罩保证正文对比度
- 导航栏毛玻璃吸顶,右侧 GitHub 入口(图标跳转 [Prock-Liy 主页](https://github.com/Prock-Liy))
- 明暗双模式设计令牌,主色取自壁纸霓虹招牌
- 支持移动端:禁用背景动画、加重遮罩、导航自适应折叠

## License

见 [LICENSE](./LICENSE)。
