const webpack = require('webpack');
const package = require('./package.json');
const banner  =
    " Vue TidyRoutes plugin v" + package.version + "\n" +
    "\n" +
    " ... \n" +
    " @author "+ package.author + "\n" +
    " "+ package.homepage +"\n" +
    " Released under the MIT License.";

module.exports = {
    entry: './src/main.js',

    output: {
        path: './dist/',
        filename: 'tidyroutes.js',
        library: 'TidyRoutes',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    resolve: {
        extensions: ['', '.js', '.vue']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname,
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },

    plugins: [
        new webpack.BannerPlugin(banner),
        new webpack.optimize.UglifyJsPlugin({
            minimize: false,
            sourceMap: false,
            mangle: false,
            compress: {
                warnings: false
            },
            output: {
                comments: true
            }
        })
    ]
};
