const merge = require('./merge');
const baseConfig = require('./webpack-base');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin;

const prodConfig = {
  mode: 'production',
};

const mergedConfig = merge(baseConfig, prodConfig);

module.exports = [
  merge(mergedConfig, {
    target: 'web',
    output: {
      filename: 'web/[name].min.js',
    },
    externals: {
      fs: 'fs',
    },
    plugins: [new CompressionPlugin()],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              ascii_only: true,
            },
          },
        }),
      ],
      usedExports: true,
    },
  }),
  merge(mergedConfig, {
    target: 'node',
    output: {
      filename: 'node/[name].min.js',
    },
  }),
];
