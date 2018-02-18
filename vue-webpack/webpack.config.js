const path = require('path')
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'index'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders: {
            scss: 'vue-style-loader|css-loader|sass-loader'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js']
  },
  plugins: [
    new WriteFilePlugin()
  ]
}
