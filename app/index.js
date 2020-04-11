const { BrowserWindow, shell, app } = require("electron");

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
