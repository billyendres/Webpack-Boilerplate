const webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Production"),
    }),
  ],
};

// Optionally add API variables with define plugin --
// To start prod environment, run yarn build -- cd into build folder -- run npx serve
// Bundle.js well be a lot smaler in build folder after production has been optimised
