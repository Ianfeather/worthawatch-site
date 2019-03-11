const webpack = require('webpack');
const { ASSET_HOST } = process.env;

module.exports = function (config) {
  config.plugins.push(
      new webpack.DefinePlugin({
        'ASSET_HOST': ASSET_HOST || JSON.stringify('')
      })
  );
}
