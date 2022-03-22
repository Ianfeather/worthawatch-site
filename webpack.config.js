const config = {
  mode: 'development',
  target: 'node',
  resolve: {
    extensions: ['*', '.mjs', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }
    ]
  },
  resolve: {
    alias: {
      'node-fetch$': "node-fetch/lib/index.js"
    }
  }
}

module.exports = config
