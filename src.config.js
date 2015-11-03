module.exports = {
    entry: './index2.js',
    output: {
       path: './src', 
       // publicPath: 'http://mycdn.com/', 
       filename: 'bridge.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'},
        ]
    }
}