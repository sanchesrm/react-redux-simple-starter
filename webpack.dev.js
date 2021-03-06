const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    publicPath: 'dist'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public'
  }
});
