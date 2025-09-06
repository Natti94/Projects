import { useEffect, useState } from "react";

function Panel() {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    fetch("/api/commits")
      .then((res) => res.json())
      .then(setCommits);
  }, []);

  return (
    <div className="panel-container">
      <h2>Work Flow</h2>
      <h3>Repository Commits:</h3>
      <ul>
        {commits.map((c) => (
          <li key={c.hash}>
            <strong>{c.message}</strong>
            <div>
              by {c.author} - {c.date}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Panel;
