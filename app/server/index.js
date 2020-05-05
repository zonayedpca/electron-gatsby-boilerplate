const net = require("net");
const http = require("http");
const path = require("path");
const nodeStatic = require("node-static");

module.exports = (port) =>
	new Promise((resolve) => {
		const dir = path.join(__dirname, "..", "public");
		const file = new nodeStatic.Server(dir);
		const connection = net.createConnection({ port });
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
			resolve({ port, connection });
		});
	});
