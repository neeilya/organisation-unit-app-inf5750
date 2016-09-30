module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'app.js'
    },

    devServer: {
        port: 8081,
        contentBase: './src',
    }
};
