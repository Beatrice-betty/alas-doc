# Alas Plus 换源教程

::: tip 💡 什么是换源？
Alas 默认使用官方源进行更新。本教程将指导你如何切换到**Alas Plus**，该版本在原版基础上增加了更多高级功能。
:::

## 📋 Alas Plus 特性

Alas Plus 在原版的基础上增加了以下功能：

- **🔥 侵蚀一**: 强制移动杜绝漏猫问题，卡吊机功能，短猫侵蚀一无缝衔接等
- **⚡ 短猫相接**: 突破2k行动力限制和10w黄币限制等
- **🏝️ 岛屿计划**: 可自动备菜，提交货运委托等
- **🎉 主线**: 适配16图

## ⚠️ 重要声明

禁止将本源以任何形式发在 alas 原版群里

## 📋 支持的源地址

| 平台 | 地址 | 说明 |
|------|------|------|
| Gitee | `https://gitee.com/wqeaxc/AzurLaneAutoScript1` | 国内访问速度快 |
| GitHub | `https://github.com/wess09/AzurLaneAutoScript` | 国际访问 |

::: warning 注意
两个仓库内容同步，根据你的网络环境选择合适的源。国内用户建议使用 Gitee 源以获得更快的下载速度。
:::

## 🚀 换源步骤

Alas 只能通过修改配置文件手动换源，请按以下步骤操作：

### 1. 找到配置文件

打开 Alas 安装目录，进入 `config` 文件夹，找到 `deploy.yaml` 文件。

文件路径示例：
```
Alas/
├── config/
│   └── deploy.yaml  <-- 修改这个文件
├── module/
├── assets/
└── ...
```

### 2. 编辑仓库地址

使用记事本或其他文本编辑器打开 `deploy.yaml` 文件，找到 `Repository` 配置项：

::: details 点击查看完整配置示例
```yaml
Deploy:
  Git:
    # URL of AzurLaneAutoScript repository
    # [CN user] Use 'https://gitee.com/wqeaxc/AzurLaneAutoScript1' for faster and more stable download
    # [Other] Use 'https://github.com/wess09/AzurLaneAutoScript'
    Repository: https://github.com/LmeSzinc/AzurLaneAutoScript  # <-- 修改这一行

    # Branch of Alas
    # [Developer] Use 'dev', 'app', etc, to try new features
    # [Other] Use 'master', the stable branch
    Branch: master

    # Filepath of git executable `git.exe`
    # [Easy installer] Use './toolkit/Git/mingw64/bin/git.exe'
    # [Other] Use you own git
    GitExecutable: ./toolkit/Git/mingw64/bin/git.exe

    # Set git proxy
    # [CN user] Use your local http proxy (http://127.0.0.1:{port}) or socks5 proxy (socks5://127.0.0.1:{port})
    # [Other] Use null
    GitProxy: null
```
:::

将 `Repository` 的值修改为以下之一：

::: code-group
```yaml [Gitee 源（推荐国内用户）]
Repository: https://gitee.com/wqeaxc/AzurLaneAutoScript1
```

```yaml [GitHub 源]
Repository: https://github.com/wess09/AzurLaneAutoScript
```
:::

### 3. 保存并更新

1. **保存文件修改**
2. **重启 Alas** 使配置生效
3. 在 Alas 界面点击【检查更新】或【立即更新】
4. 等待更新完成

## ✅ 验证换源成功

完成换源后，可以通过以下方式验证：

1. **检查更新日志**
   - 在 Alas 界面查看更新日志
   - 确认显示的仓库地址为新源地址

2. **测试功能**
   - 运行【大型作战】功能
   - 确认特化版优化已生效

## 🔧 常见问题

::: details 更新失败怎么办？

**问题1：网络连接超时**
- 尝试切换另一个源（Gitee ↔ GitHub）
- 检查网络连接或代理设置
- 暂时关闭防火墙或杀毒软件

**问题2：权限不足**
- 以管理员身份运行 Alas
- 检查文件夹写入权限

**问题3：Git 冲突**
```bash
# 在 Alas 目录下执行
git fetch --all
git reset --hard origin/master
git pull
```
:::

::: details 如何回退到官方源？

如果需要切换回官方源，将 `Repository` 改为：
```yaml
Repository: https://github.com/LmeSzinc/AzurLaneAutoScript
```
然后重新执行更新步骤即可。
:::

::: danger 注意
除非你知道自己在做什么，否则**不要修改** `Branch` 配置项。保持 `Branch: master` 即可。
:::

## 📌 大世界特化版特性

切换到该版本后，你将获得以下优化：

| 特性 | 说明 |
|------|------|
| 🗺️ 智能开荒 | 自动识别未探索海域，优先完成开荒 |
| ⚔️ 高效作战 | 优化大型作战行动顺序，减少体力浪费 |
| 🎁 自动兑换 | 自动识别并兑换海域奖励 |
| 🐱 买猫优化 | 智能判断猫箱购买策略 |
| 📊 数据分析 | 记录作战数据，优化后续行动 |

## 💬 获取帮助

如在换源过程中遇到问题：

- 📖 查看 [官方 FAQ](https://alas-wiki.saarcenter.com/zh-CN/manual/quick-start/FAQ.html)
- 🐛 在 [GitHub Issues](https://github.com/wess09/AzurLaneAutoScript/issues) 提交问题
- 💭 加入交流群获取技术支持

---

::: tip 提示
建议定期更新以获得最新功能和修复。特化版会同步官方版的核心更新，同时保持大世界优化特性。
:::
