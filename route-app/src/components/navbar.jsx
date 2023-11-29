import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/posts/2023/11">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
