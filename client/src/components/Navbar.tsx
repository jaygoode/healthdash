import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [settingsModule, setSettingsModule] = useState(false);

  return (
    <div>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/overview">Overview</Link>
        </li>
        <li>
          <button
            onClick={() => {
              setSettingsModule(!settingsModule);
            }}
          >
            Settings
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
