const fs = require("fs");
const { execSync } = require("child_process");

// random number generate
const random = Math.floor(Math.random() * 100000);

// file update
fs.appendFileSync("README.md", "\ncommit " + random);

// git commands
execSync("git add .");
execSync(`git commit -m "auto commit ${random}"`);
execSync("git push");

console.log("Commit pushed successfully 🚀");