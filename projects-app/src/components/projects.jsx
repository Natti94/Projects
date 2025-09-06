import { useState } from "react";

function Projects() {
  const [intro, setIntro] = useState(true);

  const isProd = import.meta.env.PROD;
  const assets = {
    tibiaOptimizer_icon: isProd
      ? "/api/getAsset?asset=tibiaOptimizer"
      : import.meta.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_ICON,
    tibiaOptimizer_background: isProd
      ? "/api/getAsset?asset=tibiaOptimizer_background"
      : import.meta.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_BACKGROUND,
  };

  const projectsLink = {
    tibiaOptimizer: "https://tibiaoptimizer.netlify.app/",
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
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                        }}
                    >
                        <div
                            className="project-image-hover"
                            style={{
                                position: "relative",
                                width: "180px",
                                minWidth: "180px",
                                marginRight: "24px",
                                transition: "transform 0.2s",
                            }}
                        >
                            <img
                                src={assets.tibiaOptimizer_background}
                                alt="Tibia Optimizer Background"
                                style={{
                                    width: "100%",
                                    height: "120px",
                                    objectFit: "cover",
                                    display: "block",
                                    borderRadius: "8px",
                                }}
                            />
                            <button
                                onClick={() =>
                                    window.open(projectsLink.tibiaOptimizer, "_blank")
                                }
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: 0,
                                }}
                            >
                                <img
                                    src={assets.tibiaOptimizer_icon}
                                    alt="Tibia Optimizer Icon"
                                    style={{ width: "50px", height: "50px" }}
                                />
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
        <style>
            {`
                .project-image-hover {
                    transition: transform 0.2s;
                }
                .project-image-hover:hover {
                    transform: scale(1.08);
                    z-index: 2;
                }
            `}
        </style>
    </div>
);
}

export default Projects;
