import { useState } from "react";

function Projects() {
  const [intro, setIntro] = useState(true);

  const projectsLink = {
    tibiaOptimizer: "https://tibiaoptimizer.netlify.app/",
  };

  const isProd = import.meta.env.PROD;
  const assets = {
    tibiaOptimizer_title_small: isProd
      ? "/api/getAsset?asset=tibiaOptimizer_title_small"
      : import.meta.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_TITLE_SMALL,
    tibiaOptimizer_icon: isProd
      ? "/api/getAsset?asset=tibiaOptimizer"
      : import.meta.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_ICON,
    tibiaOptimizer_background: isProd
      ? "/api/getAsset?asset=tibiaOptimizer_background"
      : import.meta.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_BACKGROUND,
  };

  return (
    <div>
      <div className="profile-preview-container">
        <h2>Profile</h2>
        <p className="profile-introduction">
          Fullstack Developer specializing in web security. I have always had a
          great interest in programming and technology since I was young, and
          now I am in my final year of studies. I like to focus on areas where I
          see a real need, and right now I am doing that through a project for
          the game Tibia – with a focus on <strong>Optimization</strong>.{" "}
          <p>
            This project aims to improve the gaming experience by optimizing
            performance and user interface. <br />
            <br />
            See the project and its details below.
          </p>
        </p>
      </div>
      <div className="project-preview-container">
        {intro ? (
          <>
            <h1 className="project-preview-title">Projects</h1>
            <p className="project-preview-desc">
              Here you can find a collection of my work.
            </p>
            <button
              className="project-preview-btn"
              onClick={() => setIntro(false)}
            >
              See Projects
            </button>
          </>
        ) : (
          <>
            <h2 className="project-list-title">My Projects</h2>
            <div className="projects-cards-flex">
              {/* Tibia Optimizer Card */}
              <div
                className="tibia-optimizer-project-card"
                onClick={() =>
                  window.open(
                    projectsLink.tibiaOptimizer,
                    "_blank",
                    "noreferrer"
                  )
                }
              >
                <div className="tibia-optimizer-image-hover">
                  <img
                    src={assets.tibiaOptimizer_background}
                    alt="Tibia Optimizer Background"
                    className="tibia-optimizer-background-img"
                  />
                  <div className="tibia-optimizer-center-stack">
                    <img
                      src={assets.tibiaOptimizer_title_small}
                      alt="Tibia Optimizer Title Small"
                      className="tibia-optimizer-title-img"
                    />
                    <img
                      src={assets.tibiaOptimizer_icon}
                      alt="Tibia Optimizer Icon"
                      className="tibia-optimizer-icon-img"
                    />
                  </div>
                </div>
              </div>

              {/* Weather Forecast Card */}

              <div
                className="weather-forecast-card"
                onClick={() =>
                  window.open(
                    "https://example.com/weather-forecast",
                    "_blank",
                    "noreferrer"
                  )
                }
              >
                <div className="weather-forecast-image-hover">
                  <img
                    src="https://placehold.co/340x200/EEE/AAA?text=Weather+Forecast+BG"
                    alt="Weather Forecast Background"
                    className="weather-forecast-background-img"
                  />
                  <div className="weather-forecast-center-stack">
                    <img
                      src="https://placehold.co/100x40/285bb5/fff?text=Weather+Forecast"
                      alt="Weather Forecast Title"
                      className="weather-forecast-title-img"
                    />
                    <img
                      src="https://placehold.co/50x50/444/fff?text=Icon"
                      alt="Weather Forecast Icon"
                      className="weather-forecast-icon-img"
                    />
                  </div>
                </div>
              </div>

              {/* Quiz Plu Card */}

              <div
                className="quiz-plu-card"
                onClick={() =>
                  window.open(
                    "https://example.com/quiz-plu",
                    "_blank",
                    "noreferrer"
                  )
                }
              >
                <div className="quiz-plu-image-hover">
                  <img
                    src="https://placehold.co/340x200/EEE/AAA?text=Quiz+Plu+BG"
                    alt="Quiz Plu Background"
                    className="quiz-plu-background-img"
                  />
                  <div className="quiz-plu-center-stack">
                    <img
                      src="https://placehold.co/100x40/285bb5/fff?text=Quiz+Plu"
                      alt="Quiz Plu Title"
                      className="quiz-plu-title-img"
                    />
                    <img
                      src="https://placehold.co/50x50/444/fff?text=Icon"
                      alt="Quiz Plu Icon"
                      className="quiz-plu-icon-img"
                    />
                  </div>
                </div>
              </div>

              {/* Quiz Apt Card */}

              <div
                className="quiz-apt-card"
                onClick={() =>
                  window.open(
                    "https://example.com/quiz-apt",
                    "_blank",
                    "noreferrer"
                  )
                }
              >
                <div className="quiz-apt-image-hover">
                  <img
                    src="https://placehold.co/340x200/EEE/AAA?text=Quiz+Apt+BG"
                    alt="Quiz Apt Background"
                    className="quiz-apt-background-img"
                  />
                  <div className="quiz-apt-center-stack">
                    <img
                      src="https://placehold.co/100x40/285bb5/fff?text=Quiz+Apt"
                      alt="Quiz Apt Title"
                      className="quiz-apt-title-img"
                    />
                    <img
                      src="https://placehold.co/50x50/444/fff?text=Icon"
                      alt="Quiz Apt Icon"
                      className="quiz-apt-icon-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Projects;
