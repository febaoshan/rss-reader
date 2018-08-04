// pages/index/index.js

// 引入通用方法
const util = require('../../utils/util.js');

const mockRes = {
  "errno": 0,
  "errmsg": "",
  "data": {
    "rss": {
      "$": {
        "version": "2.0",
        "xmlns:atom": "http://www.w3.org/2005/Atom"
      },
      "channel": {
        "title": "知乎每日精选",
        "link": "http://www.zhihu.com",
        "description": "中文互联网最大的知识平台，帮助人们便捷地分享彼此的知识、经验和见解。",
        "atom:link": {
          "$": {
            "href": "http://www.zhihu.com/rss",
            "rel": "self"
          }
        },
        "language": "zh-cn",
        "copyright": "© 2018 知乎(http://www.zhihu.com)",
        "lastBuildDate": "Sat, 04 Aug 2018 22:00:31 +0800",
        "ttl": "180",
        "item": [
          {
            "title": "如何评价中国创建全球首例人造单染色体真核细胞？有何科学价值？",
            "link": "http://www.zhihu.com/question/288046759/answer/459098596?utm_campaign=rss&utm_medium=rss&utm_source=rss&utm_content=title",
            "description": "祝贺覃老师以及相关团队，为中国能有这样原创性的成果感到激动和骄傲。<p>美国时间8月1日的这天关于酵母基因组发表了多篇重磅研究工作。</p><p>总结一下美国时间8月1日（北京时间8月2日凌晨）发生的几件与酵母染色体相关的大事件：</p><p>1. 中国植生所覃重军课题组及相关合作课题组创造了一个单染色体酵母丨Nature</p><p>2. 纽约大学Jef Boeke团队创造了双染色体酵母丨Nature</p><p>3. 酵母一号染色体从头合成完成丨Biorxiv</p><p>为什么大家喜欢在8月1号这天发表生物领域的重磅研究工作呢？因为这天的英文缩写表示为：AUG 1st。其中AUG正是基因表达的第一个起始密码子，这种巧妙的契合也让大家喜欢在这天发表重要的工作。</p><p>好了，接下来让我们进入正题，我将对中国植生所覃重军课题组及相关合作课题组发表的文章《Creating a functional single chromosome yeast》进行简要的总结和解读。</p><hr><p>自然界中真核生物的染色体数目各异，绝大多真核生物都包含多条染色体，比如人类有46条染色体，狗有78条染色体，而有的蝴蝶的染色体数目多达200条以上！当然也存在一些特殊的情况，比如雄蚁<i>Myrmecia pilosula</i>则仅含有一条染色体。就今天我们谈论的主角酵母来说，不同种类的酵母的染色体数目也是多样的，比如同属于酵母的酿酒酵母单倍体拥有16条染色体，而另一种粟酒裂殖酵母却只有3条染色体。</p><p>所以我们就会对这种现象存在疑问，为什么不同的真核生物会存在不同的染色体数目呢？染色体的数目的多少是否对真核生物存在明确的生物学意义？从开头的介绍中我们已经知道，不同的生物拥有不同的染色体数目，而且并不是染色体数目越多就代表着进化上更加高级，因为你很难说蝴蝶或者狗狗在进化上相比人类更加高级。</p><p>我们知道原核生物大多只拥有一条环状的染色体，而前面也提到雄蚁<i>Myrmecia pilosula</i>则仅含有一条染色体就可以维持生命的存在。<b>所以科学家就在思考那么有没有可能通过一条染色体，来承载真核生命的所有遗传信息维持生命的存在呢？</b></p><p>美国时间8月1日（北京时间8月2日凌晨），来自中科院上海生命科学研究院植物生理生态研究所的覃重军课题组、赵国屏院士课题组以及中科院生化细胞所周金秋课题组组成的合作团队在《自然》杂志发表的文章《Creating a functional single chromosome yeast》回答了这个问题：<b>答案是肯定的。</b></p><p>在这篇文章中，科学家首次通过实验手段，实现对一个物种的染色体数目进行系统和大规模的改造，创造了仅含有单条染色体的真核酵母细胞。</p><p>对于文章具体细节的介绍和解读已经很多，具体内容可以查看一下链接。</p><a data-draft-node=\"block\" data-draft-type=\"link-card\" href=\"//link.zhihu.com/?target=http://mp.weixin.qq.com/s?__biz=MzIyNDA2NTI4Mg==&mid=2655425450&idx=2&sn=af925aea6bcd8a43399e3e7a02178495&chksm=f3a691c7c4d118d185ca5314d4a8eb4503d56f0312fc27af8144b557b9880978e0666190c300&mpshare=1&scene=1&srcid=0802KjM6Vt2TnMaFFp3NiOeo#rd\" data-image=\"https://pic3.zhimg.com/v2-2d9ceed78978badf52f685b50ced44c6_ipico.jpg\" data-image-width=\"358\" data-image-height=\"358\" class=\" wrap external\" target=\"_blank\" rel=\"nofollow noreferrer\">16条染色体拼成1条，功能却没有差别 | 前沿</a><a data-draft-node=\"block\" data-draft-type=\"link-card\" href=\"//link.zhihu.com/?target=http://mp.weixin.qq.com/s?__biz=MzA3MzQyNjY1MQ==&mid=2652461363&idx=1&sn=028ad3bbfdc3b1ded33acfab7061c879&chksm=84e2ca87b3954391b6dddaea8985c0e50becb93dbdb8c0607844ad729bf7103773f16b357ffa&mpshare=1&scene=1&srcid=0802XqS3kZBXguA6BuGPZFak#rd\" data-image=\"https://pic3.zhimg.com/v2-2d9ceed78978badf52f685b50ced44c6_ipico.jpg\" data-image-width=\"358\" data-image-height=\"358\" class=\" wrap external\" target=\"_blank\" rel=\"nofollow noreferrer\">Nature突破丨中国学者创造单条融合染色体酵母--元英进、戴俊彪等解读</a><p>在这里我想对文章的具体内容进行一个简要的总结。</p><h2>A. 为什么要这么做？这么做基于的知识背景是什么？</h2><ul><li>几乎所有的真核生物都是多染色体，但是存在少数真核生物如雄蚁<i>Myrmecia pilosula</i>则仅含有一条染色体。</li><li>真核细胞中染色体的数量并没有与细胞本身有着明确的关联。</li><li>同时真核拥有多染色体似乎并没有赋予其进化上的意义，因为不同真核生物间的染色体数目差异很大。这和生物基因的数量关系比较类似，并不是基因数量越多就代表进化上更加高级。 </li></ul><h2>B. 构建单染色体酵母的基本原理</h2><p>1.这个过程需要15轮染色体end-to-end的融合连接过程，在这个过程中一共删除了15个中心粒以及30个端粒序列。 </p><p><img src=\"https://pic2.zhimg.com/50/v2-dc8139f661343370d9ff764de447103f_b.jpg?rss\" data-rawwidth=\"1230\" data-rawheight=\"1125\" data-caption=\"单染色体酵母的构建图谱，修改自《Creating a functional single chromosome yeast》图1a\" data-size=\"normal\" data-watermark=\"watermark\" data-original-src=\"v2-dc8139f661343370d9ff764de447103f\" data-watermark-src=\"v2-2748bea491fd1a4ca6333e1784a16db3\" data-private-watermark-src=\"v2-3f710d14a658358049106e56c2a939f6\" data-tags=\"emoji\" style=\"max-width: 400px;\"></p><p>2.在融合的过程，遵循着以下步骤以及原理：</p><ul><li>为了形成融合稳定的染色体，同时避免双着丝的染色体，必须同时一个着丝粒和两个端粒：这个过程主要是利用了两个工具—第一个是高效的CRISPR-Cas9切割系统，第二个是酵母中的同源重组系统。 </li><li>唯一的一个中心粒最终故意的大致放在了单染色体的中间部位，目的是保持两个臂的平衡。 </li><li>染色体融合的顺序是随机选择的。研究组之前做过实验，证明过不同的组合（8组）均可以成功的实现融合，得到的酵母株系和野生的株系生产状态基本一致，这也说明染色体融合的顺序是可以随机选择的。 </li><li>因为要对着丝粒和端粒进行删除，所以需要考虑删除的序列不会影响周围相连的基因。 </li><li>此外，和端粒相关的长重复序列（长约2KB，在不同的染色体上都有）最终也被删除了，原因是为了避免潜在的同源重组。 </li></ul><p><img src=\"https://pic1.zhimg.com/50/v2-cfe08a8d1e1c4012e67e0ae6cdb5890e_b.jpg?rss\" data-rawwidth=\"1666\" data-rawheight=\"938\" data-caption=\"单染色体酵母的构建原理及步骤，修改自《Yeast chromosome numbers minimized using genome editing》图1\" data-size=\"normal\" data-watermark=\"watermark\" data-original-src=\"v2-cfe08a8d1e1c4012e67e0ae6cdb5890e\" data-watermark-src=\"v2-17d3bb0eba6a0b12b24910c176288c99\" data-private-watermark-src=\"v2-b434cb5960722526849d72d0708f2671\" style=\"max-width: 400px;\"></p><h2>C. 单染色体酵母长什么样？与野生型有什么区别？</h2><p><img src=\"https://pic1.zhimg.com/50/v2-8f79022f14aa47e829b9434ad7278cdf_b.jpg?rss\" data-rawwidth=\"788\" data-rawheight=\"377\" data-caption=\"单染色体酵母与野生型酵母的显微镜下的形态以及染色体三维结构对比图，修改自《Yeast chromosome numbers minimized using genome editing》图3b、5a\" data-size=\"normal\" data-watermark=\"watermark\" data-original-src=\"v2-8f79022f14aa47e829b9434ad7278cdf\" data-watermark-src=\"v2-0a8b598db87ecfc2b6b26a1f8d83c968\" data-private-watermark-src=\"v2-5df8ba6f48a8f98f10c43aa686598302\" style=\"max-width: 400px;\"></p><p><b>简单与野生型相比，单染色体酵母的三维结构发生了巨大的改变，主要由于三点原因：</b></p><ul><li>着丝粒相关的染色体间的相互关联<b>全部</b>丢失</li><li>端粒相关的染色体间的相互关联<b>大部分</b>丢失 </li><li>染色体内部的相互关联丢失了67.4% </li></ul><p>同时单染色体酵母能够支持细胞生命的存在，但是在不同环境、竞争条件下配子产生以及存活率上均受到了负面的影响。 </p><h2>D. 关于文章的讨论与思考： </h2><ul><li>合成生物学的快速发展促使了对酵母的设计和改造，比如著名的酵母基因组合成计划Sc2.0。这些改造和设计后的酵母基本与野生的酵母一致，这也从一定程度上说明了<b>酵母这种生物可以容忍大规模的基因组工程化改造</b>。 </li><li><b>这是人类第一次在实验室中创造了单染色体真核生物。 </b></li><li>之前诸多工作表明染色体在细胞核的位置以及染色体间的相互作用可以影响基因表达。但是单酵母染色体使得原有的染色体三维构型发生了巨大的变化，同时单染色体酵母的转录组却几乎没有发生变化。<b>这些观点都表明染色体间的相互作用对于酵母全局的基因转录的影响几乎是可以忽略的（这一点直接挑战了对染色体三维结构的研究领域）。 </b></li><li>同时结果比较让人惊讶的是：<b>单独一个着丝粒，仅仅125bp长就能够支持一个11.8Mb巨型染色体的分离过程</b>，这种巨型的染色体比野生酵母中最长的染色体的长度成了8倍之多。 </li><li><b>当然染色体的增长也一定带来了诸多的负面影响</b>。比如通过分析发现，涉及DNA复制压力的相关基因上调，这表明染色体的增长增加了DNA复制过程的压力。同时结果中还发现单染色体酵母有倾向于形成多倍体的趋势，这表明染色体在分离过程中的确存在缺陷。这可能对配子产生以及生存能力造成负面影响。 </li><li><b>同时这种负面结果的产生，比如分离缺陷或者DNA复制压力增加的现象，可以在一定程度上解释为什么真核基因组需要组织成多染色体形式。 </b></li></ul><p>（后续添加，包括对评论区的一些回复<b>）</b>我认为最直接的意义在于证明了真核系统多染色体的存在意义与细胞的核心功能关联并不是很大。这与生物的进化程度与基因组大小没有直接关联是相通的，即染色体的数量多并不代表着生物处于进化树的更高层次。同时染色体的数目的减少（基因整合在一起），仍然可以维持复杂的生物系统运行。 </p><p>同时端粒作为多次获得诺贝尔奖级别的成果，在真核酵母中的单染色体改造中发现其作用并没有体现出来，这一点比较让人意外。 </p><p>同时文章中直接提到色体三维构型发生了巨大的变化，同时单染色体酵母的转录组却几乎没有发生变化。这些观点都表明染色体间的相互作用对于酵母全局的基因转录的影响几乎是可以忽略的。这对于研究染色体三维甚至四维结构的领域是一个不小的冲击。 </p><p>同时这此工作是在酵母中完成的，酵母号称是“真核生物的大肠杆菌”。我曾在一篇文章中提到这点，链接：<a href=\"https://zhuanlan.zhihu.com/p/35818239\" class=\"internal\">真核细胞合成生物学面临的挑战</a>。酵母的整个基因组相对来说更加容易改造同时复杂度相对也小于其他的高等生物，所以单染色体的设计策略能否应用于其他的高等生物，比如植物，甚至哺乳动物细胞，还是未知的，需要进一步探索。</p><p><b>同时染色体的单一化在酵母中虽然支持生命系统的运行，在宏观的转录组层面也没有很大的改变，但是很显然这样大规模的改变一定会对酵母产生影响的，这种影响可能需要更多的实验来探索，比如单染色体酵母在进化上的表现如何？</b></p><h2>E<b>. 最后再多说一点</b></h2><p>同期来说，还有另一篇工作背靠背发表在《自然》杂志，名为《Karyotype engineering by chromosome fusion leads to reproductive isolation in yeast》，来自著名学者、纽约大学的Jef Boeke教授。这篇工作最终获得了只含有两条染色体的酵母株系。但是个人来说，我认为这一次中国科学家的创新性、前瞻性以及工作细致程度相比于国外的团队来说均处于领先水平。当然两项科研工作均值的尊重和肯定，均是推动人类理解生命本质的发展成果。 </p><p>今天中午看Twitter，看到Jef Boeke教授也是连发几条推特，对覃老师以及相关人员工作大加赞扬。</p><p><img src=\"https://pic2.zhimg.com/50/v2-2a17028b16b9290a5b9fb7104fc89b38_b.jpg?rss\" data-rawwidth=\"692\" data-rawheight=\"884\" data-caption=\"Jef Boeke教授的twitter\" data-size=\"small\" data-watermark=\"watermark\" data-original-src=\"v2-2a17028b16b9290a5b9fb7104fc89b38\" data-watermark-src=\"v2-713c065922201aabd5122bfcc7d5ced4\" data-private-watermark-src=\"v2-5b361c2d9ad2826553cf53dd6fe79bc6\" style=\"max-width: 400px;\"></p><p>同时看到相关覃老师的报道了解到了覃重军老师很不容易的坚持，值得我等青年研究人员尊敬和学习。 </p><blockquote>“在这次竞争中，我们可以说完胜了美国科学家！”覃重军掩抑不住内心的兴奋。美国科学院院士杰夫·博伊克是研究酿酒酵母的遗传学大家，国际酵母基因组计划的总负责人。2017年，美国《科学》杂志发表的七篇有关酿酒酵母全基因组合成论文的工作，就是由他主导。当时，中国科学家参与其中，并发表了四篇论文。<br>“如果没有七八年前从传统的链霉菌分子操作研究向合成生物学的痛苦转型，就无法获得今天的成功。”覃重军在接受记者采访时说，过去五年中，他写下了超过2000页的科学思考和实验设计，每一页内容都见证了过程的曲折。<br>2011年，覃重军从构建模块化简约化大肠杆菌和天蓝色链霉菌底盘细胞入手，建立起了一支精干的研究团队，并与同事尝试创新一系列高通量基因组操作体系。就在最困难的时候，他获得了来自中科院、植生所的经费支持，“我是研究所里有名的经费‘负翁’，但终于成功了！”</blockquote><p><b>祝贺覃老师以及相关团队，为中国能有这样原创性的成果感到骄傲！</b></p><p>参考文献：</p><p>1. Shao, Y. <i>et al. Nature</i> <a href=\"//link.zhihu.com/?target=https://doi.org/10.1038/s41586-018-0382-x\" class=\" external\" target=\"_blank\" rel=\"nofollow noreferrer\"><span class=\"invisible\">https://</span><span class=\"visible\">doi.org/10.1038/s41586-</span><span class=\"invisible\">018-0382-x</span><span class=\"ellipsis\"></span></a> (2018).</p><p>2. Luo, J., Sun, X., Cormack, B. P. &amp; Boeke, J. D.<i>Nature </i><a href=\"//link.zhihu.com/?target=https://doi.org/10.1038/s41586-018-0374-x\" class=\" external\" target=\"_blank\" rel=\"nofollow noreferrer\"><span class=\"invisible\">https://</span><span class=\"visible\">doi.org/10.1038/s41586-</span><span class=\"invisible\">018-0374-x</span><span class=\"ellipsis\"></span></a>(2018).</p><p>3. <a href=\"//link.zhihu.com/?target=https://www.nature.com/articles/d41586-018-05309-4\" class=\" wrap external\" target=\"_blank\" rel=\"nofollow noreferrer\">Yeast chromosome numbers minimized using genome editing</a></p>\n<br><br>\n来源：知乎 www.zhihu.com<br>\n    \n作者：<a href=\"http://www.zhihu.com/people/meng-xiao-meng-29-98?utm_campaign=rss&utm_medium=rss&utm_source=rss&utm_content=author\">孟凡康</a><br>\n            \n<br>\n【知乎日报】千万用户的选择，做朋友圈里的新鲜事分享大牛。\n        <a href=\"http://daily.zhihu.com?utm_source=rssyanwenzi&utm_campaign=tuijian&utm_medium=rssnormal\" target=\"_blank\">点击下载</a><br>\n<br>\n此问题还有 <a href=\"http://www.zhihu.com/question/288046759/answer/459098596?utm_campaign=rss&utm_medium=rss&utm_source=rss&utm_content=title\" target=\"_blank\">44 个回答，查看全部。</a><br>\n                ",
            "dc:creator": {
              "_": "孟凡康",
              "$": {
                "xmlns:dc": "http://purl.org/dc/elements/1.1/"
              }
            },
            "pubDate": "Sat, 04 Aug 2018 22:00:31 +0800",
            "guid": "http://www.zhihu.com/question/288046759/answer/459098596"
          }, {
            "title": "自动驾驶中语义追踪的\"正确\"打开方式",
            "link": "http://zhuanlan.zhihu.com/p/40795853?utm_campaign=rss&utm_medium=rss&utm_source=rss&utm_content=title",
            "description": "<p>今天给大家介绍的是一篇比较系统性”集大成”的工作[1]，可能不像之前介绍的那些工作，都是从某点insight出发导出了一些很简单的性质或者结论，这篇工作集成了多个成熟的技术，但是又对问题进行了深入的定制化。同样作为自动驾驶的从业者，我是很欣赏这样的工作，并理解这背后的工作量和艰辛的，所以今天给大家换换口味。</p><p>这篇文章想要处理的问题是基于视觉的自动驾驶中的一个核心问题：<b>如何通过双目相机准确追踪道路上车辆准确的位姿和状态？</b>这篇文章给出了一个系统性的解决方案，如下图所示，整个系统分为几个部分：</p><figure><img src=\"https://pic3.zhimg.com/v2-ef04c4930895d5c7dc6e13774fcc3656_b.jpg\" data-caption=\"\" data-size=\"normal\" data-rawwidth=\"890\" data-rawheight=\"477\" class=\"origin_image zh-lightbox-thumb\" width=\"890\" data-original=\"https://pic3.zhimg.com/v2-ef04c4930895d5c7dc6e13774fcc3656_r.jpg\"></figure><p>第一部分是通过标准的Deep Learning方法进行2D Detection和视角分类，并通过相机模型，预测出初始的3D框；第二部分通过提取ORB特征和鲁棒匹配，完成双目深度估计与时序追踪；第三部分，也是整个paper的核心，通过SLAM中常用的Bundle Adjustment技术，联合优化自身位姿、每个车辆的位姿和状态，得到最终结果。下面详细介绍每一部分的工作。由于文章中符号很多，而且有一些描述不很清晰的地方，下面部分将主要用语言来描述每一部分在做的事情和想法。虽然可能不十分精确，但是这样更有益于大家理解主旨，如果有兴趣的同学可以直接查阅原文来看精确的数学描述。</p><figure><img src=\"https://pic4.zhimg.com/v2-021de2c3e1b895d9784d29d02375510b_b.jpg\" data-caption=\"\" data-size=\"normal\" data-rawwidth=\"773\" data-rawheight=\"238\" class=\"origin_image zh-lightbox-thumb\" width=\"773\" data-original=\"https://pic4.zhimg.com/v2-021de2c3e1b895d9784d29d02375510b_r.jpg\"></figure><p>在第一部分中，主要follow了CVPR17的一个工作（原文citation[24]），基本思想是通过预测2D框以及不同的观测视角，同时假设2D框能够紧密包围3D框，那么给定视角，相机内参和车辆dimension的情况下，最紧的3D框和水平旋转角度可以直接通过线性方程组解出。注意这里做了很强的假设，也就是2D框完全准确，已经每种车辆的dimension是完全一致的，所以这个计算出的3D框只是作为后续操作的初始值，在第三部分中，还会重新优化这4个自由度的变量。</p><p>在第二部分中，主要任务是建立起可靠的local feature匹配和帧间association。帧间association和双目深度估计都使用了比较成熟的方案或简单的baseline。由于在第一步已经有了初步的距离估计，在双目匹配的过程中可以缩小匹配范围以提升结果。local feature这里使用的是经典的ORB feature。对于每个特征点，分别在左右眼和时序上进行匹配，后用RANSAC做outlier去除。</p><p><br></p><p>第三部分，也是整个文章中最重要的部分，把沈老师很熟悉的Bundle Adjustment (BA) 引入到了整个的位姿状态精调中来。这部分优化分为两个步骤，第一部分(Camera BA)是利用前面得到的背景中的匹配的点，联合优化自身相机位姿，以及在上一步匹配过的背景特征点坐标来优化reprojection error，这是在SLAM和SfM中的经典BA。通过这一步，可以得到相对准确的自身位姿为下一步使用。第二部分(Object BA)是针对每一辆车，充分挖掘2D和3D之间关系，以及各种约束。这部分BA分为4个loss term，<b>联合优化了每个车辆自身的位姿，大小，速度和方向盘转角以及在上一步得到的ORB特征点的对应3D位置</b>，下面分别介绍这4部分：</p><ol><li><b>特征点一致性loss</b>：原文中的公式(16) (17)，符号非常复杂，要做的事情其实就是要求特征点对应的3D位置经过各种投射变换之后能够在它在2D图像上的坐标对应。文中分别对于左眼和右眼图像计算了loss，下面以左眼为例分布解释下在做什么：</li><ol><li>首先，作者假设车辆是一个刚体，也就意味着在帧间匹配得到的特征点，在车辆坐标系下的相对位置是不会随时间变化，所以公式(16)中的f是没有上标t的。</li><li>第一步变换，将特征点的3D位置f由车体坐标系转换到世界坐标系。</li><li>将世界坐标系内的f转换到相机坐标系。</li><li>将相机坐标系中的f通过相机内参矩阵投影回2D图像。</li></ol></ol><p> 这样就可以计算这两者之间的一个差值，作为loss function。对于右眼，计算方法类似，只不过需要使用双目标定的外参，将左眼相机坐标系转换到右眼相机坐标系中，其余一致。</p><p>2. <b>3D框与2D框一致loss</b>：这一个term和第一部分的原理是类似的，区别在于，在这部分中，车辆的dimension和车辆的位姿被同时作为优化变量联合优化，而不是像第一部分中，车辆的dimension固定。所以通过加入这个term解决了在第一步中由于dimension不准确导致的错误估计。</p><p>3. <b>车辆动力学模型loss</b>：除了车辆位姿，我们在自动驾驶中还会关系车辆的状态，包括速度和方向盘转角，这对于后续的车辆意图估计等任务有着极大的帮助。实际的车辆当然不可以抽象成一个无规律的质点的运动，所以在这个loss中，作者使用了一个车辆动力学模型来描述当前时刻与前一时刻的位姿和状态之间的关系。这个动力学模型来源于原论文引用[27]。除了位姿之外，这个loss里还引入了车辆速度、方向盘转角以及车辆轮距（可以从车辆大小的出）作为优化变量。</p><p>4. <b>点云对齐loss</b>：这一个loss文中描述得不是很清楚。首先，这里的点云并不是指LiDAR点云，而是指从双目中恢复出来的点云。以我个人的理解，这个loss的意义在于约束每辆车的特征点的3D位置可以落在对应车辆的3D框内。具体的细节文中只提到了minimize the distance of the feature points and their corresponding observed surface. 个人不是很理解具体的这个做法，为什么需要minimize这样的距离，而不是直接根据是否在3D框内计算loss。另外，这样的做法是否假设了所有特征点都在3D框的面上，这也不是很合理。总之，这样的一个loss是有必要的，但是具体实现方式可能会有更好的。</p><figure><img src=\"https://pic3.zhimg.com/v2-d8d21396a259e8ddf9e15e1e5294715a_b.jpg\" data-caption=\"\" data-size=\"normal\" data-rawwidth=\"657\" data-rawheight=\"383\" class=\"origin_image zh-lightbox-thumb\" width=\"657\" data-original=\"https://pic3.zhimg.com/v2-d8d21396a259e8ddf9e15e1e5294715a_r.jpg\"></figure><p>在实验中，作者使用了KITTI数据集，分别对ego-motion和object localization&amp;pose估计进行了比较。在ego-motion中，作者对比了经典的ORB-SLAM，由于这个方法能够很好地去除由于移动物体带来的特征点匹配失败，在一些车辆较多的复杂场景中取得了较大的提升。在object motion&amp;pose中，由于前述引入的诸多先验和约束，对比baseline也有了巨大提升。相信这个方法也可以从更强大的Deep learning方法中得到更准确的2D检测和视角估计而受益。强烈推荐大家观看一下下面在KITTI上的结果视频：<a href=\"http://link.zhihu.com/?target=https://www.youtube.com/watch?v=5_tXtanePdQ\" class=\" external\" target=\"_blank\" rel=\"nofollow noreferrer\"><span class=\"invisible\">https://www.</span><span class=\"visible\">youtube.com/watch?</span><span class=\"invisible\">v=5_tXtanePdQ</span><span class=\"ellipsis\"></span></a></p><p><br></p><p>总结以上，这篇文章应该是我见到的一篇将这么多先验紧耦合在一起的系统性工作。这可能和沈老师之前的SLAM背景很相关。虽说每个模块都有改进的空间，但是这篇文章提供了一套切实可行的框架来解决视觉自动驾驶中的这个难题。相比于诸多暴力使用CNN来预测车辆位姿、状态甚至意图的paper，我个人更欣赏这样能够把high level semantic和geometry进行深度融合的工作，在今年CVPR上也见到这个方向很好的尝试[2]。希望介绍的这个工作能够启发大家更深度地思考问题的本质和结构，而不是将所有问题都扔给CNN做一个黑盒来预测，做出更多有insight的工作。</p><p><br></p><p>[1] Li, P., Qin, T., &amp; Shen, S. (2018). Stereo Vision-based Semantic 3D Object and Ego-motion Tracking for Autonomous Driving. <i>ECCV2018</i></p><p>[2] Yin, Z., &amp; Shi, J. (2018, March). GeoNet: Unsupervised Learning of Dense Depth, Optical Flow and Camera Pose. In <i>CVPR2018</i></p>\n<br><br>\n来源：知乎 www.zhihu.com<br>\n    \n作者：<a href=\"http://www.zhihu.com/people/naiyan-wang?utm_campaign=rss&utm_medium=rss&utm_source=rss&utm_content=author\">Naiyan Wang</a><br>\n            \n<br>\n【知乎日报】千万用户的选择，做朋友圈里的新鲜事分享大牛。\n        <a href=\"http://daily.zhihu.com?utm_source=rssyanwenzi&utm_campaign=tuijian&utm_medium=rssnormal\" target=\"_blank\">点击下载</a><br>",
            "dc:creator": {
              "_": "Naiyan Wang",
              "$": {
                "xmlns:dc": "http://purl.org/dc/elements/1.1/"
              }
            },
            "pubDate": "Sat, 04 Aug 2018 21:16:14 +0800",
            "guid": "http://zhuanlan.zhihu.com/p/40795853"
          },
        ]
      }
    }
  }
};

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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 获取最新的rss数据
  getRss: function (rssUrl) {
    const that = this;

    wx.showLoading({
      title: '拼命加载中...',
    });

    // 由于个人服务器资源有限，这里仅能提供模拟数据和方法
    /* 
    wx.request({
      url: `https://xxx?rssUrl=${rssUrl}`,
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // const item = res.data.data.rss.channel[0].item[0].description[0];
        // const item = res.data.data.rss.channel.item[0].description;
        const { rss, feed } = res.data.data;
        let rssData = {};

        if (rss) {
          rssData = rss.channel;
        }

        if (feed) {
          rssData = feed;
        }
        
        // const rssData = res.data.data.rss.channel;
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
    */

    const { rss, feed } = mockRes.data;
    let rssData = {};

    if (rss) {
      rssData = rss.channel;
    }

    if (feed) {
      rssData = feed;
    }

    // const rssData = res.data.data.rss.channel;
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