import { useState } from "react";
import { Link } from "react-router-dom";

const isProd = import.meta.env.PROD;

const profileLinks = {
  cv_link: isProd
    ? "/api/getAsset?asset=cv_link"
    : import.meta.env.VITE_CLOUDINARY_CV_LINK,
  gitHub_link: isProd
    ? "/api/getAsset?asset=gitHub_link"
    : import.meta.env.VITE_CLOUDINARY_GITHUB_LINK,
  linkedIn_link: isProd
    ? "/api/getAsset?asset=linkedIn_link"
    : import.meta.env.VITE_CLOUDINARY_LINKEDIN_LINK,
};

const navIcons = {
  profile_icon: isProd
    ? "/api/getAsset?asset=profile_icon"
    : import.meta.env.VITE_CLOUDINARY_PROFILE_ICON,
  CV_icon: isProd
    ? "/api/getAsset?asset=CV_icon"
    : import.meta.env.VITE_CLOUDINARY_CV_ICON,
  gitHub_icon: isProd
    ? "/api/getAsset?asset=gitHub_icon"
    : import.meta.env.VITE_CLOUDINARY_GITHUB_ICON,
  linkedIn_icon: isProd
    ? "/api/getAsset?asset=linkedIn_icon"
    : import.meta.env.VITE_CLOUDINARY_LINKEDIN_ICON,
};

function Nav() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <nav className={`side-nav ${collapsed ? "collapsed" : "uncollapsed"}`}>
      <button
        className="nav-toggle-btn"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
      >
        {collapsed ? "⮞" : "⮜"}
      </button>
      <ul className={collapsed ? "nav-list-collapsed" : "nav-list-uncollapsed"}>
        <li>
          <Link to="/" className="nav-link-flex">
            <span className="nav-icon">
              <img
                src={navIcons.profile_icon}
                alt="Profile Icon"
                className="nav-icon"
              />
            </span>
            {!collapsed && <span className="nav-link-text">Introduction</span>}
          </Link>
        </li>
        <li>
          <a
            className="nav-link-flex"
            onClick={() =>
              window.open(profileLinks.cv_link, "_blank", "noreferrer")
            }
            tabIndex={0}
            role="button"
          >
            <span className="nav-icon">
              <img src={navIcons.CV_icon} alt="CV Icon" className="nav-icon" />
            </span>
            {!collapsed && <span className="nav-link-text">CV</span>}
          </a>
        </li>
        <li>
          <a
            className="nav-link-flex"
            onClick={() =>
              window.open(profileLinks.gitHub_link, "_blank", "noreferrer")
            }
            tabIndex={0}
            role="button"
          >
            <span className="nav-icon">
              <img
                src={navIcons.gitHub_icon}
                alt="GitHub Icon"
                className="nav-icon"
              />
            </span>
            {!collapsed && <span className="nav-link-text">GitHub</span>}
          </a>
        </li>
        <li>
          <a
            className="nav-link-flex"
            onClick={() =>
              window.open(profileLinks.linkedIn_link, "_blank", "noreferrer")
            }
            tabIndex={0}
            role="button"
          >
            <span className="nav-icon">
              <img
                src={navIcons.linkedIn_icon}
                alt="LinkedIn Icon"
                className="nav-icon"
              />
            </span>
            {!collapsed && <span className="nav-link-text">LinkedIn</span>}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
