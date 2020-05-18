module.exports = [
    { text: '主页', link: '/' },
    {
        text: '前端',
        // link: '/front-end/',
        items: [
          { text: 'Javascript', link: '/javascript/javascript/js001' },
          { text: 'Typescript', link: '/typescript/' },
          { text: 'Webpack', link: '/webpack/' },
          { text: 'Vue', link: '/vue/vue001' },
          { text: 'Node', link: '/node/node001' },
        ]
    },
    {
      text: '计算机基础',
      items: [
        { text: '计算机网络', link: '/computer-net/' },
        { text: '操作系统', link: '/operate-system/' },
        { text: '数据结构和算法', link: '/data-structure/' },
      ]
    },
    { text: '项目', link: '/program/vue/vue001' },
    { text: '面试', link: '/interview/' },
    { text: 'Leetcode', link: '/leetcode/' },
    { text: '常用网站', link: '/other-site/' },
    { text: '常用工具', link: '/tools/' },
]
