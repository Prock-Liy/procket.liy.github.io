// 全站固定背景层:像素城市壁纸 + 可读性遮罩
// 通过 rootComponents 注入,路由切换时层不重建,背景始终固定于视口
import { defineClientConfig } from "vuepress/client";
import { computed, defineComponent, h } from "vue";
import { useRoute } from "vuepress/client";

const SiteBackground = defineComponent({
  name: "SiteBackground",
  setup() {
    const route = useRoute();
    // 首页遮罩更轻,让壁纸充分露出;其余页面遮罩较重保证正文可读
    const isHome = computed(
      () => route.path === "/" || route.path === "/index.html",
    );
    // 壁纸路径跟随部署 base(本地 "/" / GitHub Pages 项目站点子路径)
    document.documentElement.style.setProperty(
      "--site-bg-url",
      `url("${import.meta.env.BASE_URL}hero-bg.png")`,
    );
    return () =>
      h(
        "div",
        {
          class: ["site-bg", { "site-bg--home": isHome.value }],
          "aria-hidden": "true",
        },
        [
          h("div", { class: "site-bg__image" }),
          h("div", { class: "site-bg__scrim" }),
        ],
      );
  },
});

export default defineClientConfig({
  rootComponents: [SiteBackground],
});
