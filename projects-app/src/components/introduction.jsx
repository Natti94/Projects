function Introduction() {
  const isProd = import.meta.env.PROD;

  const projectsLink = {
    tibiaOptimizer_URL: isProd
      ? "/api/getAsset?asset=tibiaOptimizer_URL"
      : import.meta.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_URL,
    chat_URL: isProd
      ? "/api/getAsset?asset=chat_URL"
      : import.meta.env.VITE_CLOUDINARY_CHAT_URL,
  };

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
        <>
          <h2 className="project-preview-title">Projects</h2>
          <div className="projects-cards-flex">
            <div
              className="tibia-optimizer-project-card"
              onClick={() =>
                window.open(
                  projectsLink.tibiaOptimizer_URL,
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

            <div
              className="chat-card"
              onClick={() =>
                window.open(projectsLink.chat_URL, "_blank", "noreferrer")
              }
            >
              <div className="chat-image-hover">
                <img
                  src="https://placehold.co/340x200/EEE/AAA?text=Weather+Forecast+BG"
                  alt="Weather Forecast Background"
                  className="chat-background-img"
                />
                <div className="chat-center-stack">
                  <img
                    src="https://placehold.co/100x40/285bb5/fff?text=Weather+Forecast"
                    alt="Weather Forecast Title"
                    className="chat-title-img"
                  />
                  <img
                    src="https://placehold.co/50x50/444/fff?text=Icon"
                    alt="Weather Forecast Icon"
                    className="chat-icon-img"
                  />
                </div>
              </div>
            </div>

            <div
              className="chat-card"
              onClick={() =>
                window.open(
                  "https://example.com/chatify",
                  "_blank",
                  "noreferrer"
                )
              }
            >
              <div className="chat-image-hover">
                <img
                  src="https://placehold.co/340x200/EEE/AAA?text=Weather+Forecast+BG"
                  alt="Weather Forecast Background"
                  className="chat-background-img"
                />
                <div className="chat-center-stack">
                  <img
                    src="https://placehold.co/100x40/285bb5/fff?text=Weather+Forecast"
                    alt="Weather Forecast Title"
                    className="chat-title-img"
                  />
                  <img
                    src="https://placehold.co/50x50/444/fff?text=Icon"
                    alt="Weather Forecast Icon"
                    className="chat-icon-img"
                  />
                </div>
              </div>
            </div>

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
      </div>
    </div>
  );
}

export default Introduction;
