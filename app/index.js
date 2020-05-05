const net = require("net");
const http = require("http");
const path = require("path");
const nodeStatic = require("node-static");
const { BrowserWindow, app, Menu } = require("electron");

const { getWindowURL, findPort } = require("./utils");

const mainWindowMenu = require("./menu/main-window-menu");

const aboutWindow = require("./window/about-window");

let EGB_RENDERER_PORT;
let SERVER_CONNECTION;

let holdMainWindowOnMemory;
let holdAboutWindowOnMemory = aboutWindow.bind(null, EGB_RENDERER_PORT);
let holdStarWindowOnMemory;

const getPort = async () => {
	const port = await findPort(30000, 40000);
};

const starWindow = () => {
	holdStarWindowOnMemory = new BrowserWindow({
		height: 300,
		width: 500,
	});
	holdStarWindowOnMemory.loadURL(getWindowURL("star", EGB_RENDERER_PORT));
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

const mainWindow = (port) => {
	holdMainWindowOnMemory = new BrowserWindow({
		height: 420,
		width: 360,
	});
	holdMainWindowOnMemory.loadURL(getWindowURL("", EGB_RENDERER_PORT));
	const menu = mainWindowMenu(holdAboutWindowOnMemory, starWindow);
	holdMainWindowOnMemory.setMenu(menu);
};

app.on("ready", () => {
	getFreePort(30000, mainWindow);
});

app.on("window-all-closed", () => {
	SERVER_CONNECTION.destroy();
	app.quit(0);
});
