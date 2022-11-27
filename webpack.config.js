const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json'
          }
        }],
        exclude: /node_modules/
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Clerk',
	    template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ],
  devServer: {
    port: 9098,
  }
};
