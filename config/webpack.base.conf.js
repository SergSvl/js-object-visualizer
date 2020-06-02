/* Base config:
   ========================================================================== */

const path = require("path");
const fs = require("fs");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const isProductionEnvFlag = process.env.NODE_ENV === 'production'
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

// Main const. Feel free to change it
const PATHS = {
  // это абсолютные пути
  src: path.join(__dirname, "../src"), // 'D:\\Programs\\OSPanel\\domains\\portalx\\src\\'
  dist: path.join(__dirname, "../"), // 'D:\\Programs\\OSPanel\\domains\\portalx\\'
  // assets - это относительный, общий путь, куда будут складываться все файлы
  assets: "assets/"
};

// console.log(PATHS)

// Pages const for HtmlWebpackPlugin
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#html-dir-folder
const PAGES_DIR = PATHS.src;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter(fileName => fileName.endsWith(".html"))

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: `${PATHS.src}/main.js`
  },
  output: {
    filename: isProductionEnvFlag ? `${PATHS.assets}js/app/[name].[contenthash].js` : `${PATHS.assets}js/app/[name].js`,
    path: PATHS.dist,
    publicPath: "/",
  },
  optimization: isProductionEnvFlag ? {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  } : {},
  module: {
    rules: [
      {
        // Vue
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loader: {
            // scss: "vue-style-loader!css-loader!sass-loader"
          }
        }
      },
      {
        // JavaScript
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        // css
        test: /\.css$/,
        use:
          isProductionEnvFlag ? [
            // Production
            'vue-style-loader',
            {
              // этот плагин в режиме dev ломает загрузку стилей модуля element-ui
              /*
                WARNING in chunk vendors [mini-css-extract-plugin]
                Conflicting order. Following module has been added:
                * css ./node_modules/css-loader!./node_modules/element-ui/lib/theme-chalk/input.css
                despite it was not able to fulfill desired ordering with these modules:
                * css ./node_modules/css-loader!./node_modules/element-ui/lib/theme-chalk/button.css
                  - couldn't fulfill desired order of chunk group(s) , ,
                  - while fulfilling desired order of chunk group(s) ,
              */
              loader: MiniCssExtractPlugin.loader,
              options: {
                sourceMap: true,
                minimize: true
              }
            },
            'css-loader',
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                config: { path: `./src/postcss.config.js` }
              }
            }
          ] : [
            // Develop
            'vue-style-loader',
            'css-loader',
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                config: { path: `./src/postcss.config.js` }
              }
            }
          ]
      },
      {
        test: /\.less$/,
        // Загрузчик использует плагины от начала до конца - справа-налево
        use: isProductionEnvFlag ? [
          // 'style-loader', // creates style nodes from JS strings
          MiniCssExtractPlugin.loader,
          'css-loader', // translates CSS into CommonJS
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: `./src/postcss.config.js` }
            }
          },
          'less-loader' // compiles Less to CSS
        ] : [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'less-loader' // compiles Less to CSS
        ]
      },
      {
        // Fonts
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]"
        }
      },
      {
        // images / icons
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.json', '.less', /*'.scss'*/],
    alias: {
      "~": PATHS.src,
      // 'vue$': "vue/dist/vue.js",
      vue: process.env.NODE_ENV == 'production' ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js',
      // 'vue$': "vue/dist/vue.esm.js",
      'less': './assets/less'
    }
  },
  plugins: [
    // Очистка папок js/app и css/app перед созданием новых скриптов
    // new CleanWebpackPlugin(pathsToClean, cleanOptions)
		//////////////////////////////////////////////////////
    // По умолчанию, этот плагин удаляет все файлы в каталоге webpack output.path
    isProductionEnvFlag ? new CleanWebpackPlugin({
      // cleanOnceBeforeBuildPatterns - запускается до того, как webpack отправит файлы в output.path
      cleanOnceBeforeBuildPatterns: [`${PATHS.assets}js/app/*`, `${PATHS.assets}css/app/*`],
			// Имитировать удаление файлов (по умолчанию: false)
			dry: false,
			// Запись логов в консоль (Всегда включено, когда значение dry = true)
			// default: false
			verbose: true,
		}) : () => {},
    new VueLoaderPlugin(),
    // new MiniCssExtractPlugin(),
    isProductionEnvFlag ? new MiniCssExtractPlugin({
      // это то место, куда будет положен результирующий файл стиля, к которому этот плагин будет применен. Например, для less - получим /assets/css/app/app.<hash>.css
      filename: `${PATHS.assets}css/app/[name].[contenthash].css`
    }) : () => {},
    new HtmlWebpackPlugin({
      inject: true, // вставка тэгов для загрузки стилей и скриптов в index.html
      template: `${PAGES_DIR}/index.html`,
      filename: './index.html',
      minify: false,
      title: 'Производственные задачи',
    }),
    // new CopyWebpackPlugin([
    //   { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
    //   { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
    //   { from: `${PATHS.src}/static`, to: "" }
    // ]),

    /*
      Automatic creation any html pages (Don't forget to RERUN dev server!)
      See more:
      https://github.com/vedees/webpack-template/blob/master/README.md#create-another-html-files
      Best way to create pages:
      https://github.com/vedees/webpack-template/blob/master/README.md#third-method-best
    */
    // ...PAGES.map(
    //   page =>
    //     new HtmlWebpackPlugin({
    //       inject: true,
    //       template: `${PAGES_DIR}/${page}`,
    //       filename: `./${page}`
    //     })
    // )
  ]
};
