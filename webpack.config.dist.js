const { getOutput, getCopyPlugins, getEntry } = require('./webpack.utils');
const config = require('./config.json');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const generalConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.(js)$/,
        query: {
          presets: [['@babel/preset-env', { targets: { node: '10' } }]]
        },
        resolve: {
          extensions: ['.js']
        }
      }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  }
};

module.exports = [
  {
    ...generalConfig,
    entry: getEntry(config.chromePath),
    output: getOutput('chrome', config.distDirectory),
    plugins: [
      new CleanWebpackPlugin(),
      ...getCopyPlugins('chrome', config.distDirectory, config.chromePath)
    ]
  },
  {
    ...generalConfig,
    entry: getEntry(config.operaPath),
    output: getOutput('opera', config.distDirectory),
    plugins: [
      new CleanWebpackPlugin(),
      ...getCopyPlugins('opera', config.distDirectory, config.operaPath)
    ]
  },
  {
    ...generalConfig,
    entry: getEntry(config.bravePath),
    output: getOutput('brave', config.distDirectory),
    plugins: [
      new CleanWebpackPlugin(),
      ...getCopyPlugins('brave', config.distDirectory, config.bravePath)
    ]
  },
  {
    ...generalConfig,
    entry: getEntry(config.firefoxPath),
    output: getOutput('firefox', config.distDirectory),
    plugins: [
      new CleanWebpackPlugin(),
      ...getCopyPlugins('firefox', config.distDirectory, config.firefoxPath)
    ]
  },
  {
    ...generalConfig,
    entry: getEntry(config.edgePath),
    output: getOutput('edge', config.distDirectory),
    plugins: [
      new CleanWebpackPlugin(),
      ...getCopyPlugins('edge', config.distDirectory, config.edgePath)
    ]
  }
];
