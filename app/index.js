const { BrowserWindow, app } = require("electron");
const { is } = require("electron-util");

console.log(is);

const WINDOW_URL = "http://localhost:8000";

class MainWindow extends BrowserWindow {
	constructor(config, windowUrl) {
		super(config);
		this.loadURL(windowUrl);
	}
}

let mainWindow;
app.on("ready", () => {
	mainWindow = new MainWindow(
		{
			height: 420,
			width: 360,
			webPreferences: {
				nodeIntegration: true,
			},
		},
		WINDOW_URL
	);
});
