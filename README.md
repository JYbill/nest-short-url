# 前提
+ 本套serverless模板采用腾讯云cloudBase模板——nextjs模板进行修改，在此基础上修改了Bug，添加了no-nest-cli + webpack HMR构建，以及添加了各种常用的处理器、拦截器、全局过滤器模板。
+ 开发此项目有目的：
  + 尝试nest + serverless的体验
  + 构建一套自己常用的nest template开发模板
  + java微服务转node + ts微服务的转职第一个单体应用小项目，值得纪念。🚀

</br>

# 技术选型

+ 前端：朋友帮忙开发完成
  + `vue + vue Router(2.x)`
  + `Element UI - Vue 2.x`
+ 后端：以做企业项目的标准进行开发的，接口不多，封装多
  + `@nestjs@7.0.0`
  + `@nest/config@1.2.0`
  + `js-yaml@4.1.0`
  + `typescript@4.0.0`
  + `cloudbase/node-sdk@2.7.1`
  + `class-transformer@0.5.1`
  + `class-validator@0.13.2`

</br>

# 项目截图

+ 首页

![](https://gitee.com/JYbill/typroa_pic/raw/master/%20md-images/image-20220303122225872.png)

+ 转链接并跳转

![image-20220303124655684](https://gitee.com/JYbill/typroa_pic/raw/master/%20md-images/image-20220303124655684.png)

![image-20220303124708309](https://gitee.com/JYbill/typroa_pic/raw/master/%20md-images/image-20220303124708309.png)

![image-20220303124821334](https://gitee.com/JYbill/typroa_pic/raw/master/%20md-images/image-20220303124821334.png)

+ 简单的后台管理系统

我没做后台的鉴权，以及token等，需要的自行添加
默认账号：admin
默认密码：123456

![image-20220303124907518](https://gitee.com/JYbill/typroa_pic/raw/master/%20md-images/image-20220303124907518.png)

+ echart图标展示

![image-20220303125104561](https://gitee.com/JYbill/typroa_pic/raw/master/%20md-images/image-20220303125104561.png)

+ 转链数据渲染

![image-20220303125146746](https://gitee.com/JYbill/typroa_pic/raw/master/%20md-images/image-20220303125146746.png)

+ 简单的广告

![image-20220303125213909](https://gitee.com/JYbill/typroa_pic/raw/master/%20md-images/image-20220303125213909.png)

> 此项目的意义：java转成nest后的第一个项目，以springboot标准进行开发，也有很多不合理的地方需要改进，如vo、po、dto分类不太合理，总之先练了个手。

</br>

# 接口
> apifox文件夹下是`apifox`接口工具的导出文件,自己下一个即可，类似于postman的玩法，但是更牛，更高效，自带mock、测试一体，相当于腾讯的`apipost`

</br>

# 数据库
因为使用的是腾讯云数据库(mongodb)所以无需担心字段不一致的问题

</br>

# 其他问题
有问题提`issue`，技术方面可以提问。

</br>

# Bug

## @nest/config *.d.ts 报错TS1005: ',' expected.

+ 报错信息：

```txt
ERROR in ...node_modules\@nestjs\config\dist\types\path-value.type.d.ts(1,220)
      TS1005: ':' expected.
ERROR in ...node_modules\@nestjs\config\dist\types\path-value.type.d.ts(1,220)
      TS1005: ',' expected.
ERROR in ...node_modules\@nestjs\config\dist\types\path-value.type.d.ts(1,220)
      TS1005: ':' expected.
      ...
       TS1005: ',' expected.
```

+ 原因：`typescript`版本低造成的
+ 解决：修改`package.json - typescript锁定版本`

```bash
npm i
# 或
npm update typescript@latest
```

