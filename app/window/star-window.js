const { BrowserWindow, shell } = require("electron");

const { getWindowURL } = require("../utils");

module.exports = (port) => {
	const window = new BrowserWindow({
		height: 300,
		width: 500,
		webPreferences: {
			nodeIntegration: true,
		},
	});
	window.webContents.on("will-navigate", (event, url) => {
		event.preventDefault();
		shell.openExternal(url);
	});
	window.loadURL(getWindowURL("star", port));
	return window;
};
