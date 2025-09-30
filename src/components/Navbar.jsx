import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="nav-layout">
      <Logo />
      <nav>
        <ul className="flex gap-16 ">
          <li>
            <a href="#" className="nav-links">
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Foods
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Tables
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
