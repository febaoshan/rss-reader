# rss-reader
微信小程序rss阅读器

以下内容全文请参看：https://www.jianshu.com/p/b34bac08151c


### 写在前面
小程序开发渐进红利期，更多开发者慕名而来，网上的学习资料也层出不穷，有点眼花缭乱的意思了。在经过一个多月的摸索式学习后，我也终于写了不算精美的一个小程序。

那为什么写这篇文章：
- 总结经验 - 写文章能带来更多的思考，为后续开发做准备
- 分享经验 - 网上的资料真的太多了，希望我这篇文章能有所用

### 几个问题
1. 适合哪些读者？
本文适合对小程序有兴趣，且已阅读过[官网：微信小程序开发教程](https://mp.weixin.qq.com/debug/wxadoc/dev/)，体验过官方demo，想进一步学习开发的读者
2. 包含哪些技术点？
主要包括：微信小程序常见语法、跨页面传参、缓存使用、本地数据模拟、第三方`UI库`的使用、`富文本`转义、数据结构设计、后端数据请求、nodejs服务代理转发
3. 有何特点？
思路、注释、[源代码](https://github.com/gitshan/rss-reader)

## 正文

### 简介
取了一个很low的名字“全民精进阅读”，意为沉浸式阅读体验，是一款[rss](https://baike.baidu.com/item/rss/24470?fr=aladdin)源阅读小程序，主要功能包括：已关注源、源列表、源文章详情、源中心。可直接阅读知乎每日精选、the week等优质中英文源。

使用起来效果是这样的：
![使用效果](https://upload-images.jianshu.io/upload_images/13326367-d0f848f9a6002d22.gif?imageMogr2/auto-orient/strip)

也可以直接微信扫码体验：
![全民精进阅读-小程序码](http://upload-images.jianshu.io/upload_images/13326367-a97b0c1e51c9283d?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
