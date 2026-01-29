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
    logo: '/nekro_agent_logo.webp',
    search: { provider: 'local' },

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
            { text: "概览", link: "/docs/info/info" },
            { text: "Alas 社区准则", link: "/docs/info/rules" },
          ],
        },
        {
          text: "快速开始",
          collapsed: true,
          items: [
            { text: "基础教程", link: "/docs/start/introduction" },
            { text: "快速上手", link: "/docs/start/index" },
            { text: "FAQ (常见问题)", link: "/docs/start/FAQ" },
            { text: "基础配置", link: "/docs/start/config" },
            { text: "界面说明", link: "/docs/start/ui" },
            { text: "目录结构", link: "/docs/start/folder" },
            { text: "调度器", link: "/docs/start/scheduler" },
            { text: "过滤器", link: "/docs/start/filter" },
            { text: "消息推送", link: "/docs/start/message-push" },
            { text: "远程控制", link: "/docs/start/remote-control" },
            { text: "常见错误处理", link: "/docs/start/normal-errors" },
          ],
        },
        {
          text: "基本配置",
          collapsed: true,
          items: [
            { text: "协议端配置", link: "/docs/02_quick_start/config/protocol" },
            { text: "系统配置", link: "/docs/02_quick_start/config/system" },
            { text: "应用更新", link: "/docs/02_quick_start/config/update" },
          ],
        },

        {
          text: "进阶指南",
          collapsed: true,
          items: [
            { text: "模型组配置", link: "/docs/03_advanced/model_config" },
            { text: "模型选择", link: "/docs/03_advanced/model_usage" },
            { text: "人设技巧", link: "/docs/03_advanced/persona_tips" },
            { text: "会话独立人设", link: "/docs/03_advanced/session_persona" },
            { text: "用户管理", link: "/docs/03_advanced/user_management" },
            { text: "插件用例", link: "/docs/03_advanced/plugin_usage" },
            { text: "插件生成器", link: "/docs/03_advanced/plugin_generator" },
            { text: "基础命令指南", link: "/docs/03_advanced/commands_basic" },
            { text: "调试命令指南", link: "/docs/03_advanced/commands_debug" },
          ],
        },
        {
          text: "插件开发",
          collapsed: true,
          items: [
            { text: "引言", link: "/docs/04_plugin_dev/00_introduction" },
            { text: "快速上手", link: "/docs/04_plugin_dev/01_quick_start" },
            {
              text: "插件核心概念",
              link: "/docs/04_plugin_dev/02_plugin_basics",
              collapsed: true,
              items: [
                { text: "插件实例与生命周期", link: "/docs/04_plugin_dev/02_plugin_basics/2.1_plugin_instance" },
                { text: "沙盒方法详解", link: "/docs/04_plugin_dev/02_plugin_basics/2.2_sandbox_methods" },
                { text: "插件配置", link: "/docs/04_plugin_dev/02_plugin_basics/2.3_configuration" },
                { text: "数据存储", link: "/docs/04_plugin_dev/02_plugin_basics/2.4_storage" },
                { text: "提示词注入", link: "/docs/04_plugin_dev/02_plugin_basics/2.5_prompt_injection" },
                { text: "上下文对象", link: "/docs/04_plugin_dev/02_plugin_basics/2.6_agent_context" },
              ],
            },
            {
              text: "高级功能",
              link: "/docs/04_plugin_dev/03_advanced_features",
              collapsed: true,
              items: [
                { text: "Webhook 接入点（弃用）", link: "/docs/04_plugin_dev/03_advanced_features/3.1_webhooks" },
                { text: "文件交互", link: "/docs/04_plugin_dev/03_advanced_features/3.2_file_interaction" },
                { text: "使用向量数据库", link: "/docs/04_plugin_dev/03_advanced_features/3.3_vector_database" },
                { text: "动态路由", link: "/docs/04_plugin_dev/03_advanced_features/3.4_dynamic_router" },
                { text: "动态包导入", link: "/docs/04_plugin_dev/03_advanced_features/3.5_dynamic_package_import" },
              ],
            },
            { text: "系统 API 参考", link: "/docs/04_plugin_dev/04_system_api_reference" },
          ],
        },
        {
          text: "应用开发",
          collapsed: true,
          items: [
            { text: "Linux 开发环境准备", link: "/docs/05_app_dev/dev_linux" },
            { text: "Windows 开发环境准备", link: "/docs/05_app_dev/dev_win" },
            { text: "MacOS 开发环境准备", link: "/docs/05_app_dev/dev_macos" },
          ],
        },
        {
          text: "故障排除",
          collapsed: true,
          items: [
            { text: "常见问题解答", link: "/docs/06_troubleshooting/faq" },
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