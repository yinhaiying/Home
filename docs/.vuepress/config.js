const computerFoundation = require('./sidebar/computer-foundation.js');
const frontEnd = require('./sidebar/front-end.js');
const tools = require('./sidebar/tools.js');
const typescript = require('./sidebar/typescript.js');
const leetocde = require('./sidebar/leetcode.js');
const dataStructure = require('./sidebar/data-structure');
const computerNet = require('./sidebar/computer-net');
const operateSystem = require('./sidebar/operate-system');
const webpack = require('./sidebar/webpack');
const interview = require('./sidebar/interview');
const program = require('./sidebar/program');
const javascript = require('./sidebar/javascript');
const php = require('./sidebar/php');
const mysql = require('./sidebar/mysql');
const node = require('./sidebar/node');
const vue = require('./sidebar/vue');
const nav = require('./nav/index.js');

module.exports = {
  base:'/Home/',
  title: '海鹰斯坦的个人主页',
  repo:"",
  description: '海鹰斯坦的个人主页',
  themeConfig: {
    logo: '/assets/logo.jpg',
    repo: 'https://github.com/yinhaiying/Home',
    nav: nav,
    // sidebarDepth: 2,
    sidebar:{
      ...frontEnd,
      ...computerFoundation,
      ...tools,
      ...leetocde,
      ...typescript,
      ...dataStructure,
      ...computerNet,
      ...operateSystem,
      ...webpack,
      ...interview,
      ...program,
      ...javascript,
      ...vue,
      ...node,
      ...php,
      ...mysql
    },
  },

}
