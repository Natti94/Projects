function Introduction() {
  const isProd = import.meta.env.PROD;

  const assets = {
    code_effect: isProd
      ? "/api/getAsset?asset=code_effect"
      : import.meta.env.VITE_CLOUDINARY_CODE_EFFECT_LINK,
    mern_image: isProd
      ? "/api/getAsset?asset=mern_image"
      : import.meta.env.VITE_CLOUDINARY_MERN_IMAGE,
    tibiaOptimizer_background: isProd
      ? "/api/getAsset?asset=tibiaOptimizer_background"
      : import.meta.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_BACKGROUND,
    tibiaOptimizer_link: isProd
      ? "/api/getAsset?asset=tibiaOptimizer_link"
      : import.meta.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_LINK,
    chat_background: isProd
      ? "/api/getAsset?asset=chat_background"
      : import.meta.env.VITE_CLOUDINARY_CHAT_BACKGROUND,
    chat_link: isProd
      ? "/api/getAsset?asset=chat_link"
      : import.meta.env.VITE_CLOUDINARY_CHAT_LINK,
  };

  return (
    <div>
      <div
        className="profile-preview-container"
        style={{ position: "relative", zIndex: 2 }}
      >
        <h2>Who am I?</h2>
        <div className="profile-introduction">
          Hello! My name is Natnael and I'm a Fullstack Developer passionate
          about understanding the real needs of end users. I enjoy exploring
          unique challenges and finding niche opportunities where technology can
          make a difference. My main goal is to provide valuable services by
          identifying gaps and creating solutions that truly help people.
          <br />
          <br />
          Projects like <strong>Tibia Optimizer</strong> are examples of my
          approach—discovering specific needs and building applications that
          address them. I am always looking for new ideas and ways to deliver
          meaningful improvements, whether through optimizing user experiences
          or developing entirely new tools.
          <br />
          <br />
          Below you can find some of the projects I've worked on and other ideas
          in the pipeline.
        </div>
        <hr color="lightgreen" />
        <h2>Skills</h2>
        <div>
        <img src={assets.mern_image} alt="MERN Stack" className="skills-image" />
        </div>
        <ul></ul>
      </div>
      <div
        className="project-preview-container"
        style={{ position: "relative", zIndex: 2 }}
      >
        <h2>Projects</h2>
        <div className="projects-cards-flex">
          <div
            className="tibia-optimizer-project-card"
            onClick={() =>
              window.open(assets.tibiaOptimizer_link, "_blank", "noreferrer")
            }
          >
            <div className="tibia-optimizer-image-hover">
              <img
                src={assets.tibiaOptimizer_background}
                alt="Tibia Optimizer Background"
                className="tibia-optimizer-background-img"
              />
              <div className="project-center-stack">
                <h2 className="project-title-text">Tibia Optimizer</h2>
              </div>
            </div>
          </div>

          <div
            className="chat-project-card"
            onClick={() =>
              window.open(assets.chat_link, "_blank", "noreferrer")
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
            className="weather-forecast-project-card"
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
              <div className="project-center-stack">
                <h2 className="project-title-text">Weather Forecast</h2>
              </div>
            </div>
          </div>

          <div
            className="quiz-plu-project-card"
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
            className="quiz-apt-project-card"
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
      </div>
    </div>
  );
}

export default Introduction;
