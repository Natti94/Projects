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
    <div className="introduction-container">
      <div className="profile-section">
        <h2>Who am I?</h2>
        <div className="profile-description">
          Hello! My name is Natnael and I'm a Fullstack Developer passionate
          about understanding the real needs of end users. I enjoy exploring
          unique challenges and finding niche opportunities where technology can
          make a difference. My main goal is to provide valuable services by
          identifying gaps and creating solutions that truly help people.
          <br />
          <br />
          Projects like{" "}
          <strong
            className="link-highlight"
            onClick={() =>
              window.open(assets.tibiaOptimizer_link, "_blank", "noreferrer")
            }
          >
            Tibia Optimizer
          </strong>{" "}
          are examples of my approach — discovering specific needs and building
          applications that address them. I am always looking for new ideas and
          ways to deliver meaningful improvements, whether through optimizing
          user experiences or developing entirely new tools.
          <br />
          <br />
          Below you can find some of the projects I've worked on and other ideas
          in the pipeline.
        </div>
        <hr />
        <h2>Skills</h2>
        <img
          src={assets.mern_image}
          alt="MERN Stack"
          className="skills-image"
        />
        <p>
          My main tech stack is the MERN stack (MongoDB, Express.js, React.js,
          Node.js). Upon that foundation, I have experience with applying
          various related security aspects such as:
        </p>
        <ul>
          <li>Authentication and Authorization</li>
          <li>Data Validation and Input Sanitization (e.g., DOMPurify)</li>
          <li>
            Session and Token Management (removing sensitive data from storage)
          </li>
          <li>JWT-based Authentication</li>
          <li>Secure API Development</li>
          <li>Use of Security Middleware</li>
          <li>HTTPS and Secure Communication</li>
          <li>CSRF Protection (e.g., csrfToken)</li>
          <li>Database Security</li>
          <li>Error Handling and Logging</li>
          <li>Environment Variable Management</li>
          <li>Secure Port and Cookie Configurations</li>
          <li>Regular Security Updates</li>
          <li>Secure Package Management and Dependency Auditing</li>
        </ul>
      </div>
      <div className="projects-section">
        <hr />
        <h2>Projects</h2>
        <div className="projects-grid">
          <div
            className="project-card tibia-optimizer-card"
            onClick={() =>
              window.open(assets.tibiaOptimizer_link, "_blank", "noreferrer")
            }
          >
            <div className="project-image-hover">
              <img
                src={assets.tibiaOptimizer_background}
                alt="Tibia Optimizer Background"
                className="project-background-image"
              />
              <div className="project-text-overlay">
                <h2 className="project-title">Tibia Optimizer</h2>
              </div>
            </div>
          </div>

          <div
            className="project-card chat-card"
            onClick={() =>
              window.open(assets.chat_link, "_blank", "noreferrer")
            }
          >
            <div className="project-image-hover">
              <img
                src={assets.chat_background}
                alt="Chat Background"
                className="project-background-image"
              />
              <div className="project-text-overlay">
                <h2 className="project-title">Chatify</h2>
              </div>
            </div>
          </div>

          <div
            className="project-card weather-forecast-card"
            onClick={() =>
              window.open(
                "https://example.com/weather-forecast",
                "_blank",
                "noreferrer"
              )
            }
          >
            <div className="project-image-hover">
              <img
                src="https://placehold.co/340x200/EEE/AAA?text=Weather+Forecast+BG"
                alt="Weather Forecast Background"
                className="project-background-image"
              />
              <div className="project-text-overlay">
                <h2 className="project-title">Weather Forecast</h2>
              </div>
            </div>
          </div>

          <div
            className="project-card quiz-plu-card"
            onClick={() =>
              window.open(
                "https://example.com/quiz-plu",
                "_blank",
                "noreferrer"
              )
            }
          >
            <div className="project-image-hover">
              <img
                src="https://placehold.co/340x200/EEE/AAA?text=Quiz+Plu+BG"
                alt="Quiz Plu Background"
                className="project-background-image"
              />
              <div className="project-text-overlay">
                <h2 className="project-title">Quiz Plu</h2>
              </div>
            </div>
          </div>

          <div
            className="project-card quiz-apt-card"
            onClick={() =>
              window.open(
                "https://example.com/quiz-apt",
                "_blank",
                "noreferrer"
              )
            }
          >
            <div className="project-image-hover">
              <img
                src="https://placehold.co/340x200/EEE/AAA?text=Quiz+Apt+BG"
                alt="Quiz Apt Background"
                className="project-background-image"
              />
              <div className="project-text-overlay">
                <h2 className="project-title">Quiz Apt</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
