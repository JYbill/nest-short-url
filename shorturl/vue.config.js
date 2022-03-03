const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
})
module.exports = {
  

  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
    // 配置路径别名
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('styles',resolve('src/assets/styles'))
  },
  devServer: {
    proxy: {
        '/api1': {
            target: 'https://no.jybill.top/url',
            changeOrigin: true,
            pathRewrite: {
                '^/api1': ''
            }
        },
        '/foo': {
            target: '<other_url>'
        }
    }
},
css: {
  loaderOptions: {
    postcss: {
      plugins: [
        postcss
      ]
    }
  }
}

};