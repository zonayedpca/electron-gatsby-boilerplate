const { app } = require("electron");

const server = require("./server");

const mainWindow = require("./window/main-window");
const aboutWindow = require("./window/about-window");
const starWindow = require("./window/star-window");

const START_LOOKING_FOR_PORT_FROM = 30000;

let holdAboutWindowOnMemory;
let holdStarWindowOnMemory;
// eslint-disable-next-line
let holdMainWindowOnMemory;

const init = async () => {
	const { port, connection } = await server(START_LOOKING_FOR_PORT_FROM);
	holdAboutWindowOnMemory = aboutWindow.bind(null, port);
	holdStarWindowOnMemory = starWindow.bind(null, port);
	holdMainWindowOnMemory = mainWindow(port, [
		holdAboutWindowOnMemory,
		holdStarWindowOnMemory,
	]);
	app.on("window-all-closed", () => {
		connection.destroy();
		app.quit();
	});
};

app.on("ready", () => {
	init();
});
