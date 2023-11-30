import 'bootstrap/dist/css/bootstrap.css';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expanded-lg navbar-light bg-light">
      <a href="#" className="navbar-brand">
        EMS
      </a>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <a href="#" className="nav-item nav-link">
            Employees
          </a>
          <a href="#" className="nav-item nav-link">
            Customers
          </a>
          <a href="#" className="nav-item nav-link">
            Suppliers
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
