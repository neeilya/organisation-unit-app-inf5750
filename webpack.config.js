module.exports = {
    // The entry file of our app, where the app should start.
    entry: './src/app.jsx',
    output: {
        // The filename of the bundle. This file will contain all our code from all the separate files bundled into one .js file.
        filename: 'app.js'
    },

    // Settings for webpack-dev-server
    devServer: {
        // Run the dev server on port 8081
        port: 8081,
        // Serve the files from the src directory. So http://localhost:8081 will load index.html from the ./src directory.
        contentBase: './src',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: { presets: ['react'] }
            }
        ],
    }
};
