var webpack = require('webpack');

module.exports = {
  context: __dirname + '/frontend/src/app',
  entry: {
    app: __dirname +'/frontend/src/app/index.js',
    vendor: ['angular']
  },
  output: {
    path: __dirname + '/frontend/dist',
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
};

