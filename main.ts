const fs = require("node:fs");

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", "Beware: 'garbage in, garbage out' is not a warning; " + "it is your family tree.");
