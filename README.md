### 规则生成器项目

> 为解决活动中规则经常变动，且规则文字通常较多带来活动接口的请求速度慢的问题，将规则部分单独拆分出来.

1.data.js中配置活动规则内容（运营通常通过word填写规则，通过word另存为html，复制body里面的内容到data.js）

``` javascript
module.exports = `富文本`
```

2.修改index.js中要生成的名称`RULE_FILE_NAME`

3.然后执行如下命令

> npm start

4.拷贝打印网址到浏览器访问看是否正常

> Upload Complete : 服务器/cdn/activity/rules/test.json
