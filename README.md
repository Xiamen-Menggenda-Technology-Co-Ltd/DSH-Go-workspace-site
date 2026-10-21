# DSH Go-workspace

DSHarness Go 电脑互联插件。支持局域网 HTTPS 配对、设备管理、GO 账号登录、App 扫码登录，以及同账号远程连接。

官方网站：<https://dsharnessgo.xmmgd.top/>。

## 安装

npm 公共预览版本为 0.6.4-desktop.14，来源于电脑客户端实际安装包。DSH Web 安装命令为：

```sh
dsh plugin --profile web add dsh-go-workspace
```

也可指定准确版本：

```sh
dsh plugin --profile web add dsh-go-workspace@0.6.4-desktop.14
```

Desktop 请使用客户端插件页，安装到客户端所管理的 profile。

## 连接

打开侧栏的「DSHarness Go 互联插件」。局域网模式选择「本地局域网」，开启访问并生成配对信息，在手机「连接电脑」中配对。账号模式在「GO 账号登录」使用密码或 App 扫码登录。手机需先登录，扫码后核对并确认。登录与远程授权相互独立。

同账号远程连接需要插件、App 和账号服务三端兼容。手机和电脑登录同一已验证账号，电脑保持在线；首次连接核对安全码并由电脑允许。

## 反馈

下载 [反馈模板](feedback.md)，填写 DSH、插件、App 版本、连接方式、复现步骤和错误提示。[公开反馈入口](https://github.com/Xiamen-Menggenda-Technology-Co-Ltd/DSH-Go-workspace-site/issues/new/choose)。页面不会向任何人自动发送资料。不要附带二维码、配对码、令牌或私有路径。

## 版本与许可

[更新日志](CHANGELOG.md)。产品展示仓库仅包含用户说明和测试界面截图。安装包包含 Apache-2.0 与 AGPL-3.0-only 组件；所需对应源码须另行提供，私有开发仓库不免除相关许可义务。

## 对应源码

本版本对应源码与构建输入：[下载源码归档](https://github.com/Xiamen-Menggenda-Technology-Co-Ltd/DSH-Go-workspace-site/releases/download/plugin-v0.6.4-desktop.14/dsh-go-workspace-0.6.4-desktop.14-corresponding-source.tar.gz)。原作者归属、Apache-2.0 与 AGPL-3.0 许可保留在归档中。开发历史和独立服务器配置不包含在展示仓库内。
