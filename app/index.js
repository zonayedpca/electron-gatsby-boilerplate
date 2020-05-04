const net = require("net");
const http = require("http");
const fs = require("fs");
const path = require("path");
const nodeStatic = require("node-static");
const { app, Menu } = require("electron");

const { getWindowURL, findPort } = require("./utils");

const window = require("./module/window");
const applicationMenu = require("./module/applicationMenu");

let holdMainWindowOnMemory;
let holdAboutWindowOnMemory;
let holdStarWindowOnMemory;

const getPort = async () => {
	const port = await findPort(30000, 40000);
	console.log(port);
};

const aboutWindow = () => {
	holdAboutWindowOnMemory = window(
		{
			height: 200,
			width: 600,
		},
		getWindowURL("about")
	);
};

const starWindow = () => {
	holdStarWindowOnMemory = window(
		{
			height: 300,
			width: 500,
		},
		getWindowURL("star")
	);
};

const getFreePort = (port, cb) => {
	const dir = path.join(__dirname, "..", "public");
	const file = new nodeStatic.Server(dir);
	const connection = net.createConnection({ port: port });
	connection.on("connect", () => {
		connection.destroy();
		getFreePort(port + 1);
	});
	connection.on("error", () => {
		http
			.createServer((req, res) => {
				req
					.addListener("end", function () {
						file.serve(req, res);
					})
					.resume();
			})
			.listen(port);
		cb(port);
	});
};

const init = (port) => {
	holdMainWindowOnMemory = window(
		{
			height: 420,
			width: 360,
		},
		getWindowURL("", port)
	);
	const menu = applicationMenu(aboutWindow, starWindow);
	Menu.setApplicationMenu(menu);
};

app.on("ready", () => {
	getFreePort(30000, init);
});
