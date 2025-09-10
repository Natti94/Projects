import Activity from "./components/activity";
import Introduction from "./components/introduction";
import Nav from "./components/nav";
import NewsFeedPlaceholder from "./components/newsFeedPlaceholder";

function App() {
  return (
    <div className="app-flex-layout">
      <div className="app-main-content">
        <Activity />
        <Nav />
        <div className="main-content-two-col">
          <Introduction />
          <div className="vertical-divider" aria-hidden="true">
            <hr className="vertical-gradient-hr" />
          </div>
          <NewsFeedPlaceholder />
        </div>
      </div>
    </div>
  );
}

export default App;
