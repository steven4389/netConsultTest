module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
        port: 3001,
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    watch: true,
    resolve: {
        extensions: ['*', '.js'],
    },
    devtool: 'eval-cheap-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader'},
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },

        ],
    },
};
