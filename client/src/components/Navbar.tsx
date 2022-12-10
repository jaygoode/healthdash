import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [settingsModule, setSettingsModule] = useState(false);
  console.log(settingsModule);
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/overview">Overview</Link>
        <li>
          <button onClick={() => setSettingsModule(false)}>Settings</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
