import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [settingsModule, setSettingsModule] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="nav-list">
      <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <li>
          <Link to="/" onClick={() => closeMenu()}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/overview" onClick={() => closeMenu()}>
            Overview
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              setSettingsModule(!settingsModule);
              closeMenu();
            }}
          >
            Settings
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
