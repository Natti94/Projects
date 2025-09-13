import { useEffect, useState } from "react";

function formatRelativeTime(dateString) {
  // If already relative (e.g., '2 days ago'), just return
  if (!dateString || /ago$/.test(dateString)) return dateString;
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);
  if (isNaN(diff)) return dateString;
  if (diff < 60) return `${diff} second${diff !== 1 ? "s" : ""} ago`;
  const min = Math.floor(diff / 60);
  if (min < 60) return `${min} minute${min !== 1 ? "s" : ""} ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr} hour${hr !== 1 ? "s" : ""} ago`;
  const day = Math.floor(hr / 24);
  if (day < 30) return `${day} day${day !== 1 ? "s" : ""} ago`;
  const mo = Math.floor(day / 30);
  if (mo < 12) return `${mo} month${mo !== 1 ? "s" : ""} ago`;
  const yr = Math.floor(mo / 12);
  return `${yr} year${yr !== 1 ? "s" : ""} ago`;
}

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
            {commits[current].message}
            </span>
            <div className="activity__meta">
              by {commits[current].author} -{" "}
              {formatRelativeTime(commits[current].date)}
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
