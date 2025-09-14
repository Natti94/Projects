var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/getActivities.js
var getActivities_exports = {};
__export(getActivities_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(getActivities_exports);
async function handler(event) {
  const owner = "Natti94";
  const repo = "Projects";
  const per_page = 10;
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
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=getActivities.js.map
