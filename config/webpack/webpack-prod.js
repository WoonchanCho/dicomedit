const merge = require('./merge');
const baseConfig = require('./webpack-base');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const prodConfig = {
  output: {
    filename: '[name].min.js',
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    usedExports: true,
  },
  plugins: [new CompressionPlugin()],
};

const mergedConfig = merge(baseConfig, prodConfig);

module.exports = [
  merge(mergedConfig, {
    target: 'web',
    output: {
      filename: 'web/[name].min.js',
    },
    externals: {
      fs: '',
    },
    plugins: [new BundleAnalyzerPlugin()],
  }),
  merge(mergedConfig, {
    target: 'node',
    output: {
      filename: 'node/[name].min.js',
    },
  }),
];
