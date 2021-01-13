const path = require('path');
const rootPath = process.cwd();
const context = path.join(rootPath, 'src');
const outputPath = path.join(rootPath, 'dist');
const bannerPlugin = require(path.join(__dirname, 'plugins', 'banner.js'));

module.exports = {
  mode: 'development',
  context: context,
  entry: {
    dicomedit: '../test/index.test.js',
  },

  externals: {
    fs: 'fs',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|test)/,
        loader: 'eslint-loader',
        options: {
          failOnError: false,
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      node: '10',
                    },
                  },
                ],
              ],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
        ],
      },
      {
        test: /\.peg$/i,
        use: 'raw-loader',
      },
      {
        test: /test\.js$/,
        use: 'mocha-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [bannerPlugin()],
};
