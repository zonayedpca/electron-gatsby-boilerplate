const { app, Menu } = require("electron");
const { is } = require("electron-util");

const MAIN_WINDOW_URL = is.development
	? "http://localhost:8000"
	: "../public/index.html";
const ABOUT_WINDOW_URL = is.development
	? "http://localhost:8000/about"
	: "../public/about.html";
const STAR_WINDOW_URL = is.development
	? "http://localhost:8000/about"
	: "../public/about.html";

const window = require("./module/window");
const applicationMenu = require("./module/applicationMenu");

let holdMainWindowOnMemory;
let holdAboutWindowOnMemory;
let holdStarWindowOnMemory;

const aboutWindow = () => {
	holdAboutWindowOnMemory = window(
		{
			height: 200,
			width: 600,
		},
		ABOUT_WINDOW_URL
	);
};

const starWindow = () => {
	holdStarWindowOnMemory = window(
		{
			height: 300,
			width: 500,
		},
		STAR_WINDOW_URL
	);
};

app.on("ready", () => {
	holdMainWindowOnMemory = window(
		{
			height: 420,
			width: 360,
		},
		MAIN_WINDOW_URL
	);
	const menu = applicationMenu(aboutWindow, starWindow);
	Menu.setApplicationMenu(menu);
});
