const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const BuildConfig = {
  path: {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    dist: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  },
};

const getRules = () => {
  return [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
    {
      test: /\.(css|scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(png|jpg|gif|jpeg)$/,
      use: ['file-loader'],
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
  ];
};

const getPlugins = () => {
  return [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: BuildConfig.path.html,
    }),
  ];
};

module.exports = {
  entry: BuildConfig.path.entry,
  devtool: 'inline-source-map',
  output: {
    path: BuildConfig.path.dist,
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: getPlugins(),
  module: {
    rules: getRules(),
  },
};
