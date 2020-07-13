const {
  addBabelPlugin,
  override,
  overrideDevServer,
} = require('customize-cra');

const devServerConfig = config => ({
  ...config,
  historyApiFallback: true,
});

module.exports = {
  webpack: override(
    addBabelPlugin([
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ])
  ),
  devServer: overrideDevServer(devServerConfig),
};
