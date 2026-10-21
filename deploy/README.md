# 网站部署

正式访问地址：<https://dsharnessgo.xmmgd.top/>。

## 服务器与解析

- 服务器：`122.51.65.214`，管理账号为 `ubuntu`。
- DNSPod：`xmmgd.top` 下新增 `dsharnessgo` 的 A 记录，默认线路，记录值 `122.51.65.214`，TTL 为 600 秒。
- Nginx 独立配置：`/etc/nginx/sites-available/dsharnessgo.conf`，通过同名软链接启用。
- 站点根目录：`/var/www/dsharnessgo/current`，指向 `releases/<Git 提交 SHA>`。
- ACME 验证目录：`/var/www/dsharnessgo/acme`。

## 发布与回滚

从已合并的 `main` 提交发布。仅上传以下公开文件，保持目录结构：

```text
index.html
style.css
site.js
README.md
CHANGELOG.md
feedback.md
.nojekyll
assets/
```

每次将文件放入独立的 `releases/<Git 提交 SHA>` 目录，校验文件哈希后，用临时软链接配合 `mv -Tf` 原子切换 `current`。保留旧版本目录；回滚时将 `current` 原子切回先前的 release。部署文档、Nginx 配置和 `.git` 不上传到公开目录。

首次部署先启用仅监听 HTTP 的新站配置，保留 `/.well-known/acme-challenge/` 的 webroot 路由。DNS 生效后，使用服务器现有 Certbot 账号申请独立的 `dsharnessgo.xmmgd.top` 证书，再安装本目录的完整 Nginx 配置。每次配置变更先执行 `sudo nginx -t`，成功后执行 `sudo systemctl reload nginx`。

原有 GitHub Pages 工作流继续保留；本服务器部署独立执行。

## HTTPS 与验收

Certbot 使用 webroot 验证，证书位于 `/etc/letsencrypt/live/dsharnessgo.xmmgd.top/`。复用服务器的 `certbot.timer`，该证书的 deploy hook 在续期后执行 `nginx -t && systemctl reload nginx`。

发布后检查：

- 权威 DNS 和公共递归 DNS 返回目标 IP。
- HTTP 跳转至 HTTPS，证书域名及信任链有效。
- 首页包含「闽ICP备2026030407号」，链接到 `https://beian.miit.gov.cn/`。
- CSS、JavaScript、图片和站内文档可访问；不存在的资源返回 404，隐藏文件禁止访问。
- 桌面与手机宽度下页脚正常展示。
- `sudo certbot renew --cert-name dsharnessgo.xmmgd.top --dry-run` 成功。
- 原官网首页保持可访问。
