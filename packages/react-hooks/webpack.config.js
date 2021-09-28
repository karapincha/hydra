var path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "index.js",
		library: "index",
		publicPath: "/",
		globalObject: "this",
		libraryTarget: "commonjs2",
	},
	externals: {
		react: "commonjs react",
		"react-dom": "commonjs react-dom",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
};
