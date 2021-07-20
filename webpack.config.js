var webpack = require("webpack");
var path = require("path");

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: "inline-sourcemap",
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"],
          plugins: [
            "react-html-attrs",
            "transform-class-properties",
            "transform-decorators-legacy",
          ],
        },
      },
    ],
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: "imports?this=>global!exports?global.fetch!whatwg-fetch",
    }),
  ],
};
