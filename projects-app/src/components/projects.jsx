import { useState } from "react";

function Projects() {
  const [intro, setIntro] = useState(true);

  const isProd = import.meta.env.PROD;
  const projectsIcon = {
    tibiaOptimizer: isProd
      ? "/api/getAsset?asset=tibiaOptimizer"
      : import.meta.env.VITE_CLOUDINARY_TIBIA_ICON,
  };

  return (
    <div>
      <div className="profile-preview-container">
        <h2 className="profile-name">Natti</h2>
      </div>
      <div className="project-preview-container">
        {intro ? (
          <>
            <button
              className="project-preview-btn"
              onClick={() => setIntro(false)}
            >
              See Projects
            </button>
            <h1 className="project-preview-title">Welcome to My Projects</h1>
            <p className="project-preview-desc">
              Here you can find a collection of my work.
            </p>
          </>
        ) : (
          <>
            <h2 className="project-list-title">My Projects</h2>
            <ul className="project-list">
              <img src={projectsIcon.tibiaOptimizer} alt="Tibia Optimizer" />
              <li>Project 2</li>
              <li>Project 3</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Projects;
