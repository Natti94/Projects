function Introduction() {
  const isProd = import.meta.env.PROD;

  const assets = {
    mern_image: isProd
      ? "/api/assets?asset=mern_image"
      : import.meta.env.VITE_CLOUDINARY_MERN_IMAGE,
  };

  return (
    <div className="introduction">
      <div className="introduction__section">
        <h2>PROFILE</h2>
        <div className="introduction__description">
          Hello! My name is Natnael, and I'm currently a student on my way to becoming a Fullstack Developer specializing in web security. I'm passionate about understanding the real needs of end users and enjoy exploring unique challenges and finding niche opportunities where technology can make a difference. My main goal is to provide valuable services by identifying gaps and creating solutions that truly help people.
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
          are examples of my approach—discovering specific needs and building applications that address them. I am always looking for new ideas and ways to deliver meaningful improvements, whether by optimizing user experiences or developing entirely new tools.
        </div>
        <h2>SKILLS</h2>
        <img
          src={assets.mern_image}
          alt="MERN Stack"
          className="skills__image"
        />
        <div className="introduction__description">
          <p className="skills-intro">
            My main tech stack is the <b>MERN</b> stack (MongoDB, Express.js, React.js {"(JavaScript, HTML & CSS)"}, Node.js).<br />
            I focus on applying modern security best practices:
          </p>
          <div className="skills-list-box">
            <ul className="skills-list">
              <li><span className="skills-list__icon">✘</span> <b>Authentication</b> &amp; <b>Authorization</b></li>
              <li><span className="skills-list__icon">✘</span> Data Validation &amp; Input Sanitization</li>
              <li><span className="skills-list__icon">✘</span> Session &amp; Token Management</li>
              <li><span className="skills-list__icon">✘</span> <b>JWT</b>-based Authentication</li>
              <li><span className="skills-list__icon">✘</span> Secure API Development</li>
              <li><span className="skills-list__icon">✘</span> Use of Security Middleware</li>
              <li><span className="skills-list__icon">✘</span> <b>HTTPS</b> &amp; Secure Communication</li>
              <li><span className="skills-list__icon">✘</span> <b>CSRF</b> Protection</li>
              <li><span className="skills-list__icon">✘</span> Database Security</li>
              <li><span className="skills-list__icon">✘</span> Error Handling &amp; Logging</li>
              <li><span className="skills-list__icon">✘</span> Environment Variable Management</li>
              <li><span className="skills-list__icon">✘</span> Secure Port &amp; Cookie Configurations</li>
              <li><span className="skills-list__icon">✘</span> Regular Security Updates</li>
              <li><span className="skills-list__icon">✘</span> Secure Package Management &amp; Dependency Auditing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
