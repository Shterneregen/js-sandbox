module.exports = {
    entry: "./src/app.js",
    output: {
        path: "/dist",
        filename: "app.bundle.js"
    },
    module: {
        loaders: [{
            exclude: "/node_module",
            loader: "babel-loader"
        }]
    }
};