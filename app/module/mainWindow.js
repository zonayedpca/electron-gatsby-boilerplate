const { BrowserWindow } = require("electron");
const { is } = require("electron-util");

const MAIN_WINDOW_URL = is.development
	? "http://localhost:8000"
	: "../public/index.html";

class MainWindow extends BrowserWindow {
	constructor() {
		super({
			height: 420,
			width: 360,
			webPreferences: {
				nodeIntegration: true,
			},
		});
		this.loadURL(MAIN_WINDOW_URL);
	}
}

module.exports = () => new MainWindow();
