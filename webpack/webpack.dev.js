const webpack = require("webpack");

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Billy"),
    }),
  ],
};

// Add API variables with define plugin
// Bundle.js well be a lot smaler in build folder after production has been optimised
