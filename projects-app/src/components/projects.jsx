function Projects() {
  const isProd = import.meta.env.PROD;

  const assets = {
    tibiaOptimizer_card: isProd
      ? "/api/assets?asset=tibiaOptimizer_card"
      : import.meta.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_CARD,
    chat_card: isProd
      ? "/api/assets?asset=chat_card"
      : import.meta.env.VITE_CLOUDINARY_CHAT_CARD,
    quiz_card: isProd
      ? "/api/assets?asset=quiz_card"
      : import.meta.env.VITE_CLOUDINARY_QUIZ_CARD,
    weather_card: isProd
      ? "/api/assets?asset=weather_card"
      : import.meta.env.VITE_CLOUDINARY_WEATHER_CARD,
    tibiaOptimizer_link: isProd
      ? "/api/assets?asset=tibiaOptimizer_link"
      : import.meta.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_LINK,
    chat_link: isProd
      ? "/api/assets?asset=chat_link"
      : import.meta.env.VITE_CLOUDINARY_CHAT_LINK,
    quiz_link: isProd
      ? "/api/assets?asset=quiz_link"
      : import.meta.env.VITE_CLOUDINARY_QUIZ_LINK,
  };

  const projectData = [
    {
      name: "Tibia Optimizer",
      description: "A tool to optimize gameplay strategies for Tibia players.",
      image: assets.tibiaOptimizer_card,
      link: assets.tibiaOptimizer_link,
    },
    {
      name: "Chatify",
      description: "A real-time chat application with modern features.",
      image: assets.chat_card,
      link: assets.chat_link,
    },
    {
      name: "Quiz App",
      description: "A web app providing quizzes in several subjects.",
      image: assets.quiz_card,
      link: assets.quiz_link,
    },

    {
      name: "Weather App",
      description: "A project providing weather forecasts and information.",
      image: assets.weather_card,
      link: assets.weather_link,
    },
  ];

  return (
    <div className="projects">
      <h2>PROJECTS</h2>
      <div className="projects__grid">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => window.open(project.link, "_blank", "noreferrer")}
          >
            <div className="project-card__image-wrapper">
              <img
                src={project.image}
                alt={`${project.name} Background`}
                className="project-card__image"
              />
            </div>
            <div className="project-card__overlay">
              <h2 className="project-card__title">{project.name}</h2>
              <p className="project-card__description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
