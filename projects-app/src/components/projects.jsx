function Projects() {
  const isProd = import.meta.env.PROD;

  const assets = {
    projects_background: isProd
      ? "/api/assets?asset=projects_background"
      : import.meta.env.VITE_CLOUDINARY_PROJECTS_BACKGROUND,
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

  const projectData = [
    { 
      name: "Tibia Optimizer", 
      description: "A tool to optimize gameplay strategies for Tibia players.", 
      image: assets.tibiaOptimizer_background, 
      link: assets.tibiaOptimizer_link 
    },
    { 
      name: "Chatify", 
      description: "A real-time chat application with modern features.", 
      image: assets.chat_background, 
      link: assets.chat_link 
    },
    { 
      name: "Weather Forecast", 
      description: "A web app providing real-time weather updates.", 
      image: "https://placehold.co/200x200/2c2c2c/7edc8a?text=Weather", 
      link: "https://example.com/weather-forecast" 
    },
    { 
      name: "Quiz Plu", 
      description: "An engaging quiz platform with multiple categories.", 
      image: "https://placehold.co/200x200/2c2c2c/7edc8a?text=Quiz+Plu", 
      link: "https://example.com/quiz-plu" 
    },
    { 
      name: "Quiz Apt", 
      description: "A quiz application tailored for aptitude testing.", 
      image: "https://placehold.co/200x200/2c2c2c/7edc8a?text=Quiz+Apt", 
      link: "https://example.com/quiz-apt" 
    },
    { 
      name: "Refrigerator", 
      description: "A project simulating a smart refrigerator system.", 
      image: "https://placehold.co/200x200/2c2c2c/7edc8a?text=Fridge", 
      link: "https://example.com/refrigerator" 
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