exports.handler = async (event) => {
  const owner = "Natti94";
  const repo = "Projects";
  const per_page = 10;
  const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${per_page}`;

  try {
    const headers = {
      "User-Agent": "NetlifyFunction",
    };
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
    }
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    const data = await response.json();
    const commits = data.map((commit) => ({
      hash: commit.sha.substring(0, 7),
      author: commit.commit.author.name,
      date: commit.commit.author.date,
      message: commit.commit.message,
      url: commit.html_url,
    }));
    return {
      statusCode: 200,
      body: JSON.stringify(commits),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to retrieve commits",
        details: err.message,
      }),
    };
  }
};
