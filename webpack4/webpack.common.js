//生成环境 开发环境公共配置

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    resolve: {
        alias: {  //配置别名
            //  vue$: path.resolve(__dirname, 'src/lib/vue/dist/vue.esm.js'),
            '@': path.resolve(__dirname, 'src/')  //__dirname 代表根目录
        },
        extensions: [".js", ".vue", ".json"]  //  默认值，模块可省略后缀名
    },
    externals: {  //把一个模块做成外部依赖，不会打包到js文件中
        jquery: 'jQuery',  //配置外部依赖  不会打包到dis文件里
        lodash:'_'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,  // 加快编译速度，不包含node_modules文件夹内容
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/transform-runtime']
                    }
                },
                {
                    // 要放到最后面
                    loader: "eslint-loader",
                    options: {
                        // eslint options (if necessary)
                        fix: true
                    }
                }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                include: [path.resolve(__dirname, 'src/')],
                use: [
                    {
                        loader: 'url-loader', // 根据图片大小，把图片优化成base64
                        options: {
                            limit: 10000
                        }
                    },
                    // {    报错了  还未解决
                    //     loader: 'image-webpack-loader',
                    //     options: {
                    //         mozjpeg: {
                    //             progressive: true,
                    //             quality: 65
                    //         },
                    //         optipng: {
                    //             enabled: false,
                    //         },
                    //         pngquant: {
                    //             quality: '65-90',
                    //             speed: 4
                    //         },
                    //         gifsicle: {
                    //             interlaced: false,
                    //         },
                    //         webp: {
                    //             quality: 75
                    //         }
                    //     }
                    // }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'AICODER 全栈线下实习', // 默认值：Webpack App
            filename: 'main.html', // 默认值： 'index.html'
            template: path.resolve(__dirname, 'src/main.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,      //是否移除注释
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
        new CleanWebpackPlugin()  //默认  不用指向dist文件夹
    ]
}









