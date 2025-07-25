import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="react-logo">
            <div className="react-logo-core"></div>
            <div className="react-logo-ring react-logo-ring-1"></div>
            <div className="react-logo-ring react-logo-ring-2"></div>
            <div className="react-logo-ring react-logo-ring-3"></div>
          </div>
          <div className="auth-buttons">
            <Link to="#" className="login-button">
              Log in
            </Link>
            <Link to="#" className="signup-button">
              Get started
            </Link>
          </div>
          <div className="nav-links">
            <ul className="nav-list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Github
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user/12345"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  User
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
