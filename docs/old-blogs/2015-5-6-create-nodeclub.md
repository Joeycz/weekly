---
layout: post
title: 使用nodeclub搭建本地SNS论坛初探
category : js
tagline: "原创"
tags : [js]
keywords: [js, node,SNS]
---
今天用nodejs中国开源在github上的nodeclub在自己的电脑上搭建了一个本地sns应用，这是一个用nodeJS和mongoDB组合的论坛系统，官方的安装说明很简单，基本上说明了一些依赖关系，首先下载开源的nodeclub，然后就是需要安装nodeJS和mongoDB，因为我之前已经安装了nodeJS，所以只需要安装mongoDB，因为我是在MAC上安装，我选择了homebrew的方法，
<code>
brew update
</code>
这个过程要等一段时间才有反应，等一会儿。然后
<code>
brew install mongoDB
</code>
如果不出意外这样就就安装上了mongoDB，然后<code>mongod</code>运行数据库，我还下载了mongoDB的可视化工具robomongoDB，还是有界面的好，哎，天生不是命令行的命了。


之后在nodeclub的文件下执行<code>make install</code>命令，可是，我在这一步就遇到了麻烦，始终抱错，排查后发现，有一个依赖包bcrypt总是报错，后来把版本从0.8.1改成0.8.0才成功安装。


最后执行<code>node app.js</code>命令，如果不行，就加上<code>sudo</code>，这个时候打开http://localhost:3000就可以在本地调试自己的SNS论坛啦。

对了，还需要安装redis，redis的安装很简单，按照官网的说明安装就好了，然后运行redis和mongoDB，整个过程保持运行。这样就大功告成了。
