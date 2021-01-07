const path = require('path');
const webpack = require('webpack');
const merge = require('./merge');
const baseConfig = require('./webpack-base');

module.exports = [
  merge(baseConfig, {
    target: 'web',
    output: {
      filename: 'web/[name].js',
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      hot: true,
      // publicPath: '/dist/',
      port: 9000,
    },
    plugins: [new webpack.HotModuleReplacementPlugin({})],
    externals: {
      fs: '',
    },
  }),

  merge(baseConfig, {
    target: 'node',
    output: {
      filename: 'node/[name].js',
    },
  }),
];
