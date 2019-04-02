const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PATHS = {
   src: path.join(__dirname, '../src'),
   dist: path.join(__dirname, '../dist'),
   assets: 'assets/'
}
module.exports = {
   externals: {
      paths: PATHS
   },
   entry: {
      app: PATHS.src
   },
   output: {
      filename: `${PATHS.assets}js/[name].js`,
      path: PATHS.dist,
      publicPath: '/'
   },
   module: {
      rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
         },
         {
            test: /\.(png|jpg|svg|gif)$/,
            loader: 'file-loader',
            options: {
               name: '[name].[ext]',
               outputPath: 'assets/img'
            }
         },
         {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'file-loader',
            options: {
               name: '[name].[ext]',
               outputPath: 'assets/fonts'
            }
         },
         {
            test: /\.scss$/,
            use: [
               'style-loader',
               MiniCssExtractPlugin.loader,
               {
                  loader: 'css-loader',
                  options: {
                     sourceMap: true
                  }
               },
               {
                  loader: 'postcss-loader',
                  options: {
                     sourceMap: true,
                     config: {
                        path: `${PATHS.src}/js/postcss.config.js`
                     }
                  }
               },
               {
                  loader: 'sass-loader',
                  options: {
                     sourceMap: true
                  }
               }
            ]
         },
         {
            test: /\.css$/,
            use: [
               'style-loader',
               MiniCssExtractPlugin.loader,
               {
                  loader: 'css-loader',
                  options: {
                     sourceMap: true
                  }
               },
               {
                  loader: 'postcss-loader',
                  options: {
                     sourceMap: true,
                     config: {
                        path: `${PATHS.src}/js/postcss.config.js`
                     }
                  }
               }
            ]
         }
      ]
   },

   plugins: [
      new MiniCssExtractPlugin({
         filename: `${PATHS.assets}css/[name].css`
      }),
      new HtmlWebpackPlugin({
         hash: false,
         template: `${PATHS.src}/index.html`,
         filename: './index.html'
      }),
      new CopyWebpackPlugin([
         {
            from: `${PATHS.src}/img`,
            to: `${PATHS.assets}img`
         },
         {
            from: `${PATHS.src}/fonts`,
            to: `${PATHS.assets}fonts`
         },
         {
            from: `${PATHS.src}/static`,
            to: ''
         }
      ])
   ]
}