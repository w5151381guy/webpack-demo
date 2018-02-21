const webpack = require('webpack')
const path = require('path')

module.exports = {
  // entry: ['webpack-hot-middleware/client?reload=true', './app.js'],
  entry: ['./app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react'],
          },
        },
      },
    ],
  },
  // plugins: [
  //   new webpack.NamedModulesPlugin(),
  //   new webpack.HotModuleReplacementPlugin(),
  // ],
}