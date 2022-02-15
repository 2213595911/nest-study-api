<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

这个项目是我在学习[Nest](https://github.com/nestjs/nest) 的过程中按照官方文档一步一步写的，虽然比较简陋，但是涵盖的功能已经和官网文档内容一致。

## Feature Implements

- [x] 用户CRUD
- [x] 帖子CRUD
- [x] Jwt和Local策略（token验证
- [x] 文件上传 (multerModule)
- [x] 静态资源托管(staticModule)
- [x] 日志(logger)
- [x] 中间件 (middlewareModule)
- [x] 异常过滤器 (exceptionFilter)
- [x] 管道 (类型转换, 验证 (validatorPipe))
- [x] 守卫 (guardModule
- [x] 发送邮件 (mailer)
- [x] 配置文件统一管理 (configModule)
- [x] 服务监控 (monitor) (bug:无法监听)
- [x] 定时任务 (schedule)
- [x] 返回数据格式统一华 (拦截器)
- [ ] 任务队列 (没有了解过redis)
- [ ] 在线聊天室（技术/服务器端事件发送）
- [ ] 消息转发（技术/http模块

## Installation

```bash
$ npm install
# or
$ yarn
```

## Running the app

```bash
# development
$ npm run start
# or 
$ yarn run start

# watch mode
$ npm run start:dev
# or 
$ yarn run start:dev

# production mode
$ npm run start:prod
# or 
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

api

- 文档地址 - /docs
- 服务状态 - /api/status
