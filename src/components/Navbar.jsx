import { NavLink } from "react-router";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="nav-layout">
      <Logo />
      <nav>
        <ul className="flex gap-16 ">
          <li>
            <NavLink to="/" className="nav-links">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className="nav-links">
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/foods" className="nav-links">
              Foods
            </NavLink>
          </li>
          <li>
            <NavLink to="/tables" className="nav-links">
              Tables
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" className="nav-links">
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
