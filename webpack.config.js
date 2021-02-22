const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');


module.exports = {
  entry:"./src/index.js",
  output:{
    filename:"bundle.[fullhash].js",
    path: path.resolve(__dirname, "build")
  },
  resolve:{
    extensions:[".js", ".jsx"]
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/i,
        exclude:/node_modules/,
        use:[
          {
            loader:"babel-loader"
          }
        ]
      },
      {
        test:/\.html$/,
        use:[
          {
            loader:"html-loader"
          }
        ]
      },
      {
        test:/\.(png|gif|jpe?g|svg)$/i,
        use:[
          {
            loader:"file-loader"
          }
        ]
      },
      {
        test:/\.css$/i,
        use:["style-loader", "css-loader"]
      }
    ]
  },
  plugins:[
    new HtmlPlugin({
      filename:"index.html",
      template:"./public/index.html"
    })
  ],
  devServer:{
    historyApiFallback:true,
    port:3000
  }
}
