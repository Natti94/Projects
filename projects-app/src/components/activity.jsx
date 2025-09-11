import { useEffect, useState } from "react";

function Activity() {
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
    <div className="activity">
      <div className="activity__navigation">
        {current > 0 && (
          <button
            onClick={goLeft}
            className="button--prev"
            aria-label="Previous commit"
          >
            🢀
          </button>
        )}
        {commits.length > 0 && (
          <div className="activity__commit activity__commit--single">
            <span className="activity__label">ACTIVITY FEED</span>
            <span className="activity__message">
              Commit message: {commits[current].message}
            </span>
            <div className="activity__meta">
              by {commits[current].author} - {commits[current].date}
            </div>
          </div>
        )}
        {current < commits.length - 1 && (
          <button
            onClick={goRight}
            className="button--next"
            aria-label="Next commit"
          >
            🢂
          </button>
        )}
      </div>
    </div>
  );
}

export default Activity;
