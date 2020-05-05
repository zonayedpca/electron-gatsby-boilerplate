const { BrowserWindow } = require("electron");

const mainWindowMenu = require("../menu/main-window-menu");

const { getWindowURL } = require("../utils");

module.exports = (port, [aboutWindow, starWindow]) => {
	const window = new BrowserWindow({
		height: 420,
		width: 360,
	});
	window.loadURL(getWindowURL("", port));
	const menu = mainWindowMenu(aboutWindow, starWindow);
	window.setMenu(menu);
	return window;
};
