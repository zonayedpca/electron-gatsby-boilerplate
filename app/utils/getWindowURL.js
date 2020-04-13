const path = require("path");
const { is } = require("electron-util");

module.exports = (screen = "") => {
	const localPublicPath = path.resolve(__dirname, "../../public");
	console.log("localPublicPath", localPublicPath);
	return is.development
		? `http://localhost:8000/${screen}`
		: `${localPublicPath}.html`;
};
