# 技术选型
+ `@nestjs@7.0.0`
+ `@nest/config@1.2.0`
+ `js-yaml@4.1.0`
+ `typescript@4.0.0`
+ `cloudbase/node-sdk@2.7.1`
+ `class-transformer@0.5.1`
+ `class-validator@0.13.2`

</br>

# 项目截图

![](C:\Users\xiaoqinvar\AppData\Roaming\Typora\typora-user-images\image-20220303122225872.png)



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

