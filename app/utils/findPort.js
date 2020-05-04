const net = require("net");

const findFreePort = (beg, ...rest) => {
	const p = rest.slice(0, rest.length - 1),
		cb = rest[rest.length - 1];
	let [end, ip, cnt] = Array.from(p);
	if (!ip && end && !/^\d+$/.test(end)) {
		ip = end;
		end = 65534;
	} else {
		if (end == null) {
			end = 65534;
		}
	}
	if (cnt == null) {
		cnt = 1;
	}

	const retcb = cb;
	const res = [];
	const probe = (ip, port, cb) => {
		const s = net.createConnection({ port: port, host: ip });
		s.on("connect", () => {
			s.end();
			cb(null, port + 1);
		});
		s.on("error", (err) => {
			cb(port);
		});
	};
	var onprobe = (port, nextPort) => {
		if (port) {
			res.push(port);
			if (res.length >= cnt) {
				retcb(null, ...res);
			} else {
				setImmediate(() => probe(ip, port + 1, onprobe));
			}
		} else {
			if (nextPort >= end) {
				retcb(new Error("No available ports"));
			} else {
				setImmediate(() => probe(ip, nextPort, onprobe));
			}
		}
	};
	return probe(ip, beg, onprobe);
};

module.exports = (beg, ...rest) => {
	const last = rest[rest.length - 1];
	if (typeof last === "function") {
		findFreePort(beg, ...rest);
	} else {
		return new Promise((resolve, reject) => {
			findFreePort(beg, ...rest, (err, ...ports) => {
				if (err) {
					reject(err);
				} else {
					resolve(ports);
				}
			});
		});
	}
};
