// netlify/functions/getActivities.js
exports.handler = async (event) => {
  const owner = "Natti94";
  const repo = "projects-app";
  const per_page = 5;
  const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${per_page}`;
  try {
    const headers = {
      "User-Agent": "NetlifyFunction"
    };
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
    }
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    const data = await response.json();
    const activity = data.map((activity2) => ({
      hash: activity2.sha.substring(0, 7),
      author: activity2.commit.author.name,
      date: activity2.commit.author.date,
      message: activity2.commit.message,
      url: activity2.html_url
    }));
    return {
      statusCode: 200,
      body: JSON.stringify(activity),
      headers: {
        "Content-Type": "application/json"
      }
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to retrieve activity",
        details: err.message
      })
    };
  }
};
//# sourceMappingURL=getActivities.js.map
