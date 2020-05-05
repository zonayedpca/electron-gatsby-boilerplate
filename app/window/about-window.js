const { BrowserWindow } = require("electron");

const { getWindowURL } = require("../utils");

module.exports = (port) => {
	let window = new BrowserWindow({
		height: 200,
		width: 600,
	});
	window.loadURL(getWindowURL("about", port));
	return window;
};
