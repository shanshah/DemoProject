let path = require('path');

module.exports = {
  entry: './index.jsx',
  output: {
    publicPath : '/dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.(scss|css)$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  devServer: {
    historyApiFallback: true
  }
};
