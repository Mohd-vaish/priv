const fs = require("fs");
const { execSync } = require("child_process");

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const date = randomDate(new Date(2025, 0, 1), new Date());

const random = Math.floor(Math.random() * 100000);

fs.appendFileSync("README.md", "\ncommit " + random);

const env = {
  ...process.env,
  GIT_AUTHOR_DATE: date.toISOString(),
  GIT_COMMITTER_DATE: date.toISOString(),
};

execSync("git add .");
execSync(`git commit -m "backdated commit ${random}"`, { env });
execSync("git push");

console.log("Commit pushed for date:", date);