const { app, Menu } = require("electron");

const mainWindow = require("./module/MainWindow");
const applicationMenu = require("./module/ApplicationMenu");

let holdMainWindowOnMemory;
app.on("ready", () => {
	holdMainWindowOnMemory = mainWindow();
	Menu.setApplicationMenu(applicationMenu);
});
