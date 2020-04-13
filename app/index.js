const { app, Menu } = require("electron");

const { getWindowURL } = require("./utils");

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

app.on("ready", () => {
	holdMainWindowOnMemory = window(
		{
			height: 420,
			width: 360,
		},
		getWindowURL()
	);
	const menu = applicationMenu(aboutWindow, starWindow);
	Menu.setApplicationMenu(menu);
});
