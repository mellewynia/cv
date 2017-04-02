
const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'test/app');
const APP_DIR = path.resolve(__dirname, 'src/app');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.yaml$/,
        include: APP_DIR,
        loader: 'yaml-loader',
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
        ],
      },
    ],
  },
};

module.exports = config;
