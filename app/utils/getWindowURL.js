const { is } = require("electron-util");

module.exports = (screen = "", port) => {
	console.log(port);
	return is.development
		? `http://localhost:${port}/${screen}`
		: `http://localhost:${port}/${screen}`;
};
