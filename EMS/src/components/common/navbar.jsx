import 'bootstrap/dist/css/bootstrap.css';
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expanded-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        EMS
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink to="/employees" className="nav-item nav-link">
            Employees
          </NavLink>
          <NavLink to="/customers" className="nav-item nav-link">
            Customers
          </NavLink>
          <NavLink to="/suppliers" className="nav-item nav-link">
            Suppliers
          </NavLink>
          <NavLink to="/login" className="nav-item nav-link">
            Login
          </NavLink>
          <NavLink to="/register" className="nav-item nav-link">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
