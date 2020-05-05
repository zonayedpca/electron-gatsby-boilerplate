const net = require("net");
const http = require("http");
const path = require("path");
const nodeStatic = require("node-static");

const getFreePort = (port, config, cb) => {
	const dir = path.join(__dirname, "..", "public");
	const file = new nodeStatic.Server(dir);
	config.connection = net.createConnection({ port: port });
	config.connection.on("connect", () => {
		config.connection.destroy();
		getFreePort(port + 1);
	});
	config.connection.on("error", () => {
		config.port = port;
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

module.exports = (port, config, cb) => {
	getFreePort(port, config, cb);
};
