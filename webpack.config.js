module.exports = {
    entry: './index.js',
    output: {
       path: './src', 
       // publicPath: 'http://mycdn.com/', 
       filename: 'bridge.js'
    },
    module: {
        loaders: [
            {
              test: /\.js$/, 
              loader: 'babel-loader',
              exclude: /(node_modules|bower_components)/,
              query: {
                presets: ['stage-2','es2015']
              }
            },
        ]
    }
}