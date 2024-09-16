import { glob, globSync } from "node:fs";

glob("**/*.js", (err, matches) => {
	if (err) throw err;
	console.log(matches);
});

console.log(globSync("**/*.js"));
