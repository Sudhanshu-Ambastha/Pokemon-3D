const path = require('path');

module.exports = {
  mode: 'development',
  entry: {},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/bundles'),
    publicPath: '/bundles/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};