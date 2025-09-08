import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./components/introduction";
import Nav from "./components/nav";
import Panel from "./components/panel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />} />
      </Routes>
      <Nav />
      <Panel />
    </BrowserRouter>
  );
}

export default App;
