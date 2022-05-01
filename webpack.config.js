import path from "path";
import miniCss from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

let mode = "development";
let target = "web";
const plugins = [
  new CleanWebpackPlugin(),
  new miniCss({
    filename: "[hash].css",
  }),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

if (process.env.DEV) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

export default {
  mode: mode,
  target: target,

  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },

  entry: "./src/index.js",

  output: {
    filename: "[hash].js",
    path: path.resolve("dist"),
    assetModuleFilename: "resources/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
        },
        exclude: /node_nodules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: miniCss.loader, options: { publicPath: "" } },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  plugins: plugins,
};
