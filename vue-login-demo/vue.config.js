const webpack=require('webpack')
module.exports ={
  chainWebpack:config=>{
    config.plugin('provide').use(webpack.ProvidePlugin,[{
          $:'jquery',
          jquery:'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
    }])
  },
  lintOnSave: false,
  devServer:{
      proxy:{
        '/api':{
          target:'http://localhost:8088',
          ws:true,
          pathRewrite:{
            '^/api':''
          }
        }
      }
  }
}

