const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const getOutput = (browserDir, outputDir = 'dev') => {
  return {
    path: path.resolve(__dirname, `${outputDir}/${browserDir}`),
    filename: '[name].js'
  };
};

const getEntry = (sourceDir = 'src') => {
  return {
    content: path.resolve(__dirname, `${sourceDir}/content.js`),
    background: path.resolve(__dirname, `${sourceDir}/background.js`)
  };
};

const getCopyPlugins = (browserDir, outputDir = 'dev', sourceDir = 'src') => [
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, './icons'),
      to: path.resolve(__dirname, `${outputDir}/${browserDir}/icons`)
    },
    {
      from: path.resolve(__dirname, './manifest.json'),
      to: path.resolve(__dirname, `${outputDir}/${browserDir}/manifest.json`)
    }
  ])
];

module.exports = {
  getOutput,
  getCopyPlugins,
  getEntry
};
