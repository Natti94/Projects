import Activity from "./components/activity";
import Introduction from "./components/introduction";
import Nav from "./components/nav";
import Projects from "./components/projects";

function App() {
  const isProd = import.meta.env.PROD;

  const assets = {
    cv_link: isProd
      ? "/api/assets?asset=cv_link"
      : import.meta.env.VITE_CLOUDINARY_CV_LINK,
    page_background: isProd
      ? "/api/assets?asset=page_background"
      : import.meta.env.VITE_CLOUDINARY_PAGE_BACKGROUND,
  };
  return (
    <div className="layout">
      <img
        src={assets.page_background}
        alt="Background"
        className="background-image"
      />
      <div className="layout__main">
        <Activity />
        <Nav />
        <div className="layout__columns">
          <Introduction />
          <div className="divider" aria-hidden="true">
            <hr className="divider__line" />
          </div>
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
