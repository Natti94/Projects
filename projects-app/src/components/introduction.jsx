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
    tibiaOptimizer_background: isProd
      ? "/api/getAsset?asset=tibiaOptimizer_background"
      : import.meta.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_BACKGROUND,
    chat_background: isProd
      ? "/api/getAsset?asset=chat_background"
      : import.meta.env.VITE_CLOUDINARY_CHAT_BACKGROUND,
  };

  return (
    <div>
      <div className="profile-preview-container">
        <h2>Profile</h2>
        <div className="profile-introduction">
          Fullstack Developer specializing in web security. I have always had a
          great interest in programming and technology since I was young, and
          now I am in my final year of studies. I like to focus on areas where I
          see a real need, and right now I am doing that through a project for
          the game Tibia – with a focus on <strong>Optimization</strong>.
          <br />
          <br />
          This project aims to improve the gaming experience by optimizing
          performance and user interface. I hope to achieve this by implementing
          various enhancements and features that will make the game more
          enjoyable for players and later partner up with other developers to
          expand the project.
          <br />
          <br />
          See the project and its details below.
        </div>
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
                <div className="project-center-stack">
                  <h2
                    className="project-title-text"
                    style={{ color: "orange" }}
                  >
                    Tibia Optimizer
                  </h2>
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
                  src={assets.chat_background}
                  alt="Chat Background"
                  className="chat-background-img"
                />
                <div className="project-center-stack">
                  <h2 className="project-title-text">Chatify</h2>
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
                <div className="project-center-stack">
                  <h2 className="project-title-text">Weather Forecast</h2>
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
                <div className="project-center-stack">
                  <h2 className="project-title-text">Quiz Plu</h2>
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
                <div className="project-center-stack">
                  <h2 className="project-title-text">Quiz Apt</h2>
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
