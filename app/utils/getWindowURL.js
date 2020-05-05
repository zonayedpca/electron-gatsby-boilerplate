const { is } = require("electron-util");

module.exports = (screen = "", port) => {
	return is.development
		? `http://localhost:8000/${screen}`
		: `http://localhost:${port}/${screen}`;
};
