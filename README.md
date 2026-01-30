# Alas 文档站

## 📖 项目简介

Alas plus文档站是基于 VitePress 开发的官方文档网站，旨在提供全面、清晰的 Alas plus使用指南。

这里是一张GUI预览图：
![gui](https://i.ibb.co/yBn1Bt9Y/GUI.png)

## 一.alas plus在原版的基础上增加的功能

- **🔥侵蚀一**：强制移动杜绝漏猫问题，卡吊机功能，短猫侵蚀一无缝衔接等
- **⚡短猫相接**：突破2k行动力限制和10w黄币限制等
- **🏝️岛屿计划**：可自动备菜，提交货运委托等
- **🎉主线**：适配16图

# 二.禁止将本源以任何形式发在alas原版群里 

## 三.换源教程 ~~懒得看文字，按照图片一个一个改就行~~

Windows 换源教程 
1. 下载原版Alas
[下载地址](https://lmeszinc.lanzouu.com/iDvK230zn57e)
2. 打开文件夹/AzurLaneAutoScript/config
![文件图片](https://i.ibb.co/PvJRtR9Y/image.png)
3. 修改文件 deploy.yaml
#### 下面是github源：https://github.com/wess09/AzurLaneAutoScript
![github](https://i.ibb.co/gMYKQMZD/github.png)

#### 下面是gitee源：https://gitee.com/wqeaxc/AzurLaneAutoScript1 
![gitee](https://i.ibb.co/7tctz4j3/gitee.png)

下载好后将deploy.yaml文件放在AzurLaneAutoScript\config文件夹的里面，直接替换

## 四.部署教程
mac M 系列芯片部署
[教程链接](https://www.bilibili.com/opus/1156311608203411461)
配置文件同Windows一样

## 五.配置教程

### 1.主题

在主页这里,可以更换语言和主题
![主题](https://i.ibb.co/DgbGQcwP/image.png)

### 2.游戏设置和模拟器设置

**2.1游戏设置**

对照这个表格修改游戏内的设置，~~正常玩过游戏的都这么设置~~。

> 对着改的意思是，这是统一的标准，照着给定的内容执行，不要问为什么，不允许有不一样的。

主界面 => 右下角：设置 => 左侧边栏：选项

| 设置名称                            | 值   |
| ----------------------------------- | ---- |
| 帧数设置                            | 60帧 |
| 大型作战设置 - 减少TB引导           | 开   |
| 大型作战设置 - 自律时自动提交道具   | 开   |
| 大型作战设置 - 安全海域默认开启自律 | 关   |
| 剧情自动播放                        | 开启 |
| 剧情自动播放速度调整                | 特快 |
| 待机模式设置 - 启用待机模式         | 关    |
| 其他设置 - 重复角色获得提示         | 关   |
| 其他设置 - 快速更换二次确认界面     | 关   |
| 其他设置 - 展示结算角色             | 关   |

大世界 => 右上角：雷达 => 指令模块(order)：潜艇支援：
| 设置名称                                                 | 值               |
| -------------------------------------------------------- | ---------------- |
| X 消耗时潜艇出击  |取消勾选|

主界面 => 右下角：建造 => 左侧边栏： 退役 => 左侧齿轮图标：一键退役设置：

| 设置名称                                                 | 值               |
| -------------------------------------------------------- | ---------------- |
| 选择优先级1                                              | R                |
| 选择优先级2                                              | SR               |
| 选择优先级3                                              | N                |
| 「拥有」满星的同名舰船时，保留几艘符合退役条件的同名舰船 | 不保留           |
| 「没有」满星的同名舰船时，保留几艘符合退役条件的同名舰船 | 满星所需或不保留 |

将角色设备的装备外观移除，以免影响图像识别

**2.2模拟器设置**
mumu模拟器
![mumu](https://i.ibb.co/WpWH4CM1/mumu.png)

## 3.智慧港区

### 3.1港区设置

**3.1.1模拟器连接设置**
模拟器 Serial：选择模拟器adb连接方式,默认有推荐
默认配置如下
![模拟器](https://i.ibb.co/xq3VmBVq/image.png)
截图方案请去工具位置，打开性能测试，alas会自动选择最优解

**3.1.2消息推送设置**
下面是企业微信推送的方法相对简单：
[企业微信设置机器人](https://bettergi.com/tutorial/notification_wechat.html#%E5%B7%B2%E7%BB%8F%E5%8A%A0%E5%85%A5%E4%BC%81%E4%B8%9A%E7%9A%84%E5%90%8C%E5%BF%97-%E7%82%B9%E5%87%BB%E3%80%90look-here%E3%80%91-%E4%BC%9A%E6%80%8E%E4%B9%88%E6%96%B0%E5%BB%BA%E7%9A%84%E5%90%8E%E9%9D%A2%E5%B0%B1%E6%8F%90%E5%8F%8A%E6%97%B6%E7%95%A5%E8%BF%87)

先照着上面的链接设置机器人，获取到key

![微信推送](https://i.ibb.co/whjDjM7V/image.jpg)
然后复制下来粘贴到alas推送里面，格式为:

provider: wechatworkbot

key: https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=

![推送设置](https://i.ibb.co/ksc85Tng/image.jpg)

其他推送详见文档
[文档](https://github.com/LmeSzinc/AzurLaneAutoScript/wiki/Onepush-configuration-%5BCN%5D)

验证：把游戏切换到啾信页面启动 alas ，等待10秒左右会报错并发送 GamePageUnknownError

### 3.2通用设置

**3.2.1科研**

极端qq人（只做装备）：
S8-DR0.5 > S8-Q0.5 > S8-PRY0.5 > S8-H0.5 > S8-Q4 > S8-Q2 > S8-Q1 > S8-G4 > S8-E-315 > S8-G1.5 > S8-E-031 > reset > S8-DR2.5 > S8-PRY2.5 > S8-H1 > S8-G2.5 > shortest
![科研](https://i.ibb.co/HTLv3qfX/image.png)

## 4.大世界

### 4.1大世界通用设置
![](https://i.ibb.co/4wY1YZ54/a.png)

### 4.2短猫设置
![](https://i.ibb.co/99GJQ2wd/B.png)

短猫推荐刷取12.13海域，行动力建议设置：月初3k+，月末2k+

### 4.3侵蚀一设置

**4.3.1练级设置**
![练级](https://i.ibb.co/NgYGp5WV/71-c.png)

黄币保留量推荐：1.长期24小时刷：3w  2.短期随缘刷：10w

**4.3.2塞壬研究装置bug利用**
![bug](https://i.ibb.co/WNYFS7qT/71-d.png)

安全海域推荐刷取158.159海域，防止卡的吊机被每日刷没
指定bug利用区域为你吊机所处的位置

**4.3.3智能化调度设置**
![调度](https://i.ibb.co/ccr5DGg0/71-e.png)

1.行动力控制侵蚀一：黄币到达最低阈值时启动短猫相接获取黄币，行动力不足短猫消耗，黄币又不够就推迟时间
2.黄币控制侵蚀一：侵蚀一保存的黄币+需要补充的黄币数＝黄币数，在刷取到足够黄币直接关闭短猫
黄币控制能保证不过多浪费行动力，行动力控制能保证给侵蚀一留取足够黄币，自行选择

**4.3.4每日经验检测**
![经验](https://i.ibb.co/8n0TzfYQ/K.png)

只做参考，建议不要开启延迟任务，alas检测时可能会漏掉几个

### 4.4杂项设置

**4.4.1每月开荒**
![开荒](https://i.ibb.co/pBn8G2y7/f.png)

**4.4.2大世界每日**
![每日](https://i.ibb.co/d0GSJs6K/g.png)

**4.4.3隐秘海域**
![隐秘](https://i.ibb.co/tpK28JCz/h.png)

### 4.5原理解析
[【百万海里】全村最细的碧蓝航线侵蚀一全过程教学](https://www.bilibili.com/video/BV1bkroBLEi7/?share_source=copy_web&vd_source=bf7e55e0eede1c89d03065b566eb7a96)

[【碧蓝航线】3分钟学会侵蚀1的无限循环](https://www.bilibili.com/video/BV1H6anzbEMM/?share_source=copy_web&vd_source=bf7e55e0eede1c89d03065b566eb7a96)

**海域id**
![id](https://i.ibb.co/kgj4PCcQ/id-i.jpg)

**吊机原理**
![原理](https://i.ibb.co/dJLmxHxC/j.jpg)
