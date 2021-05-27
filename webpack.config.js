const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const jsEntryPath = path.join(__dirname, './index.js');
const htmlEntryPath = path.join(__dirname, './index.html');
const allFilesOutputPath = path.join(__dirname, 'dist/');



const htmlPlugin = new HtmlWebpackPlugin({template:htmlEntryPath});
const cleanWebpackPlugin = new CleanWebpackPlugin();

module.exports = {
    devtool :'source-map',
    mode:'development',
    entry : [jsEntryPath],
    output:{
        path:allFilesOutputPath,
        filename:'bundle.js',
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node-modules/,
                loader:'babel-loader',
                options:{ 
                    presets:['@babel/preset-env','@babel/preset-react']
                }            
            },
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
        
    },
    devServer:{
        historyApiFallback:true,
        port:3080
    },
    plugins:[
        htmlPlugin, cleanWebpackPlugin
    ],
    resolve:{
        extensions:['.css','.scss','.js','.jsx']
    }
}
