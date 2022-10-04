import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-navbar col-6">
      <Link to="/"> Home </Link>
      <Link to="/saved"> Saved Recipes </Link>
    </div>
  );
};

export default Navbar;
