const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:8080/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      // filename: "remoteEntry.js",
      remotes: {
        react_app: 'react_app@http://localhost:8081/remoteEntry.js',
        angular_app: 'angular_app@http://localhost:4200/remoteEntry.js',
      },
      // exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          // requiredVersion: deps.react,
          eager: true
        },
        "react-dom": {
          singleton: true,
          // requiredVersion: deps["react-dom"],
          eager: true
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
