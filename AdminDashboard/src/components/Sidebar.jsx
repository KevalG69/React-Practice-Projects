import { NavLink } from "react-router-dom";

import '../css/Sidebar.css';


const Sidebar = () => {
    return (
        
    <nav className='sidebar'>
      <ul>
        <li>
          <NavLink to="/Admin-Panel/Dashboard" end>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/Admin-Panel/Users" end>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );

}

export default Sidebar; 