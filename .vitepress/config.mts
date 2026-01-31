import { defineConfig } from "vitepress";
import markdownItVideo from "@vrcd-community/markdown-it-video";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // --- Markdown 扩展配置 ---
  markdown: {
    config: (md) => {
      md.use(markdownItVideo, {
        youtube: { width: '100%', height: '387px' },
        bilibili: { width: '100%', height: '387px' }
      });
    }
  },

  // --- Head 区域深度优化 (共享配置) ---
  head: [
    // 0. IE浏览器检测脚本 - 必须在其他脚本之前加载
    ["script", { src: "/ie-detector-legacy.js" }],

    // 1. 基础资源
    ["link", { rel: "icon", href: "/icon.ico" }],
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, viewport-fit=cover" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ],

  title: "Alas 文档",
  description: "",

  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "加入社群", link: "https://addgroup.nanoda.work" },
    ],

    sidebar: {
      "/docs": [
        {
          text: "快速了解",
          collapsed: true,
          items: [
            { text: "概览", link: "/docs/info/infos" },
            { text: "Alas Plus 配置教程", link: "/docs/info/tutorial" },
            { text: "Alas 社区准则", link: "/docs/info/rules" },
          ],
        },
        {
          text: "快速开始",
          collapsed: true,
          items: [
            { text: "换源教程", link: "/docs/start/start" },
          ],
        },
      ]
    },

    // 共享的社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/wess09/AzurLaneAutoScript" },
    ]
  }
}); 