// rss源数据，整理自网络
const rssData = [
  // 优质社区
  {
    title: '知乎每日精选',
    link: 'https://www.zhihu.com',
    description: '中文互联网最大的知识平台，帮助人们便捷地分享彼此的知识、经验和见解。',
    favicon: 'https://www.zhihu.com/favicon.ico',
    rssUrl: 'https://www.zhihu.com/rss',
  },
  {
    title: '知乎日报',
    link: 'https://daily.zhihu.com',
    description: '知乎日报是一款拥有千万用户的资讯类客户端，每日提供来自知乎社区的精选问答，还有国内一流媒体的专栏特稿。',
    favicon: 'https://zhihu.com/favicon.ico',
    rssUrl: 'https://awk.tw/rss/daily.zhihu.rss',
  },
  {
    title: '好奇心日报',
    link: 'https://www.qdaily.com',
    description: '这是一个帮助你发现生活何以美好的商业新闻媒体。所有内容均原创或者邀请专业作者撰写。报道涉及智能、设计、城市、时尚和娱乐等领域。全部都建立在商业视角之上。',
    favicon: 'https://www.qdaily.com/favicon.ico',
    rssUrl: 'https://www.qdaily.com/feed.xml',
    remark: '',
  },
  {
    title: '网易新闻·有态度专栏',
    link: 'http://news.163.com',
    description: '汇集互联网热门、有趣内容的图片社区',
    favicon: 'https://163.com/favicon.ico',
    rssUrl: 'http://news.163.com/special/00011K6L/rss_newsattitude.xml',
  },
  {
    title: '界面',
    link: 'https://kindle4rss.com',
    description: '界面是中国最大的商业新闻和社交平台，只服务于独立思考的人群。',
    favicon: 'https://kindle4rss.com/favicon.ico',
    rssUrl: 'http://feedmaker.kindle4rss.com/feeds/wowjiemian.weixin.xml',
    remark: '无https',
  },
  {
    title: '开源中国社区最新新闻',
    link: 'https://www.oschina.net',
    description: '开源中国社区——找到您想要的开源软件，分享和交流',
    favicon: 'https://www.oschina.net/favicon.ico',
    rssUrl: 'https://www.oschina.net/news/rss',
    remark: '图片无法直接访问',
  },
  {
    title: 'InfoQ',
    link: 'http://www.infoq.com',
    description: 'InfoQ是一个实践驱动的社区资讯站点，致力于促进软件开发领域知识与创新的传播。',
    favicon: 'http://cdn2.infoqstatic.com/statics_s2_20180522-0608/favicon.ico',
    rssUrl: 'http://www.infoq.com/cn/feed',
    remark: '图片无法直接访问, 无detail',
  },

  // 学习
  {
    title: 'MOOC中国',
    link: 'https://www.mooc.cn',
    description: '慕课改变你，你改变世界',
    favicon: 'http://www.mooc.cn/wp-content/uploads/favicon.ico',
    rssUrl: 'http://www.mooc.cn/feed',
    remark: '无https',
  },
  {
    title: '左岸读书',
    link: 'http://www.zreading.cn',
    description: '一切成功均源自积累！',
    favicon: 'http://zreading.qiniudn.com/static/img/favicon.ico',
    rssUrl: 'https://www.zreading.cn/feed',
    remark: '无detail',
  },

  // 新闻资讯
  {
    title: '精彩资讯-Mtime时光网',
    link: 'http://mtime.com',
    description: '时光网（Mtime.com）精彩资讯',
    favicon: 'http://mtime.com/favicon.ico',
    rssUrl: 'http://feed.mtime.com/news.rss',
    remark: '',
  },
  {
    title: '财新博客',
    link: 'https://caixin.com',
    description: '财新博客-新世纪的常识传播者-财新网；财经 经济 社会 人文 生活 科技 财新 博客',
    favicon: 'http://caixin.com/favicon.ico',
    rssUrl: 'http://blog.caixin.com/feed',
    remark: '无https',
  },
  {
    title: '新浪国际要闻',
    link: 'http://www.sina.com',
    description: '国际要闻-新浪新闻',
    favicon: 'http://www.sina.com/favicon.ico',
    rssUrl: 'http://rss.sina.com.cn/news/world/focus15.xml',
    remark: '无https，无detail',
  },
  {
    title: '新浪国内要闻',
    link: 'http://www.sina.com',
    description: '国内要闻-新浪新闻',
    favicon: 'http://www.sina.com/favicon.ico',
    rssUrl: 'http://rss.sina.com.cn/news/china/focus15.xml',
    remark: '无https，无detail',
  },

  // 科技
  {
    title: 'PanSci 泛科學',
    link: 'https://pansci.asia',
    description: '全台最大科學知識社群',
    favicon: 'http://pansci.asia/wp-content/themes/pansci-wp-theme/favicon.ico',
    rssUrl: 'https://pansci.asia/feed',
  },
  {
    title: '雷锋网',
    link: 'https://www.leiphone.com',
    description: '雷锋网RSS订阅',
    favicon: 'https://leiphone.com/favicon.ico',
    rssUrl: 'https://www.leiphone.com/feed/',
  },
  {
    title: '36氪',
    link: 'https://36kr.com',
    description: '让一部分人先看到未来',
    favicon: 'https://36kr.com/favicon.ico',
    rssUrl: 'https://36kr.com/feed',
  },
  {
    title: '爱范儿',
    link: 'https://www.ifanr.com',
    description: '报道未来，服务新生活引领者',
    favicon: 'https://www.ifanr.com/favicon.ico',
    rssUrl: 'https://www.ifanr.com/feed',
  },
  {
    title: 'iPcFun',
    link: 'https://feed.ipcfun.com',
    description: '分享最精彩有趣的互联网资讯，打发最无聊的时间',
    favicon: 'https://feed.ipcfun.com/favicon.ico',
    rssUrl: 'https://feed.ipcfun.com/',
  },
  {
    title: '小众软件',
    link: 'https://appinn.com',
    description: '分享免费、小巧、实用、有趣、绿色的软件',
    favicon: 'https://www.appinn.com/favicon.ico',
    rssUrl: 'https://feeds.appinn.com/appinns/',
    remark: '',
  },

  // 创意
  {
    title: '理想生活实验室',
    link: 'https://www.toodaylab.com',
    description: '关注创意设计与生活消费',
    favicon: 'http://static.toodaylab.com/static/favicon.ico',
    rssUrl: 'https://www.toodaylab.com/feed',
    remark: '图片不能加载',
  },
  {
    title: '爱…稀奇',
    link: 'http://www.ixiqi.com',
    description: '分享全球新鲜玩意儿',
    favicon: 'http://www.ixiqi.com/favicon.ico',
    rssUrl: 'http://www.ixiqi.com/feed',
    remark: '不支持https，图片不能直接查看，服务器做了限制',
  },

  // 摄影
  {
    title: 'cinephilia迷影',
    link: 'http://cinephilia.net',
    description: 'cinephilia迷影',
    favicon: 'http://cinephilia.net/favicon.ico',
    rssUrl: 'http://cinephilia.net/feed',
    remark: '不支持https',
  },

  // 时尚
  /* {
    title: 'A Day Magazine',
    link: 'http://www.adaymag.com',
    description: '時尚生活雜誌',
    favicon: 'http://www.adaymag.com/wp-content/uploads/2017/04/adaymag-aday-favicon-v1-60x60.png',
    rssUrl: 'http://www.adaymag.com/feed',
    remark: '不支持https，没有detail，图片不能直接访问',
  }, */

  // 设计
  {
    title: '优设-UISDC',
    link: 'https://www.uisdc.com',
    description: '优秀设计联盟-SDC-优设网-设计师交流学习平台-听讲座，聊设计，找素材，尽在优设网',
    favicon: 'https://www.uisdc.com/favicon.ico',
    rssUrl: 'https://www.uisdc.com/feed',
    remark: '',
  },
  {
    title: '腾讯CDC',
    link: 'http://cdc.tencent.com',
    description: '腾讯CDC',
    favicon: 'http://cdc.tencent.com/favicon.ico',
    rssUrl: 'http://cdc.tencent.com/feed/',
    remark: '不支持https',
  },

  // 英语
  {
    title: 'The Economist 中文版',
    link: 'http://blog.ecocn.org',
    description: 'The Economist 经济学人 经济学家 中文版',
    favicon: 'http://blog.ecocn.org/favicon.ico',
    rssUrl: 'http://blog.ecocn.org/feed',
    remark: '图片不可用',
  },
  {
    title: 'the weak',
    link: 'https://theweek.com',
    description: 'Latest articles',
    favicon: 'https://theweek.com/favicon.ico',
    rssUrl: 'https://theweek.com/rss.xml',
  },
  {
    title: 'Stratechery by Ben Thompson',
    link: 'https://stratechery.com',
    description: 'On the business, strategy, and impact of technology. 作者曾在苹果微软工作',
    favicon: 'https://stratechery.com/favicon.ico',
    rssUrl: 'https://stratechery.com/feed/',
    remark: '',
  },
  {
    title: 'Smashing Magazine',
    link: 'https://www.smashingmagazine.com',
    description: 'Recent content in Articles on Smashing Magazine — For Web Designers And Developers',
    favicon: 'https://www.smashingmagazine.com/images/favicon/favicon.png',
    rssUrl: 'https://www.smashingmagazine.com/feed/',
    remark: '',
  },
  {
    title: 'The long read | The Guardian',
    link: 'https://www.theguardian.com/news/series/the-long-read',
    description: 'In-depth reporting, essays and profiles; 英国卫报的深度报道专栏The long read | News | The Guardian每一篇都非常的长，题材多样，涵盖政治经济文化，特别的是医学史的文章较多，非常猎奇，文章用词适合准备GRE的考生',
    favicon: 'https://assets.guim.co.uk/images/favicons/ac43fe9507600081b58760450f518d07/152x152.png',
    rssUrl: 'https://www.theguardian.com/news/series/the-long-read/rss',
    remark: '无detail',
  },
  {
    title: 'FT中文网 - 双语阅读',
    link: 'http://www.ftchinese.com',
    description: 'FT中文网每日新闻',
    favicon: 'http://www.ftchinese.com/favicon.ico',
    rssUrl: 'http://www.ftchinese.com/rss/diglossia',
    remark: '无https，无detail，详情需登录',
  },
  {
    title: '美国习惯用语',
    link: 'http://www.unsv.com',
    description: '美国习惯用语专门介绍美国人常用的习惯用语和俚语、习惯用语的出典，并以富有生活情趣的实例来说明用法。',
    favicon: 'http://www.unsv.com/images/favorite.ico',
    rssUrl: 'http://www.unsv.com/voanews/words-and-idioms/rss/',
    remark: '无detail，详情需登录',
  },

  // 优质个人
  {
    title: '阮一峰的网络日志',
    link: 'https://www.ruanyifeng.com',
    description: '这里记录过去一周，我看到的值得分享的东西，每周五发布。...',
    favicon: 'https://www.ruanyifeng.com/favicon.ico',
    rssUrl: 'https://www.ruanyifeng.com/blog/atom.xml',
    remark: '解析格式不对，feed.entry',
  },
  {
    title: '徐贲的BLOG',
    link: 'http://blog.sina.com.cn/xubenblo',
    description: '徐贲的个人BLOG',
    favicon: 'http://blog.sina.com/favicon.ico',
    rssUrl: 'http://blog.sina.com.cn/rss/1286402547.xml',
    remark: '',
  },

  // 书评
  {
    title: '读写人',
    link: 'http://www.duxieren.com',
    description: '读写人网站：书评杂志、书评博客、书评网站、读书资源聚合',
    favicon: 'http://www.duxieren.com/favicon.ico',
    rssUrl: 'http://www.duxieren.com/duxieren.xml',
    remark: '',
  },
  {
    title: 'cnBeta.COM 精彩优秀评论',
    link: 'https://www.cnbeta.com',
    description: '从cnBeta每天数千评论中精选出来的优秀评论',
    favicon: 'https://www.cnbeta.com/favicon.ico',
    rssUrl: 'https://www.cnbeta.com/commentrss.php',
    remark: '',
  },
  {
    title: '豆瓣最受欢迎的书评',
    link: 'https://www.douban.com',
    description: '豆瓣成员投票选出的最佳书评',
    favicon: 'https://www.douban.com/favicon.ico',
    rssUrl: 'https://www.douban.com/feed/review/book',
    remark: '',
  },

  // 地理
  {
    title: '地理E周刊',
    link: 'http://e.dili360.com',
    description: '《地理e周刊》是中国国家地理网推出的网络双周刊，其内容汇集了中国国家地理网所有频道的精华内容，包含如下栏目： 地理观察、地理讲堂、图片故事、行游四方、风土人情、探索传奇、历史杂谈、军事地理、周刊之星、品牌装备、CNG速递 、读编往来等栏目。读者可直接登录中国国家地理网浏览，也可以进行邮件订阅和RSS订阅。',
    favicon: 'http://e.dili360.com/favicon.ico',
    rssUrl: 'http://e.dili360.com/rss/rss.xml',
    remark: '内容较多加载时间较长，不支持https',
  },

  // 游戏
  {
    title: 'IGN中国版',
    link: 'http://www.ign.%E4%B8%AD%E5%9B%BD',
    description: 'IGN中国版',
    favicon: 'http://www.ign.xn--fiqs8s/s/ign/favicon.ico',
    rssUrl: 'http://www.ign.xn--fiqs8s/feed.xml',
    remark: '无https，所有图片为网站根路径，无法加载',
  },
  
  /* {
    title: '意林',
    link: 'http://blog.sina.com.cn',
    description: '《意林》杂志',
    favicon: 'http://blog.sina.com.cn/favicon.ico',
    rssUrl: 'http://blog.sina.com.cn/rss/yilinzazhi.xml',
    remark: '详情页渲染错误',
  }, */
  /* {
    title: 'Envato',
    link: 'https://envato.com',
    description: 'Design & creative inspiration',
    favicon: 'https://assets.wordpress.envato-static.com/uploads/2016/08/cropped-favicon-180x180.png',
    rssUrl: 'https://envato.com/feed/',
    remark: 'favicon图片加载有问题，所有图片有问题',
  }, */
  /* {
    title: '互联网的那点事',
    link: 'https://alibuybuy.com',
    description: '互联网的那点事 - 聚焦互联网前沿资讯，网络精华内容，交流产品心得！',
    favicon: 'http://www.alibuybuy.com/wp-content/themes/TechResponsive/favicon.ico',
    rssUrl: 'http://www.alibuybuy.com/feed',
    remark: '无https， 3.21停更',
  }, */
  /* {
    title: 'Daring Fireball',
    link: 'https://daringfireball.net',
    description: 'By John Gruber，markdown语言发明者',
    favicon: 'https://daringfireball.net/favicon.ico',
    rssUrl: 'https://daringfireball.net/feeds/main',
    remark: '格式不常规',
  }, */
  /* {
    title: 'Fenng 小道消息',
    link: 'http://dbanotes.net',
    description: '大辉之前是Oracle大牛，曾在支付宝工作，目前是丁香园CTO',
    favicon: 'http://dbanotes.net/favicon.ico',
    rssUrl: 'http://stratechery.com/feed/',
    remark: '格式不一样',
  }, */
  /* {
    title: '环球科学（科学美国人）',
    link: 'http://blog.sina.com.cn',
    description: '环球科学（科学美国人）',
    favicon: 'http://blog.sina.com.cn/favicon.ico',
    rssUrl: 'http://blog.sina.com.cn/rss/sciam.xml',
    remark: '内容展示问题，无https',
  }, */
  /* {
    title: '丁香园论坛最新讨论',
    link: 'http://www.dxy.cn',
    description: '丁香园论坛 - 专业医生社区，医学、药学、生命科学、科研学术交流',
    favicon: 'http://www.dxy.cn/favicon.ico',
    rssUrl: 'http://www.dxy.cn/bbs/rss/2.0/all.xml',
    remark: '无detail',
  }, */
  /* {
    title: '战隼的学习探索',
    link: 'http://www.read.org.cn',
    description: '探索怎样更快的提升“个人学习能力”!!!',
    favicon: 'http://www.read.org.cn/favicon.ico',
    rssUrl: 'http://www.read.org.cn/feed',
  }, */
  /* {
    title: '微软亚洲研究院',
    link: 'https://www.microsoft.com',
    description: '微软亚洲研究院',
    favicon: 'https://www.microsoft.com/favicon.ico',
    rssUrl: 'http://blog.sina.com.cn/rss/1286528122.xml',
  }, */
  /* {
    title: '极客公园',
    link: 'https://www.geekpark.net',
    description: '极客公园RSS订阅',
    favicon: 'http://www.geekpark.net/favicon.ico',
    rssUrl: 'http://www.geekpark.net/rss',
    remark: '不支持https',
  }, */
  /* {
    title: 'Engadget 中文版',
    link: 'https://cn.engadget.com',
    description: 'Engadget 中文版 RSS Feed',
    favicon: 'https://cn.engadget.com/favicon.ico',
    rssUrl: 'https://cn.engadget.com/rss.xml',
  }, */
  /* {
    title: '毛球',
    link: 'https://maoqiuapp.com',
    description: '汇集互联网热门、有趣内容的图片社区',
    favicon: 'https://maoqiuapp.com/favicon.ico',
    rssUrl: 'https://api.maoqiuapp.com/rss.xml',
  }, */
  /* {
    title: '异次元软件世界',
    link: 'https://iplaysoft.com',
    description: '软件改变生活',
    favicon: 'https://iplaysoft.com/favicon.ico',
    rssUrl: 'https://feed.iplaysoft.com/',
    hasDetail: false,
  }, */
  /* {
    title: '锋客网',
    link: 'http://www.phonekr.com',
    description: 'techXtreme 科技锋芒',
    favicon: 'http://www.phonekr.com/favicon.ico',
    rssUrl: 'http://www.phonekr.com/feed',
    remark: '不支持https，已停更到2016--11-01',
  }, */
  /* {
    title: 'Matrix67: The Aha Moments',
    link: 'http://www.matrix67.com',
    description: '给数学爱好者的',
    favicon: 'http://www.matrix67.com/favicon.ico',
    rssUrl: 'http://www.matrix67.com/blog/feed',
    remark: '停更到2016.10.18'
  }, */
];

module.exports = {
  rssData,
}