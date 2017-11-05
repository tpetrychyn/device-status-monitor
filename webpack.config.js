var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: {
    'app': path.join(__dirname, '/public/app.js')
  },
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: '[name].bundle.js',
    publicPath: "dist/"
  },
  node: {
    fs: "empty"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
    },
    // inline base64 URLs for <=8k images, direct URLs for the rest
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    },
    // helps to load bootstrap's css.
    {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&minetype=application/font-woff'
    },
    {
      test: /\.woff2$/,
      loader: 'url?limit=10000&minetype=application/font-woff'
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&minetype=application/octet-stream'
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&minetype=image/svg+xml'
    }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    compress: true,
    hot: true,
    inline: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000/',
        secure: false,
      },
      '/auth': {
        target: 'http://localhost:8000/',
        secure: false,
      }
    }
  },
  devtool: 'eval'
}
