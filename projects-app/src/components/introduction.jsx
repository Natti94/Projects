function Introduction() {
  const isProd = import.meta.env.PROD;

  const assets = {
    mern_image: isProd
      ? "/api/assets?assets=mern_image"
      : import.meta.env.VITE_CLOUDINARY_MERN_IMAGE,
    tibiaOptimizer_background: isProd
      ? "/api/assets?assets=tibiaOptimizer_background"
      : import.meta.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_BACKGROUND,
    chat_background: isProd
      ? "/api/assets?assets=chat_background"
      : import.meta.env.VITE_CLOUDINARY_CHAT_BACKGROUND,
    tibiaOptimizer_link: isProd
      ? "/api/assets?assets=tibiaOptimizer_link"
      : import.meta.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_LINK,
    chat_link: isProd
      ? "/api/assets?assets=chat_link"
      : import.meta.env.VITE_CLOUDINARY_CHAT_LINK,
  };

  return (
    <div className="introduction">
      <div className="introduction__section">
        <h2>PROFILE</h2>
        <div className="introduction__description">
          Hello! My name is Natnael and I'm a Fullstack Developer passionate
          about understanding the real needs of end users. I enjoy exploring
          unique challenges and finding niche opportunities where technology can
          make a difference. My main goal is to provide valuable services by
          identifying gaps and creating solutions that truly help people.
          <br />
          <br />
          Projects like{" "}
          <strong
            className="link--highlight"
            title="Tibia Optimizer"
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
        </div>
        <h2>SKILLS</h2>
        <img
          src={assets.mern_image}
          alt="MERN Stack"
          className="skills__image"
        />
        <div className="introduction__description">
          <p>
            My main tech stack is the MERN stack (MongoDB, Express.js, React.js,
            Node.js). Upon that foundation, I have experience with applying
            various related security aspects such as:
          </p>
          <ul>
            <li>Authentication and Authorization</li>
            <li>Data Validation and Input Sanitization (e.g., DOMPurify)</li>
            <li>
              Session and Token Management (removing sensitive data from
              storage)
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
      </div>
    </div>
  );
}

export default Introduction;
