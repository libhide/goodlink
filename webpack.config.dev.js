const { getOutput, getCopyPlugins, getEntry } = require('./webpack.utils');
const config = require('./config.json');

const generalConfig = {
  mode: 'development',
  devtool: 'source-map',
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
  }
};

module.exports = [
  {
    ...generalConfig,
    entry: getEntry(config.chromePath),
    output: getOutput('chrome', config.devDirectory),
    plugins: [...getCopyPlugins('chrome', config.devDirectory, config.chromePath)]
  },
  {
    ...generalConfig,
    entry: getEntry(config.operaPath),
    output: getOutput('opera', config.devDirectory),
    plugins: [...getCopyPlugins('opera', config.devDirectory, config.operaPath)]
  },
  {
    ...generalConfig,
    entry: getEntry(config.bravePath),
    output: getOutput('brave', config.devDirectory),
    plugins: [...getCopyPlugins('brave', config.devDirectory, config.bravePath)]
  },
  {
    ...generalConfig,
    entry: getEntry(config.firefoxPath),
    output: getOutput('firefox', config.devDirectory),
    plugins: [...getCopyPlugins('firefox', config.devDirectory, config.firefoxPath)]
  },
  {
    ...generalConfig,
    entry: getEntry(config.edgePath),
    output: getOutput('edge', config.devDirectory),
    plugins: [...getCopyPlugins('edge', config.devDirectory, config.edgePath)]
  }
];
