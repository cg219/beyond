const path = require('path');
const ExtractText = require('extract-text-webpack-plugin');
const Style = new ExtractText('./../css/[name].styles.css');

module.exports = {
  entry: {
    angular: './src/angular/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/js/')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: Style.extract({
          use: 'css-loader!sass-loader',
          fallback: 'style-loader?importLoaders=1'
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    Style
  ],
  externals: {
    async: 'commonjs async'
  }
}