const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  mode: 'development',
  entry: {
    vendor: ["styled-components"],
    photo_carousel: path.join(__dirname, '../mike-photo-carousel/client/src/index.jsx'),
    item_summary: path.join(__dirname, '../matt-item-summary/client/src/index.jsx'),
    related_products: path.join(__dirname, '../FEC/client/RelatedProducts.jsx'),
    reviews: path.join(__dirname, '../Review-component/client/index.jsx'),
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](styled-components|react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        }
      }
    }
  },
  resolve: {
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
    }
  }
};
