const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {StatsWriterPlugin} = require("webpack-stats-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require("path");
const MAIN_PATH = path.resolve(__dirname, "./../");
const SRC_PATH = path.resolve(MAIN_PATH, "src");
const DIST_PATH = path.resolve(MAIN_PATH, "dist");
const JS_SRC_PATH = path.resolve(SRC_PATH, "js");

module.exports = {
    entry: path.resolve(JS_SRC_PATH, "app.js"),

    output: {
        path: DIST_PATH,
        filename: "b.[contenthash].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: path.resolve(SRC_PATH, "index.html"),
            filename: path.resolve(DIST_PATH, "index.html"),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.resolve(MAIN_PATH, "dist")],
            verbose: true,
            dry: false
        }),
        new StatsWriterPlugin({
            filename: "stats.json" // Default
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "disabled",
            generateStatsFile: true,
            statsOptions: {source: false}
        }),
    ]

};
