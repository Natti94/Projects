import { BrowserRouter } from "react-router-dom";
import Projects from "./components/projects";
import Nav from "./components/nav";

function App() {
  return (
    <BrowserRouter>
      <Projects />
      <Nav />
    </BrowserRouter>
  );
}

export default App;
