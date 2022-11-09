import path from "path";
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isAnalyze = typeof process.env.BUNDLE_ANALYZE !== "undefined";
module.exports = (env: any) => {
  console.log(env);
  return {
    entry: "./client/index.tsx",
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.(s(a|c)ss|css)$/i,
          // use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'], //load tailwind disable
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
      chunkFilename: "[name].[chunkhash].js",
      clean: true,
      publicPath: "/",
    },
    plugins: isAnalyze
      ? [
          new HtmlWebpackPlugin({
            template: path.resolve("./index.html"),
          }),
          new BundleAnalyzerPlugin(),
          new NodePolyfillPlugin(),
          new MomentLocalesPlugin({
            localesToKeep: ["en-sg", "id"],
          }),
        ]
      : [
          new HtmlWebpackPlugin({
            template: path.resolve("./index.html"),
          }),
          new NodePolyfillPlugin(),
          new MomentLocalesPlugin({
            localesToKeep: ["en-sg", "id"],
          }),
        ],
    devServer: {
      // contentBase: path.join(__dirname),
      compress: true,
      port: 4000,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, "./"),
      },

      // testing local network (diff device)
      // host: '192.168.100.28'
    },
  };
};
