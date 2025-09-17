import { useEffect, useState } from "react";

function formatRelativeTime(dateString) {
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams({
      all_repos: "true",
      per_page: "20",
      limit: "100",
    });
    setLoading(true);
    setError("");
    fetch(`/api/commits?${params.toString()}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const sorted = Array.isArray(data)
          ? data
              .filter((c) => c && c.date)
              .sort((a, b) => new Date(b.date) - new Date(a.date))
          : [];
        setCommits(sorted);
        setCurrent(0);
      })
      .catch((e) => setError(e.message || "Failed to load commits"))
      .finally(() => setLoading(false));
  }, []);

  const goLeft = () => setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  const goRight = () =>
    setCurrent((prev) => (prev < commits.length - 1 ? prev + 1 : prev));

  return (
    <div className="activity">
      <div className="activity__navigation">
        {loading && (
          <div className="activity__commit activity__commit--single">
            <span className="activity__label">ACTIVITY FEED</span>
            <span className="activity__message">Loading commits…</span>
          </div>
        )}
        {!loading && error && (
          <div className="activity__commit activity__commit--single">
            <span className="activity__label">ACTIVITY FEED</span>
            <span className="activity__message">{error}</span>
          </div>
        )}
        {current > 0 && (
          <button
            onClick={goLeft}
            className="button--prev"
            aria-label="Previous commit"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
        )}
        {!loading && !error && commits.length > 0 && (
          <div className="activity__commit activity__commit--single">
            <span className="activity__label">ACTIVITY FEED</span>
            <span className="activity__message">
              git commit -m "{commits[current].message}"
            </span>
            <div className="activity__meta">
              by {commits[current].author} · {commits[current].repository} ·{" "}
              {formatRelativeTime(commits[current].date)}
            </div>
          </div>
        )}
        {!loading && !error && commits.length === 0 && (
          <div className="activity__commit activity__commit--single">
            <span className="activity__label">ACTIVITY FEED</span>
            <span className="activity__message">No recent commits found</span>
          </div>
        )}
        {current < commits.length - 1 && (
          <button
            onClick={goRight}
            className="button--next"
            aria-label="Next commit"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default Activity;
