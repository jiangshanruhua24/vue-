module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                views:'@/views',
                components:'@/components',
                assets:'@/assets',
                request:'@/request',
            }
        }
    },
    devServer:{
        proxy: {
            "/api": {
              target: "http://192.168.1.45:3000",
              pathRewrite: {"^/api" : ""}
            }
          }
    }
}