/* Development config:
   ========================================================================== */

const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8080,
    overlay: {
      warnings: true,
      errors: true
    },
    historyApiFallback: true, // этот флаг - чтобы при горячей перезагрузке не выдавало err 404
    noInfo: false // Я заметил, что если установить noInfo: true, то я не получу никакой информации о том, на каком порту запущен сервер и т.д.

    // Как ни странно, но в webpack 4 не нужен прокси, как в v3 и без него работает с API
    // proxy: { // добавляем прокси для обхода ситуации междоменного запроса CORS
    //   '/api/**': { // ДЗ №6.2
    //     target: 'http://portalx/',
    //     secure: false,
    //     changeOrigin: true
    //   },
    // },
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
