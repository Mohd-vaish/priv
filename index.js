const fs = require("fs");
const { execSync } = require("child_process");

let startDate = new Date("2024-01-01"); // starting date

for (let i = 0; i < 200; i++) {

  const random = Math.floor(Math.random() * 100000);

  fs.appendFileSync("README.md", "\ncommit " + random);

  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i); // next day

  const env = {
    ...process.env,
    GIT_AUTHOR_DATE: date.toISOString(),
    GIT_COMMITTER_DATE: date.toISOString(),
  };

  execSync("git add .");
  execSync(`git commit -m "backdated commit ${random}"`, { env });
  execSync("git push");

  console.log("Commit pushed for:", date.toDateString());
}