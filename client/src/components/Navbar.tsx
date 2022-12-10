import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/overview">Overview</Link>
      </ul>
    </div>
  );
};

export default Navbar;
