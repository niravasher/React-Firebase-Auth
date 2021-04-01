import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import logo from "../images/logo.png";
import "../css/style.css";

export default function Navbar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-new">
        <Link className="navbar-brand" to="/dashboard">
          <img src={logo} width="150" height="30" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/dashboard" className="text-white text-decoration-none btn btn-warning custom-class ml-2 text-white my-1">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/archives" className="text-white text-decoration-none btn btn-warning custom-class ml-2 text-white my-1">
                Archives
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="text-white text-decoration-none btn btn-warning custom-class ml-2 text-white my-1">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-warning custom-class ml-2 text-white my-1"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
