const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");

const SRC_DIR = path.resolve(__dirname, "src");
const DIST_DIR = path.resolve(__dirname, "dist");

process.env.NODE_ENV = process.env.NODE_ENV || "development";
if (process.env.NODE_ENV === "test") {
  require("dotenv").config({ path: ".env.test" });
} else if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.development" });
}

module.exports = env => {
  // const isProduction = env === "production";

  return {
    devtool: "cheap-module-source-map",
    entry: `${SRC_DIR}/index.js`,
    mode: "development",
    output: {
      path: DIST_DIR,
      filename: "index.js",
      chunkFilename: "[id].js",
      publicPath: ""
    },
    context: __dirname,
    resolve: {
      extensions: [".js", ".jsx", ".json", "*"]
    },
    optimization: {
      splitChunks: {
        chunks: "all"
      },
      minimize: true
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          include: SRC_DIR,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: "[name]__[local]__[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: () => [
                  autoprefixer({
                    browsers: ["> 1%", "last 2 versions"]
                  })
                ]
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          loader: "url-loader?limit=8000&name=images/[name].[ext]"
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${SRC_DIR}/index.html`,
        filename: "index.html",
        inject: "body"
      }),
      new webpack.DefinePlugin({
        "process.env.FIREBASE_API_KEY": JSON.stringify(
          process.env.FIREBASE_API_KEY
        ),
        "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(
          process.env.FIREBASE_AUTH_DOMAIN
        ),
        "process.env.FIREBASE_DATABASE_URL": JSON.stringify(
          process.env.FIREBASE_DATABASE_URL
        ),
        "process.env.FIREBASE_PROJECT_ID": JSON.stringify(
          process.env.FIREBASE_PROJECT_ID
        ),
        "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(
          process.env.FIREBASE_STORAGE_BUCKET
        ),
        "process.env.GOOGLEPLACES_API_KEY": JSON.stringify(
          process.env.GOOGLEPLACES_API_KEY
        )
      })
    ]
    // devtool: isProduction ? "source-map" : "inline-source-map"
  };
};
