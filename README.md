# 技术选型
+ `@nestjs@7.0.0`
+ `@nest/config@1.2.0`
+ `typescript@4.0.0`
+ `cloudbase/node-sdk@2.7.1`

</br>

# 开发日志/TODO
+ 搭建no-cli + webpack HMR开发环境
+ 搭建运行处理环境: 全局异常过滤器, 全局日志打印中间件, 拒绝接口处理中间件, 以及pojo、dto、自定义异常、自定义工具类、读取yaml配置类, 并测试以上所述, 实现基本实现
+ 封装, 所有可变字符串用静态常量代替
+ 封装成可复用组件, 如异常上抛, 全局异常过滤器处理
+ 开发部分静态文件
+ `covert`接口：完成接口，完成存储
+ `user`接口：完成CRUD接口，对应存储
+ 当天的所有转换
+ 7天的

</br>

# Bug

## @nest/config *.d.ts 报错TS1005: ',' expected.

+ 报错信息：

```js
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

