import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/tech/": [
    {
      text: "后端开发",
      icon: "fa6-solid:layer-group",
      collapsible: false,
      children: [
        {
          text: "Java 基础与进阶",
          icon: "fa6-brands:java",
          children: [
            "/tech/backend/java/java-basics/",
            "/tech/backend/java/collections-concurrency/",
            "/tech/backend/java/jvm/",
            "/tech/backend/java/design-patterns/",
          ],
        },
        {
          text: "Spring 技术栈",
          icon: "fa6-solid:leaf",
          children: [
            "/tech/backend/spring/spring/",
            "/tech/backend/spring/spring-boot/",
            "/tech/backend/spring/spring-cloud/",
            "/tech/backend/spring/spring-ai/",
          ],
        },
        {
          text: "数据库与中间件",
          icon: "fa6-solid:database",
          children: [
            "/tech/backend/database/mysql/",
            "/tech/backend/database/redis/",
            "/tech/backend/database/message-queue/",
            "/tech/backend/database/elasticsearch/",
          ],
        },
        {
          text: "微服务与分布式",
          icon: "fa6-solid:diagram-project",
          children: [
            "/tech/backend/microservice/architecture/",
            "/tech/backend/microservice/distributed-transaction/",
            "/tech/backend/microservice/distributed-lock/",
            "/tech/backend/microservice/service-governance/",
          ],
        },
        {
          text: "Linux 与服务器",
          icon: "fa6-brands:linux",
          children: [
            "/tech/backend/linux/basics/",
            "/tech/backend/linux/system-admin/",
            "/tech/backend/linux/network-security/",
            "/tech/backend/linux/service-deployment/",
            "/tech/backend/linux/log-troubleshooting/",
          ],
        },
        {
          text: "Docker 与容器化",
          icon: "fa6-brands:docker",
          children: [
            "/tech/backend/docker/basics/",
            "/tech/backend/docker/dockerfile/",
            "/tech/backend/docker/compose/",
            "/tech/backend/docker/java-containerization/",
            "/tech/backend/docker/container-ops/",
          ],
        },
        {
          text: "工程实践",
          icon: "fa6-solid:screwdriver-wrench",
          children: [
            "/tech/backend/engineering/git/",
            "/tech/backend/engineering/maven/",
            "/tech/backend/engineering/cicd/",
            "/tech/backend/engineering/deploy-release/",
          ],
        },
        {
          text: "面试与项目实战",
          icon: "fa6-solid:user-tie",
          children: [
            "/tech/backend/interview/java-interview/",
            "/tech/backend/interview/issue-troubleshooting/",
            "/tech/backend/interview/solution-design/",
            "/tech/backend/interview/performance/",
          ],
        },
      ],
    },
    {
      text: "AI 人工智能",
      icon: "fa6-solid:robot",
      collapsible: false,
      children: [
        "/tech/ai/llm-basics/",
        "/tech/ai/prompt-engineering/",
        "/tech/ai/rag/",
        "/tech/ai/ai-agent/",
        "/tech/ai/mcp-development/",
        "/tech/ai/ai-app-dev/",
        "/tech/ai/ai-workflow/",
        "/tech/ai/model-deploy/",
      ],
    },
    {
      text: "计算机基础",
      icon: "fa6-solid:microchip",
      collapsible: false,
      children: [
        "/tech/cs/computer-network/",
        "/tech/cs/data-structures-algorithms/",
        "/tech/cs/operating-system/",
        "/tech/cs/architecture-design/",
      ],
    },
  ],
  "/photo/": [
    {
      text: "摄影学习",
      icon: "fa6-solid:school",
      collapsible: false,
      children: [
        "/photo/learning/basics/",
        "/photo/learning/composition/",
        "/photo/learning/portrait/",
        "/photo/learning/landscape/",
        "/photo/learning/retouching/",
      ],
    },
    {
      text: "视频剪辑",
      icon: "fa6-solid:film",
      collapsible: false,
      children: [
        "/photo/video/shooting/",
        "/photo/video/editing-basics/",
        "/photo/video/editing-software/",
        "/photo/video/color-audio/",
        "/photo/video/post-production/",
      ],
    },
    {
      text: "影像作品集",
      icon: "fa6-solid:image",
      collapsible: false,
      children: [
        "/photo/gallery/photography/",
        "/photo/gallery/videography/",
      ],
    },
  ],
  "/life/": [
    {
      text: "生活手记",
      icon: "fa6-solid:mug-hot",
      collapsible: false,
      children: [
        "/life/essays/",
        "/life/growth/",
        "/life/yearly-plan/",
        "/life/reading/",
        "/life/travel/",
        "/life/monthly-summary/",
      ],
    },
  ],
  "/projects/": [
    {
      text: "项目",
      icon: "fa6-solid:diagram-project",
      collapsible: false,
      children: [
        "/projects/ai-mcp-gateway/",
        "/projects/ai-agent-drwo-io/",
        "/projects/mcp-server-weixin-send-msg/",
      ],
    },
  ],
});
