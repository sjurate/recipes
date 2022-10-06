import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-navbar col-6">
      <div className="nav-links">
        <Link to="/"> Home </Link>
        <Link to="/saved"> Saved Recipes </Link>
      </div>
    </div>
  );
};

export default Navbar;
