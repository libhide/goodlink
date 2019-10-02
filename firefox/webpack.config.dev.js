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
    entry: getEntry(config.firefoxPath),
    output: getOutput('firefox', config.devDirectory),
    plugins: [...getCopyPlugins('firefox', config.devDirectory, config.firefoxPath)]
  }
];
