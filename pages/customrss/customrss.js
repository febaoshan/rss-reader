// pages/customrss.js
const util = require('../../utils/util.js');          // 引入通用库

Page(Object.assign({}, {
  data: {
    title: '',
    link: '',
    description: '',
    favicon: '',
    rssUrl: '',
    remark: '',
    isDefaultFavicon: false,
  },

  onLoad: function () {

  },

  onShow: function () {
  },

  // logo预览
  handleLogoDisplay: function (e) {
    const favicon = e.detail.value;

    if (favicon) {
      this.setData({
        favicon,
      });
    }
  },

  useDefaultLogo: function () {
    this.setData({
      favicon: util.defaultRssLogo,
      isDefaultFavicon: true,
    });
  },

  handleCancel: function () {
    wx.navigateBack({
      delta: 1,
    });
  },

  handleSubmit: function (e) {
    const curValue = e.detail.value;
    const { rssUrl, title, favicon } = curValue;
    const { isDefaultFavicon } = this.data;

    if (!rssUrl || !title || !favicon) {
      wx.showToast({
        title: '必填项不能为空哦~',
        icon: 'none',
      });

      return false;
    }

    // base64字符串超过了缓存最大长度，使用字段值来保存
    if (isDefaultFavicon) {
      curValue.favicon = 'defaultRssLogo';
    }

    // 添加到已订阅缓存
    const rssedData = wx.getStorageSync('rssedData') || [];

    rssedData.push(curValue);
    wx.setStorageSync('rssedData', rssedData);

    wx.reLaunch({
      url: `../rssed/rssed`,
    });
  },
}));