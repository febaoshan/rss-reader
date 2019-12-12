// pages/index/index.js

// 引入通用方法
const util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    author: '',     // 源名称
    favicon: '',    // 源logo
    copyright: '',  // 源版权
    pubDate: '',    // 源更新时间
    rssData: {},    // 源数据
    defaultRssLogo: util.defaultRssLogo, // 默认logo
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 无网络或者网络情况较差时，默认加载上次缓存的数据（TODO）
    /* let rssData = wx.getStorageSync('rssData') || {};
    rssData = this.data.rssData;
    console.log(rssData);
    wx.setStorageSync('rssData', rssData); */

    const favicon = options.favicon || '';

    if (favicon) {
      this.setData({
        favicon,
      })
    }

    // 默认值
    let rssUrl = 'https://www.zhihu.com/rss';

    // 由rssed页面跳转过来（rss源切换）
    rssUrl = options.rssUrl || rssUrl;

    this.getRss(rssUrl);
  },

  // 获取最新的rss数据
  getRss: function (rssUrl) {
    const that = this;

    wx.showLoading({
      title: '拼命加载中...',
    });

    wx.request({
      url: `xxxxx?rssUrl=${rssUrl}`,
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // const item = res.data.data.rss.channel[0].item[0].description[0];
        // const item = res.data.data.rss.channel.item[0].description;

        // 目前rss有两种主流格式：atom1.0和rss2.0
        // 需要根据响应字段信息来判断格式，然后做兼容处理
        // 响应中存在rss表示rss2.0版本，存在feed表示atom1.0版本
        const { rss, feed } = res.data.data;
        let rssData = {};

        // rss2.0版本
        if (rss) {
          rssData = rss.channel;
        }

        // atom1.0版本，将其转化成rss2.0版本
        if (feed) {
          rssData = feed;
          const { title = '', updated = '', author, entry } = feed;

          rssData = {
            title: typeof (title) === 'object' ? title['_'] : title,
            pubDate: updated,
            item: entry.map((item, index) => {
              return {
                title: typeof (item.title) === 'object' ? item.title['_'] : item.title,
                link: typeof (item.link) === 'object' ? ((item.link instanceof Array) ? item.link[0]['$'].href : item.link['$'].href) : item.link,
                description: item.content['_'],
                pubDate: item.published,
              };
            }),
          }
        }
        
        // console.log('res rssData: ', rssData);

        const { title, link, lastBuildDate = '', copyright = '', pubDate = '' } = rssData;

        // const favicon = `${rssData.link}/favicon.ico`;

        that.setData({
          rssData,
          author: title,
          copyright,
          // favicon,
          pubDate: (lastBuildDate || pubDate) ? util.formatDate("yyyy-MM-dd HH:mm:ss", lastBuildDate || pubDate) : '',
        });

        wx.hideLoading();

        wx.setStorageSync('rssData', rssData);
      }
    });
  },

  // 点击跳转至文章详情页
  handleRssItemTap: (event) => {
    const rssItemData = event.currentTarget.dataset.rssItemData;
    const favicon = event.currentTarget.dataset.rssItemFavicon;
    console.log(event)
    wx.navigateTo({
      url: `../detail/detail?id=${rssItemData}&favicon=${favicon}`,
    });
  }
})