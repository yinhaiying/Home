const computerFoundation = require('./sidebar/computer-foundation.js');
const frontEnd = require('./sidebar/front-end.js');
const tools = require('./sidebar/tools.js');
const leetocde = require('./sidebar/leetcode.js');

const nav = require('./nav/index.js');

module.exports = {
  base:"/Home/",
  title: '海鹰斯坦的个人主页',
  description: '111Just playing around',
  themeConfig: {
    logo: '/assets/logo.jpg',
    nav: nav,
    sidebarDepth: 2,
    sidebar:{
      ...frontEnd,
      ...computerFoundation,
      ...tools,
      ...leetocde
    },
  },

}
