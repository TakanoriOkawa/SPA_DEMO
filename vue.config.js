module.exports = {
  publicPath: "./",

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/scss/_utility.scss";`
      }
    }
  }
};