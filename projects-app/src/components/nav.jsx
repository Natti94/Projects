import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <nav className={`side-nav${collapsed ? " collapsed" : ""}`}>
      <button
        className="nav-toggle-btn"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? ">>" : "<<"}
      </button>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
