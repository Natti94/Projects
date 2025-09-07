import { useState } from "react";
import { Link } from "react-router-dom";

const isProd = import.meta.env.PROD;

const profileLinks = {
  gitHub_link: isProd
    ? "/api/getAsset?asset=gitHub_link"
    : import.meta.env.VITE_CLOUDINARY_GITHUB_LINK,
  linkedIn_link: isProd
    ? "/api/getAsset?asset=linkedIn_link"
    : import.meta.env.VITE_CLOUDINARY_LINKEDIN_LINK,
};

const navIcons = {
  gitHub_icon: isProd
    ? "/api/getAsset?asset=gitHub_icon"
    : import.meta.env.VITE_CLOUDINARY_GITHUB_ICON,
  linkedIn_icon: isProd
    ? "/api/getAsset?asset=linkedIn_icon"
    : import.meta.env.VITE_CLOUDINARY_LINKEDIN_ICON,
};

function Nav() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <nav className={`side-nav${collapsed ? " collapsed" : ""}`}>
      <button
        className="nav-toggle-btn"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "⮞" : "⮜"}
      </button>
      <ul>
        <li>
          <Link to="/">Introduction</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
      </ul>
      <hr />
      <div className="nav-icons-vertical">
        <img
          src={navIcons.gitHub_icon}
          alt="GitHub"
          className="nav-icon nav-icon-large"
          onClick={() =>
            window.open(profileLinks.gitHub_link, "_blank", "noreferrer")
          }
        />
        <img
          src={navIcons.linkedIn_icon}
          alt="LinkedIn"
          className="nav-icon nav-icon-small"
          onClick={() =>
            window.open(profileLinks.linkedIn_link, "_blank", "noreferrer")
          }
        />
      </div>
    </nav>
  );
}

export default Nav;
