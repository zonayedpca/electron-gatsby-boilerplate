const path = require("path");
const { is } = require("electron-util");

module.exports = (screen = "", port) => {
	// const indexLocation =
	// 	screen === "index" ? "index.html" : `${screen}/index.html`;
	// const localPublicPath = `file://${__dirname}/client/public/${indexLocation}`;
	return is.development
		? `http://localhost:8000/${screen}`
		: `http://localhost:30000/${screen}`;
};
