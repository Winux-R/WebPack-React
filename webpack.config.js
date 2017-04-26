var path = require('path');

module.exports = {
    entry: ['webpack/hot/dev-server.js', path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};