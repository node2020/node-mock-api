# node-mock-api 
参考 https://www.cnblogs.com/0314dxj/p/11359428.html

##手动创建koa项目
```
    前置条件: npm install koa
    
    1. npm init -y 生成 package.json
        并且加入依赖:
          "dependencies": {
            "koa": "^2.11.0"
          }
   2. npm install 安装插件
   
   3.运行相应JS
```
###使用脚手架创建(推荐)
```$xslt
　打开cmd，输入：
  1. npm install koa-generator -g

　2. koa2 demo -e --ejs     后面是使用ejs模板的

　3. cd到demo文件下，输入命令npm install

　4. 运行项目 npm start
```