const express = require("express");
const { execSync } = require("child_process");
const app = express();

app.get("/api/commits", (req, res) => {
  const log = execSync(
    'git log -10 --pretty=format:"%h|%an|%ar|%s"'
  ).toString();
  const commits = log.split("\n").map((line) => {
    const [hash, author, date, message] = line.split("|");
    return { hash, author, date, message };
  });
  res.json(commits);
});

app.listen(3001);
