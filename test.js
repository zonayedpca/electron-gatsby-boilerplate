const path = require("path");
const nodeStatic = require("node-static");

//
// Create a node-static server instance to serve the './public' folder
//

const dir = path.join(__dirname, "public");
console.log(dir);
const file = new nodeStatic.Server(dir);

require("http")
	.createServer((req, res) => {
		req
			.addListener("end", function () {
				file.serve(req, res);
			})
			.resume();
	})
	.listen(30001);
