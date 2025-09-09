import { useEffect, useState } from "react";

function Panel() {
  const [commits, setCommits] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("/api/commits")
      .then((res) => res.json())
      .then(setCommits);
  }, []);

  const goLeft = () => setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  const goRight = () =>
    setCurrent((prev) => (prev < commits.length - 1 ? prev + 1 : prev));

  return (
    <div className="panel-container">
      <div className="panel-commits-nav-row">
        {current > 0 && (
          <button
            onClick={goLeft}
            className="panel-commit-nav-btn panel-commit-nav-btn-left"
            aria-label="Previous commit"
          >
            &#60;
          </button>
        )}
        {commits.length > 0 && (
          <div className="panel-commit-item panel-commit-item-single">
            <span className="panel-commit-label">Commit message:</span>
            <span className="panel-commit-message">
              {commits[current].message}
            </span>
            <div className="panel-commit-meta">
              by {commits[current].author} - {commits[current].date}
            </div>
          </div>
        )}
        {current < commits.length - 1 && (
          <button
            onClick={goRight}
            className="panel-commit-nav-btn panel-commit-nav-btn-right"
            aria-label="Next commit"
          >
            &#62;
          </button>
        )}
      </div>
    </div>
  );
}

export default Panel;
