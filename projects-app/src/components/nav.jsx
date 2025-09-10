const isProd = import.meta.env.PROD;
const assets = {
  cv_link: isProd
    ? "/api/getAsset?asset=cv_link"
    : import.meta.env.VITE_CLOUDINARY_CV_LINK,
  gitHub_link: isProd
    ? "/api/getAsset?asset=gitHub_link"
    : import.meta.env.VITE_CLOUDINARY_GITHUB_LINK,
  linkedIn_link: isProd
    ? "/api/getAsset?asset=linkedIn_link"
    : import.meta.env.VITE_CLOUDINARY_LINKEDIN_LINK,
  cv_icon: isProd
    ? "/api/getAsset?asset=cv_icon"
    : import.meta.env.VITE_CLOUDINARY_CV_ICON,
  gitHub_icon: isProd
    ? "/api/getAsset?asset=gitHub_icon"
    : import.meta.env.VITE_CLOUDINARY_GITHUB_ICON,
  linkedIn_icon: isProd
    ? "/api/getAsset?asset=linkedIn_icon"
    : import.meta.env.VITE_CLOUDINARY_LINKEDIN_ICON,
};

function Nav() {
  return (
    <div className="dashboard-nav">
      <div className="nav-links">
        <button
          onClick={() => window.open(assets.cv_link, "_blank", "noreferrer")}
          aria-label="CV"
        >
          <img src={assets.cv_icon} alt="CV Icon" />
        </button>
        <button
          onClick={() =>
            window.open(assets.gitHub_link, "_blank", "noreferrer")
          }
          aria-label="GitHub"
        >
          <img src={assets.gitHub_icon} alt="GitHub Icon" />
        </button>
        <button
          onClick={() =>
            window.open(assets.linkedIn_link, "_blank", "noreferrer")
          }
          aria-label="LinkedIn"
        >
          <img src={assets.linkedIn_icon} alt="LinkedIn Icon" />
        </button>
      </div>
    </div>
  );
}

export default Nav;
