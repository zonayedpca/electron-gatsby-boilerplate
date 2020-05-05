const { BrowserWindow } = require("electron");

const { getWindowURL } = require("../utils");

module.exports = (port) => {
	const window = new BrowserWindow({
		height: 300,
		width: 500,
	});
	window.loadURL(getWindowURL("star", port));
	return window;
};
