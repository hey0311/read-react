const SimpleLogWebpackPlugin = require('../index.js')
// const SimpleLogWebpackPlugin = require('./log.js')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: './index.js',
    main: './main.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  plugins: [
    new SimpleLogWebpackPlugin()
  ]
}

