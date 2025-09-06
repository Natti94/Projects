import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./components/introduction";
import Nav from "./components/nav";
import Panel from "./components/panel";
import CV from "./pages/cv";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
      <Nav />
      <Panel />
    </BrowserRouter>
  );
}

export default App;
