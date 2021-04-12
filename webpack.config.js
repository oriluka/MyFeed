const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', //location of your main js file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'  // where js files would be bundled to
   },
   devServer: {
       contentBase: './dist'
   },
   plugins: [
       new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html' 
       })
   ],
   module: {
       rules: [
           {
               test: /\.js$/, //using regex to tell babel exactly what files to transcompile
               exclude: /node_modules/, // files to be ignored
               use: {
                   loader: 'babel-loader' // specify the loader
               } 
           }
       ]
   }
}