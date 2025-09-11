function Projects() {
  const isProd = import.meta.env.PROD;

  const assets = {
    tibiaOptimizer_background: isProd
      ? "/api/assets?asset=tibiaOptimizer_background"
      : import.meta.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_BACKGROUND,
    chat_background: isProd
      ? "/api/assets?asset=chat_background"
      : import.meta.env.VITE_CLOUDINARY_CHAT_BACKGROUND,
    tibiaOptimizer_link: isProd
      ? "/api/assets?asset=tibiaOptimizer_link"
      : import.meta.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_LINK,
    chat_link: isProd
      ? "/api/assets?asset=chat_link"
      : import.meta.env.VITE_CLOUDINARY_CHAT_LINK,
  };

  return (
    <div className="projects">
      <h2>PROJECTS</h2>
      <div className="projects__grid">
        <div
          className="project-card project-card--tibia"
          onClick={() =>
            window.open(assets.tibiaOptimizer_link, "_blank", "noreferrer")
          }
        >
          <h2 className="project-card__title">Tibia Optimizer</h2>
          <div className="project-card__image-wrapper">
            <img
              src={assets.tibiaOptimizer_background}
              alt="Tibia Optimizer Background"
              className="project-card__image"
            />
          </div>
        </div>

        <div
          className="project-card project-card--chat"
          onClick={() =>
            window.open(assets.chat_link, "_blank", "noreferrer")
          }
        >
          <h2 className="project-card__title">Chatify</h2>
          <div className="project-card__image-wrapper">
            <img
              src={assets.chat_background}
              alt="Chat Background"
              className="project-card__image"
            />
          </div>
        </div>

        <div
          className="project-card project-card--weather"
          onClick={() =>
            window.open(
              "https://example.com/weather-forecast",
              "_blank",
              "noreferrer"
            )
          }
        >
          <h2 className="project-card__title">Weather Forecast</h2>
          <div className="project-card__image-wrapper">
            <img
              src="https://placehold.co/340x200/EEE/AAA?text=Weather+Forecast+BG"
              alt="Weather Forecast Background"
              className="project-card__image"
            />
          </div>
        </div>

        <div
          className="project-card project-card--quiz-plu"
          onClick={() =>
            window.open(
              "https://example.com/quiz-plu",
              "_blank",
              "noreferrer"
            )
          }
        >
          <h2 className="project-card__title">Quiz Plu</h2>
          <div className="project-card__image-wrapper">
            <img
              src="https://placehold.co/340x200/EEE/AAA?text=Quiz+Plu+BG"
              alt="Quiz Plu Background"
              className="project-card__image"
            />
          </div>
        </div>

        <div
          className="project-card project-card--quiz-apt"
          onClick={() =>
            window.open(
              "https://example.com/quiz-apt",
              "_blank",
              "noreferrer"
            )
          }
        >
          <h2 className="project-card__title">Quiz Apt</h2>
          <div className="project-card__image-wrapper">
            <img
              src="https://placehold.co/340x200/EEE/AAA?text=Quiz+Apt+BG"
              alt="Quiz Apt Background"
              className="project-card__image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
