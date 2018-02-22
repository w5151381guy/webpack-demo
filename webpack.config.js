const webpack = require('webpack')
const path = require('path')

module.exports = {
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
  // devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: path.join(__dirname, '/'),
  //   port: 8080,
  //   inline: true,
  //   publicPath: '/dist/',
  //   historyApiFallback: true,
  // },
}
