import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white">
          <FontAwesomeIcon icon={faPaperclip} /> ramos
        </Link>
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/reports" className="nav-link text-white">Reports</Link>
            </li>
            <li className="nav-item">
              <Link to="/documents" className="nav-link text-white">Documents</Link>
            </li>
            <li className="nav-item">
              <Link to="/history" className="nav-link text-white">History</Link>
            </li>
            <li className="nav-item">
              <Link to="/settings" className="nav-link text-white">Settings</Link>
            </li>
          </ul>
        </div>
        <Link to="/signup" className="btn btn-light ms-auto">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
