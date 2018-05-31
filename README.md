# Steps to create the template
### Integrate Vux with Vuejs webpack tempate
1. install vue-cli
`npm install -g vue-cli`
2. create a webapck vuejs project
`vue init webpack mymobileapp`
3. install vux and vux-loader
`cd mymobileapp`
`npm install vux --save`
`npm install vux-loader --save-dev`
4. config vux-loader
edit `build/webpack.base.config.js`, add below lines
```javascript
const vuxLoader =require('vux-loader')
const merge = require('webpack-merge')
const webpackConfig = {...} //this is the original configuration
//merge by vux-loader
module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui', 
    'duplicate-style',
    {
      name: 'less-theme',
      path: 'src/assets/theme.less'
    }]
})
```
---
### integration cordova into the template
1. install cordova
2. create a fake project
3. copy all contents except `package.json, platforms/, plugins/, www/` into the template project
4. edit `config/index.js` and make following changes
    * find `../dist` and replace with `../www`
    * update `build.assetPublicPath` from `/` to `./`
---
### development and build
1. Usually, development work can be done by `npm run dev`
2. if need cordova to package the applicaton, follow the cordova commands, such as `cordova platform add android`, but be sure run `npm run build` before running any cordova commands. Also please note to check if `www/, platforms/, plugins/` folder existing, otherwise please create them mannually
---
### known issues
* webpack loaded fonts can't be access after `npm run build`
