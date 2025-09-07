import express from "express";
import { execSync } from "child_process";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/api/commits", (req, res) => {
  try {
    const log = execSync(
      'git log -10 --pretty=format:"%h|%an|%ar|%s"'
    ).toString();
    const commits = log.split("\n").map((line) => {
      const [hash, author, date, message] = line.split("|");
      return { hash, author, date, message };
    });
    res.json(commits);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve commits" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
