import { NavLink } from "react-router-dom";

import "../css/Navbar.css";


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Admin-Panel" end>
            Admin Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
