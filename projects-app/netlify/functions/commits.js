
const { execSync } = require("child_process");

exports.handler = async (event) => {
	try {
		const log = execSync('git log -10 --pretty=format:"%h|%an|%ar|%s"').toString();
		const commits = log.split("\n").map((line) => {
			const [hash, author, date, message] = line.split("|");
			return { hash, author, date, message };
		});
		return {
			statusCode: 200,
			body: JSON.stringify(commits),
			headers: {
				'Content-Type': 'application/json',
			},
		};
	} catch (err) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: "Failed to retrieve commits" }),
		};
	}
};
