const fs = require("fs");
const { execSync } = require("child_process");

let startDate = new Date("2025-02-02");

for (let i = 0; i < 120; i++) {

  const random = Math.floor(Math.random() * 100000);

  fs.appendFileSync("README.md", "\ncommit " + random);

  // random gap 1–4 days
  startDate.setDate(startDate.getDate() + Math.floor(Math.random() * 4) + 1);

  const env = {
    ...process.env,
    GIT_AUTHOR_DATE: startDate.toISOString(),
    GIT_COMMITTER_DATE: startDate.toISOString(),
  };

  execSync("git add .");
  execSync(`git commit -m "commit ${random}"`, { env });
  execSync("git push");

  console.log("Commit pushed for:", startDate.toDateString());
}