const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./base");

module.exports = merge(baseConfig, {
    mode: "production",

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify("production"),
        }),
    ]

});
