const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: ['babel-polyfill', './src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'out.js',
  },
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    compress: false,
    headers: {
      'X-Frame-Options': 'sameorigin',
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }),
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [{
          loader: 'file-loader',
        }],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: [
          'file-loader',
        ]
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['react'] },
          },
        ],
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
  },
};
