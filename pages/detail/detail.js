const WxParse = require('../../wxParse/wxParse.js');  // 引入富文本转化库
const util = require('../../utils/util.js');          // 引入通用库

//index.js
//获取应用实例
const app = getApp();

// 富文本转化库依赖变量
const article = '';


Page({
  data: {
    title: '',          // 文章标题
    author: '',         // 文章作者或源名称
    favicon: '',        // 源logo
    link: '',           // 原文链接
    pubDate: '',        // 更新日期
    nodes: article,     // 富文本转化变量
    showPopup: false,   // 链接提示弹框，由于个人开发者不具备webview的权限，如果读者想看更多内容，这里提供链接，需到浏览器访问
    linkSrc: '',        // 链接提示弹框的链接数据
  },
  onLoad: function (options) {
    // 加载页面后，用跨页参数在缓存中查询出具体文字内容
    this.showDetail(options.id, options.favicon);
  },

  // 展示文章详情
  showDetail: function (id, favicon) {
    const rssData = wx.getStorageSync('rssData') || {};
    const author = rssData.title || '';

    // const favicon = `${rssData.link}/favicon.ico`;
    const rssDataItem = rssData.item[id];
    const { title, link, pubDate } = rssDataItem;
    // console.log(rssDataItem);
    const that = this;
    this.setData({
      title,
      author,
      favicon,
      link,
      pubDate: pubDate ? util.formatDate("yyyy-MM-dd HH:mm:ss", pubDate) : '', // 日期时间需格式化
    });

    // 多种rss返回值数据的简单兼容处理，待优化（TODO）
    if (rssDataItem['content:encoded']) {
      // 调用富文本转化方法
      WxParse.wxParse('article', 'html', rssDataItem['content:encoded'], that, 5);
      return;
    }

    // 调用富文本转化方法
    WxParse.wxParse('article', 'html', rssDataItem.description, that, 5);
  },

  // 链接弹框显隐控制
  togglePopup: function() {
    this.setData({
      showPopup: !this.data.showPopup
    });
  },

  // 富文本转化库中，添加的自定义绑定方法，当点击<a>标签时展示链接提示
  wxParseTagATap: function (event) {
    const linkSrc = event.currentTarget.dataset.src;
    // console.log(linkSrc);
    if(linkSrc) {
      this.setData({
        showPopup: true,
        linkSrc,
      });
    }
  }
})
