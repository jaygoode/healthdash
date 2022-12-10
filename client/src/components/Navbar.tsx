import { Link } from "react-router-dom";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

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
      <button className="hamburger" onClick={handleToggle}>
        {navbarOpen ? <MdClose /> : <FiMenu />}
      </button>
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
