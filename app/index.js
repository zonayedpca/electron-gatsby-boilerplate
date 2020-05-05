const net = require("net");
const http = require("http");
const path = require("path");
const nodeStatic = require("node-static");
const { app } = require("electron");

const { findPort } = require("./utils");

const mainWindow = require("./window/main-window");
const aboutWindow = require("./window/about-window");
const starWindow = require("./window/star-window");

let EGB_RENDERER_PORT;
let SERVER_CONNECTION;

let holdAboutWindowOnMemory = aboutWindow.bind(null, EGB_RENDERER_PORT);
let holdStarWindowOnMemory = starWindow.bind(null, EGB_RENDERER_PORT);
let holdMainWindowOnMemory = mainWindow.bind(null, EGB_RENDERER_PORT, [
	holdAboutWindowOnMemory,
	holdStarWindowOnMemory,
]);

const getPort = async () => {
	const port = await findPort(30000, 40000);
};

const getFreePort = (port, cb) => {
	const dir = path.join(__dirname, "..", "public");
	const file = new nodeStatic.Server(dir);
	SERVER_CONNECTION = net.createConnection({ port: port });
	SERVER_CONNECTION.on("connect", () => {
		SERVER_CONNECTION.destroy();
		getFreePort(port + 1);
	});
	SERVER_CONNECTION.on("error", () => {
		EGB_RENDERER_PORT = port;
		http
			.createServer((req, res) => {
				req
					.addListener("end", function () {
						file.serve(req, res);
					})
					.resume();
			})
			.listen(port);
		cb();
	});
};

app.on("ready", () => {
	getFreePort(30000, holdMainWindowOnMemory);
});

app.on("window-all-closed", () => {
	SERVER_CONNECTION.destroy();
	app.quit(0);
});
