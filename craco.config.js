var CompressionPlugin = require("compression-webpack-plugin");
var BrotliPlugin = require("brotli-webpack-plugin");
var webpack = require('webpack');

module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,
  style: {
    modules: {
      localIdentName: "",
    },
    css: {
      loaderOptions: (cssLoaderOptions, { env, paths }) => {
        return cssLoaderOptions;
      },
    },
    sass: {
      loaderOptions: (sassLoaderOptions, { env, paths }) => {
        return sassLoaderOptions;
      },
    },
    postcss: {
      mode: "extends" /* (default value) */ || "file",
      env: {
        autoprefixer: {
          /* Any autoprefixer options: https://github.com/postcss/autoprefixer#options */
        },
        stage: 3 /* Any valid stages: https://cssdb.org/#staging-process. */,
        features: {
          /* Any CSS features: https://preset-env.cssdb.org/features. */
        },
      },
    },
  },
  eslint: {
    enable: true /* (default value) */,
    mode: "extends" /* (default value) */ || "file",
    configure: (eslintConfig, { env, paths }) => {
      return eslintConfig;
    },
    pluginOptions: (eslintOptions, { env, paths }) => {
      return eslintOptions;
    },
  },
  babel: {
    presets: [],
    plugins: [],
    loaderOptions: {
      /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
    },
  },
  typescript: {
    enableTypeChecking: true /* (default value)  */,
  },
  webpack: {
    alias: {},
    plugins: [
      new BrotliPlugin({
        asset: "[path].br[query]",
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      new CompressionPlugin({
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      new webpack.DefinePlugin({ //<--key to reduce React's size
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
    ],
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
  },
  jest: {
    babel: {
      addPresets: true /* (default value) */,
      addPlugins: true /* (default value) */,
    },
    configure: (jestConfig, { env, paths, resolve, rootDir }) => {
      return jestConfig;
    },
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    return devServerConfig;
  },
  plugins: [
    {
      plugin: {
        overrideCracoConfig: ({
          cracoConfig,
          pluginOptions,
          context: { env, paths },
        }) => {
          return cracoConfig;
        },
        overrideWebpackConfig: ({
          webpackConfig,
          cracoConfig,
          pluginOptions,
          context: { env, paths },
        }) => {
          return webpackConfig;
        },
        overrideDevServerConfig: ({
          devServerConfig,
          cracoConfig,
          pluginOptions,
          context: { env, paths, proxy, allowedHost },
        }) => {
          return devServerConfig;
        },
        overrideJestConfig: ({
          jestConfig,
          cracoConfig,
          pluginOptions,
          context: { env, paths, resolve, rootDir },
        }) => {
          return jestConfig;
        },
      },
      options: {},
    },
  ],
};
