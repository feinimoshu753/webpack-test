const path = require('path');
const webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin'); // 生成文件名，配合HtmlWebpackPlugin增加打包后dll的缓存

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom'
      //提前打包一些基本不怎么修改的文件
    ]
  },
  output: {
    path: path.join(__dirname, '../dll'), //放在项目的dll目录下面
    filename: '[name].dll.js', //打包文件的名字
    library: '[name]_[hash]' //可选 暴露出的全局变量名
    // vendor.dll.js中暴露出的全局变量名。
    // 主要是给DllPlugin中的name使用，
    // 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../dll', '[name]-manifest.json'), //生成上文说到清单文件，放在当前build文件下面，这个看你自己想放哪里了。
      name: '[name]_[hash]'
    }),
    // new AssetsPlugin({
    //     filename: 'bundle-config.json',
    //     path: path.join(__dirname, '../dll')
    // }),
    //压缩 只是为了包更小一点
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console:true,
        drop_debugger:true
      },
      output:{
        // 去掉注释内容
        comments: false,
      },
      sourceMap: true
    })
  ]
};
