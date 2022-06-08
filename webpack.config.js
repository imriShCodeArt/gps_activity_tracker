const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const deps = require('./package.json').dependencies
module.exports = {
  output: {
    publicPath: 'http://localhost:3000/',
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      base: path.resolve(__dirname, './src/ui/components/base'),
      forms: path.resolve(__dirname, './src/ui/components/form'),
      sections: path.resolve(__dirname, './src/ui/components/sections'),
      x: path.resolve(__dirname, './src/ui/components/x'),
      cards: path.resolve(__dirname, './src/ui/cards'),
      pages: path.resolve(__dirname, './src/ui/pages'),
      theme: path.resolve(__dirname, './src/ui/theme'),
    },
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
}
