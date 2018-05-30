# vux_cordova_template

npm install -g vue-cli
vue init webpack mymobileapp
cd mymobileapp
npm install vux --save
npm install vux-loader --save-dev
修改 build/webpack.base.config.js
增加 //import vux-loader
const vuxLoader = require('vux-loader')
const merge = require('webpack-merge')
将原来的配置赋值给变量 const webpackConfig = {}
最后将vux-loader和原来的配置进行merge导出
module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})

