exports.handler = async (event) => {
  const qs = event.queryStringParameters || {};

  const owner = qs.owner || process.env.GITHUB_OWNER || "Natti94";
  const repo = qs.repo || process.env.GITHUB_REPO || "Projects";

  const page = Math.max(1, parseInt(qs.page, 10) || 1);
  const perPage = Math.max(1, Math.min(parseInt(qs.per_page, 10) || 30, 100));
  const fetchAll = String(qs.all).toLowerCase() === "true";
  const allRepos =
    String(qs.all_repos).toLowerCase() === "true" ||
    String(repo).toLowerCase() === "all";
  const reposLimit = qs.repos_limit
    ? Math.max(1, Math.min(parseInt(qs.repos_limit, 10), 200))
    : 30;
  const limit = qs.limit
    ? Math.max(1, Math.min(parseInt(qs.limit, 10), 5000))
    : undefined;

  const baseUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;

  try {
    const headers = {
      "User-Agent": "NetlifyFunction",
      Accept: "application/vnd.github+json",
    };
    const token =
      process.env.GITHUB_TOKEN ||
      process.env.GH_TOKEN ||
      process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;

    const fetchPage = async (p) => {
      const url = `${baseUrl}?per_page=${perPage}&page=${p}`;
      const response = await fetch(url, { headers });
      if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(`GitHub API error: ${response.status} ${text}`);
      }
      return response.json();
    };

    const listRepos = async () => {
      const results = [];
      let rp = 1;
      const listEndpoint = async (base) => {
        while (results.length < reposLimit) {
          const url = `${base}?per_page=${Math.min(
            100,
            reposLimit,
          )}&page=${rp}&type=owner&sort=updated`;
          const res = await fetch(url, { headers });
          if (!res.ok) return false;
          const arr = await res.json();
          if (!Array.isArray(arr) || arr.length === 0) break;
          results.push(...arr);
          if (arr.length < Math.min(100, reposLimit)) break;
          rp += 1;
        }
        return true;
      };

      const okUser = await listEndpoint(
        `https://api.github.com/users/${owner}/repos`,
      );
      if (!okUser) {
        await listEndpoint(`https://api.github.com/orgs/${owner}/repos`);
      }
      return results.slice(0, reposLimit);
    };

    let commits = [];
    if (allRepos) {
      const repos = await listRepos();
      for (const r of repos) {
        const commitsUrl = `https://api.github.com/repos/${owner}/${r.name}/commits?per_page=${perPage}&page=${page}`;
        const res = await fetch(commitsUrl, { headers });
        if (!res.ok) {
          continue;
        }
        const data = await res.json();
        if (!Array.isArray(data)) continue;
        for (const c of data) {
          commits.push({
            hash: c.sha?.substring(0, 7),
            author: c.commit?.author?.name || c.author?.login || "Unknown",
            date: c.commit?.author?.date,
            message: c.commit?.message,
            url: c.html_url,
            repository: `${owner}/${r.name}`,
          });
          if (limit && commits.length >= limit) break;
        }
        if (limit && commits.length >= limit) break;
      }
    } else {
      let allData = [];
      if (fetchAll) {
        let p = page;
        while (true) {
          const batch = await fetchPage(p);
          if (!Array.isArray(batch) || batch.length === 0) break;
          allData.push(...batch);
          if (limit && allData.length >= limit) {
            allData = allData.slice(0, limit);
            break;
          }
          if (batch.length < perPage) break;
          p += 1;
          if (!limit && allData.length >= 1000) break;
        }
      } else {
        allData = await fetchPage(page);
      }
      commits = (allData || []).map((commit) => ({
        hash: commit.sha?.substring(0, 7),
        author:
          commit.commit?.author?.name || commit.author?.login || "Unknown",
        date: commit.commit?.author?.date,
        message: commit.commit?.message,
        url: commit.html_url,
        repository: `${owner}/${repo}`,
      }));
    }

    return {
      statusCode: 200,
      body: JSON.stringify(commits),
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
      },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to retrieve commits",
        details: err.message,
      }),
      headers: { "Content-Type": "application/json" },
    };
  }
};
