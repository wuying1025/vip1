const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        // 绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader','postcss-loader']
            },{
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },{
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['@babel/preset-env']
                        }
                        // exclude:/node_modules/
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            hash:true
        }),
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        port:8080,
        host:'localhost',
        open:true,
        hot:true
    }
}

