const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: '[name].js[hash]',
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  module: {
    rules: [
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
  }
}
