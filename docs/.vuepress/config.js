module.exports = {
  base:"/Home/",
  title: '海鹰斯坦的个人主页',
  description: '111Just playing around',
  themeConfig: {
    logo: '/assets/logo.jpg',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '前端',
        link: '/front-end/'
      },
      { text: '计算机基础', link: '/computer-foundation/' },
      { text: '项目', link: '/program/' },
      { text: '面试', link: '/interview/' },
      { text: 'Leetcode', link: '/leetcode/' },
      { text: '常用网站', link: '/other-site/' },
      { text: '常用工具', link: '/tools/' },
    ],
    sidebarDepth: 2,
    sidebar:{
      '/front-end/':[
        ['','目录'],
        {
          "name": "html",
          "title": "html",
          "collabsable": false,
          "children": [
            [
              "html/",
              "目录"
            ],
            [
              "html/html1",
              "这是第一篇关于html的"
            ],
            [
              "html/html2",
              "这是第二篇关于html的"
            ],
          ]
        },
        {
          "name": "css",
          "title": "css",
          "collabsable": false,
          "children": [
            [
              "css/",
              "目录"
            ],
            [
              "css/css1",
              "这是第一篇关于css的"
            ],
            [
              "css/css2",
              "这是第二篇关于css的"
            ],
          ]
        },
        {
          "name": "js",
          "title": "js",
          "collabsable": false,
          "children": [
            [
              "js/",
              "目录"
            ],
            [
              "js/js001",
              "【001】getter&&setter"
            ],
            [
              "js/js002",
              "【002】Object.defineProperty"
            ],
          ]
        },
        {
          "name": "ts",
          "title": "ts",
          "collabsable": false,
          "children": [
            ["ts/", "目录"],
            ["ts/ts001","【001】数据类型"],
            ["ts/ts002","【002】函数"],
            ["ts/ts003","【003】接口"],
            ["ts/ts004","【004】类"],
          ]
        },
        ['node','node'],
        ['vue','vue'],
        ['react','react'],
        ['webpack','webpack'],
        {
          "name": "wechat",
          "title": "微信公众号及小程序",
          "collabsable": false,
          "children": [
            ["wechat/", "目录"],
            ["wechat/wechat001","【001】redirect_uri参数错误"],
          ]
        },
      ],
      '/computer-foundation/':[
        ['computer-net','计算机网络'],
        ['operate-system','操作系统']
      ],
      '/tools/':[
        {
          "name": "tools",
          "title": "常用工具",
          "collabsable": false,
          "children": [
            ["", "目录"],
            ["tools001","【001】强大的Fiddler"],
          ]
        },
      ]
    },
  },

}
