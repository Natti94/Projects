import React from "react";

function Nav() {
  const isProd = import.meta.env.PROD;

  const assets = {
    cv_link: isProd
      ? "/api/assets?asset=cv_link"
      : import.meta.env.VITE_CLOUDINARY_CV_LINK,
    linkedIn_link: isProd
      ? "/api/assets?asset=linkedIn_link"
      : import.meta.env.VITE_CLOUDINARY_LINKEDIN_LINK,
    mail_link: isProd
      ? "/api/assets?asset=mail_link"
      : import.meta.env.VITE_CLOUDINARY_MAIL_LINK,
    gitHub_link: isProd
      ? "/api/assets?asset=gitHub_link"
      : import.meta.env.VITE_CLOUDINARY_GITHUB_LINK,
    discord_link: isProd
      ? "/api/assets?asset=discord_link"
      : import.meta.env.VITE_CLOUDINARY_DISCORD_LINK,
    cv_icon: isProd
      ? "/api/assets?asset=cv_icon"
      : import.meta.env.VITE_CLOUDINARY_CV_ICON,
    linkedIn_icon: isProd
      ? "/api/assets?asset=linkedIn_icon"
      : import.meta.env.VITE_CLOUDINARY_LINKEDIN_ICON,
    mail_icon: isProd
      ? "/api/assets?asset=mail_icon"
      : import.meta.env.VITE_CLOUDINARY_MAIL_ICON,
    gitHub_icon: isProd
      ? "/api/assets?asset=gitHub_icon"
      : import.meta.env.VITE_CLOUDINARY_GITHUB_ICON,
    discord_icon: isProd
      ? "/api/assets?asset=discord_icon"
      : import.meta.env.VITE_CLOUDINARY_DISCORD_ICON,
  };

  return (
    <div className="nav">
      <div className="nav__links">
        <button
          onClick={() => window.open(assets.cv_link, "_blank", "noreferrer")}
          aria-label="CV"
          title="CV"
        >
          <img src={assets.cv_icon} alt="CV Icon" />
        </button>
        <button
          onClick={() =>
            window.open(assets.linkedIn_link, "_blank", "noreferrer")
          }
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <img src={assets.linkedIn_icon} alt="LinkedIn Icon" />
        </button>
        <button
          onClick={() => window.open(assets.mail_link, "_blank", "noreferrer")}
          aria-label="Mail"
          title="Mail"
        >
          <img src={assets.mail_icon} alt="Mail Icon" />
        </button>
        <button
          onClick={() =>
            window.open(assets.gitHub_link, "_blank", "noreferrer")
          }
          aria-label="GitHub"
          title="GitHub"
        >
          <img src={assets.gitHub_icon} alt="GitHub Icon" />
        </button>
        <button
          onClick={() =>
            window.open(assets.discord_link, "_blank", "noreferrer")
          }
          aria-label="Discord"
          title="Discord"
        >
          <img src={assets.discord_icon} alt="Discord Icon" />
        </button>
      </div>
    </div>
  );
}

export default Nav;
