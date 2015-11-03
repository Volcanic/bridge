module.exports = {
    entry: './index.js',
    output: {
       path: './dist', 
       // publicPath: 'http://mycdn.com/', 
       filename: 'bridge.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'},
        ]
    }
}