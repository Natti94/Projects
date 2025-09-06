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
      <h3>Latest commits:</h3>
      <ul className="panel-commits-list">
        {commits.map((c) => (
          <li className="panel-commit-item" key={c.hash}>
            <span className="panel-commit-label">Commit message:</span>
            <span className="panel-commit-message">{c.message}</span>
            <div className="panel-commit-meta">
              by {c.author} - {c.date}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Panel;
