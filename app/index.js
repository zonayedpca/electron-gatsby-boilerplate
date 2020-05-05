const { app } = require("electron");

const server = require("./server");

const mainWindow = require("./window/main-window");
const aboutWindow = require("./window/about-window");
const starWindow = require("./window/star-window");

const START_LOOKING_FOR_PORT_FROM = 30000;

const config = {
	port: null,
	connection: null,
};

let holdAboutWindowOnMemory = aboutWindow.bind(null, config.port);
let holdStarWindowOnMemory = starWindow.bind(null, config.port);
let holdMainWindowOnMemory = mainWindow.bind(null, config.port, [
	holdAboutWindowOnMemory,
	holdStarWindowOnMemory,
]);

app.on("ready", () => {
	server(START_LOOKING_FOR_PORT_FROM, config, holdMainWindowOnMemory);
});

app.on("window-all-closed", () => {
	config.connection.destroy();
	app.quit();
});
