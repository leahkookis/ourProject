import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/"}> <div className="logo"> <h1>OP</h1> </div> </Link>

      <div className="title">
        <Link to={"/homePage"}> <h2>ourProject</h2> </Link>
      </div>

      <ul className="nav-links">
        <Link to={"/login"}> <li className="link">Login</li> </Link>
        <Link to={"/register"}> <li className="link">Register</li> </Link>
      </ul>

    </div>
  );
}
export default Navbar;
