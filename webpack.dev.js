const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', 
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), 
      watch: true, 
    },
    compress: true, 
    port: 8080, 
    hot: true, 
    open: true, 
    historyApiFallback: true, 
    client: {
      overlay: {
        errors: true, 
        warnings: false, 
      },
    },
    // Optional: configure dev middleware
    devMiddleware: {
      publicPath: '/', 
    },
  },
});
