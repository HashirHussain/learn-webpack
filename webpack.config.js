const path = require("path");

module.exports = {
  //by-default webpack look the entry file inside src/index.js,
  //but we can change the entry whatever we want.
  entry: "./app/app.js",
  output: {
    //by-default webpack puts all its bundle into dist/main.js,
    //but we can customize the folder and the file name.
    filename: "myBundle.js",
    path: path.resolve(__dirname, "bundle"),
  },
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, "bundle"),
  },
  mode: "development",
};
