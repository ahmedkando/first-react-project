import { Link, useLocation } from 'react-router-dom'
import "./header.css";

export default function Header() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top height">
      <div className="container">
        <Link to="/" className="navbar-brand text-uppercase fw-bold">
          Start Framework
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link text-uppercase fw-bold ${
                  isActive('/about') ? 'bg-success text-white rounded px-2' : ''
                }`}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={`nav-link text-uppercase fw-bold ${
                  isActive('/portfolio') ? 'bg-success text-white rounded px-2' : ''
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link text-uppercase fw-bold ${
                  isActive('/contact') ? 'bg-success text-white rounded px-2' : ''
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
