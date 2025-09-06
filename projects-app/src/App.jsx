import { BrowserRouter } from "react-router-dom";
import Introduction from "./components/introduction";
import Nav from "./components/nav";
import Panel from "./components/panel";

function App() {
  return (
    <BrowserRouter>
      <Introduction />
      <Nav />
      <Panel />
    </BrowserRouter>
  );
}

export default App;
