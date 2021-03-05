const path = require('path');
const rootPath = process.cwd();
const context = path.join(rootPath, 'src');
const outputPath = path.join(rootPath, 'dist');
const bannerPlugin = require(path.join(__dirname, 'plugins', 'banner.js'));

module.exports = {
  mode: 'development',
  context: context,
  entry: {
    dicomedit: './index.js',
  },
  output: {
    filename: '[name].js',
    library: 'DicomEdit',
    libraryTarget: 'umd',
    // libraryExport: 'default',
    globalObject: 'this',
    path: outputPath,
    //umdNamedDefine: true,
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
    ],
  },
  plugins: [bannerPlugin()],
  resolve: {
    fallback: { path: false },
  },
};
