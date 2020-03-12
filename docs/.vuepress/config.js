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
              "js/js1",
              "这是第一篇关于js的"
            ],
            [
              "js/js2",
              "这是第二篇关于js的"
            ],
          ]
        },
        ['node','node'],
        ['vue','vue'],
        ['react','react'],
        ['webpack','webpack'],
      ],
      '/computer-foundation/':[
        ['computer-net','计算机网络'],
        ['operate-system','操作系统']
      ],
    },
  },

}
