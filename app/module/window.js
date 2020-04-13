const { BrowserWindow } = require("electron");

class MainWindow extends BrowserWindow {
	constructor(config, url) {
		super(config);
		this.loadURL(url);
	}
}

module.exports = (config, url) => new MainWindow(config, url);
