const withCss = require("@zeit/next-css");

module.exports = withCss({
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|eot|woff2?|ttf)$/i,
      use: {
        loader: "file-loader",
        options: {
          name: "[path][name].[hash].[ext]",
          publicPath: "/_next/static",
          outputPath: "static",
          emitFile: !isServer,
        },
      },
    });
    return config;
  },
});
