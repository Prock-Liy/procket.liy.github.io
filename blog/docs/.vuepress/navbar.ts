import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "主页", icon: "fa6-solid:house", link: "/" },
  {
    text: "项目",
    icon: "fa6-solid:diagram-project",
    link: "/projects/",
    children: [
      {
        text: "ai-mcp-gateway",
        icon: "fa6-solid:robot",
        link: "/projects/ai-mcp-gateway/",
      },
      {
        text: "ai-agent-drwo.io",
        icon: "fa6-solid:robot",
        link: "/projects/ai-agent-drwo-io/",
      },
      {
        text: "mcp-server-weixin-send-msg",
        icon: "fa6-solid:paper-plane",
        link: "/projects/mcp-server-weixin-send-msg/",
      },
    ],
  },
  {
    text: "技术学习",
    icon: "fa6-solid:book",
    link: "/tech/",
    children: [
      {
        text: "后端开发",
        icon: "fa6-solid:layer-group",
        link: "/tech/backend/",
        children: [
          { text: "Java 基础与进阶", link: "/tech/backend/java/" },
          { text: "Spring 技术栈", link: "/tech/backend/spring/" },
          { text: "数据库与中间件", link: "/tech/backend/database/" },
          { text: "微服务与分布式", link: "/tech/backend/microservice/" },
          { text: "Linux 与服务器", link: "/tech/backend/linux/" },
          { text: "Docker 与容器化", link: "/tech/backend/docker/" },
          { text: "工程实践", link: "/tech/backend/engineering/" },
          { text: "面试与项目实战", link: "/tech/backend/interview/" },
        ],
      },
      {
        text: "AI 人工智能",
        icon: "fa6-solid:robot",
        link: "/tech/ai/",
      },
      {
        text: "计算机基础",
        icon: "fa6-solid:microchip",
        link: "/tech/cs/",
      },
    ],
  },
  {
    text: "摄影创作",
    icon: "fa6-solid:camera-retro",
    link: "/photo/",
    children: [
      { text: "摄影学习", icon: "fa6-solid:school", link: "/photo/learning/" },
      { text: "视频剪辑", icon: "fa6-solid:film", link: "/photo/video/" },
      { text: "影像作品集", icon: "fa6-solid:image", link: "/photo/gallery/" },
    ],
  },
  {
    text: "生活手记",
    icon: "fa6-solid:mug-hot",
    link: "/life/",
  },
]);
