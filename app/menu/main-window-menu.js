const { app, Menu, shell } = require("electron");
const { is } = require("electron-util");

const isMac = is.macos;

const template = (aboutWindow, starWindow) => [
	...(isMac
		? [
				{
					label: app.name,
					submenu: [
						{ role: "about" },
						{ type: "separator" },
						{ role: "services" },
						{ type: "separator" },
						{ role: "hide" },
						{ role: "hideothers" },
						{ role: "unhide" },
						{ type: "separator" },
						{ role: "quit" },
					],
				},
		  ]
		: []),
	{
		label: "File",
		submenu: [isMac ? { role: "close" } : { role: "quit" }],
	},
	{
		label: "Edit",
		submenu: [
			{ role: "undo" },
			{ role: "redo" },
			{ type: "separator" },
			{ role: "cut" },
			{ role: "copy" },
			{ role: "paste" },
			...(isMac
				? [
						{ role: "pasteAndMatchStyle" },
						{ role: "delete" },
						{ role: "selectAll" },
						{ type: "separator" },
						{
							label: "Speech",
							submenu: [{ role: "startspeaking" }, { role: "stopspeaking" }],
						},
				  ]
				: [{ role: "delete" }, { type: "separator" }, { role: "selectAll" }]),
		],
	},
	{
		label: "View",
		submenu: [
			{ role: "reload" },
			{ role: "forcereload" },
			{ role: "toggledevtools" },
			{ type: "separator" },
			{ role: "resetzoom" },
			{ role: "zoomin" },
			{ role: "zoomout" },
			{ type: "separator" },
			{ role: "togglefullscreen" },
		],
	},
	// { role: 'windowMenu' }
	{
		label: "Window",
		submenu: [
			{ role: "minimize" },
			{ role: "zoom" },
			...(isMac
				? [
						{ type: "separator" },
						{ role: "front" },
						{ type: "separator" },
						{ role: "window" },
				  ]
				: [{ role: "close" }]),
		],
	},
	{
		role: "help",
		submenu: [
			{
				label: "Learn More",
				click: async () => {
					await shell.openExternal("https://electronjs.org");
				},
			},
		],
	},
	{
		label: "Screens",
		submenu: [
			{
				label: "About this Project",
				click: aboutWindow,
			},
			{
				label: "Star this Project",
				click: starWindow,
			},
		],
	},
];

module.exports = (aboutWindow, starWindow) =>
	Menu.buildFromTemplate(template(aboutWindow, starWindow));
