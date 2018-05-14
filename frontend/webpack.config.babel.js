const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
import path from 'path';
import webpack from 'webpack';


export default {
  mode:'none',
  entry: './src/index.js',
  output: {
    path: path.resolve('./build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.json',".ts", ".tsx"]
  },
  optimization: {
  minimizer: [
    new UglifyJsPlugin({
      uglifyOptions: {
            compress: false,
            ecma: 6,
            mangle: true
          }
    })
  ]
},
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js/,
        use: [
          { loader: 'babel-loader',
          query: {
          presets: ['es2015', 'react'],
          },
         }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader', options: {
              includePaths: ['./node_modules/grommet/grommet.min.css', './node_modules/grommet-css/build/index.min.css']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader', options: {
              includePaths: ['.css','./node_modules']
            }
          }
        ]
      },
        sassLoader: {
      includePaths: [
        './node_modules'
      ]
    },
    ]
  }
};
