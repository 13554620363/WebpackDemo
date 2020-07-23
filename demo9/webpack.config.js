const path = require("path");
//没有优化的config

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "eslint-loader",
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js",".ts", ".json"]
  }
};
