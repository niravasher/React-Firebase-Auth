import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import { useAuth } from "../../contexts/AuthContext";
import logo from "../images/logo.png";
import "../css/style.css";
import { AiOutlineLogout } from "react-icons/ai";

export default function Navbar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const [openModal, setOpenModal] = useState(false);
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

  function closeModal() {
    setOpenModal(false);
  }

  function openVideoModal() {
    setOpenModal(true);
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
            <div className="dropdown">
              <li
                className="dropdown-toggle text-white text-decoration-none btn btn-warning custom-class ml-2 text-white my-1 round_test"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Navigate To
              </li>
              <ul
                className="dropdown-menu multi-level"
                role="menu"
                aria-labelledby="dropdownMenu"
              >
                <li className="dropdown-item">
                  <a href="#title">Concern Areas</a>
                </li>
                <li className="dropdown-item">
                  <a href="/profile#profile">Profile</a>
                </li>
                <li className="dropdown-divider"></li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item" tabIndex="-1" href="#">
                    Archives
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <a tabIndex="-1" href="#">
                        Company
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Young</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Old</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="text-white text-decoration-none btn btn-warning custom-class ml-2 text-white my-1 round_test"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/archives"
                className="text-white text-decoration-none btn btn-warning custom-class ml-2 text-white my-1 round_test"
              >
                Archives
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="text-white text-decoration-none btn btn-warning custom-class ml-2 text-white my-1 round_test"
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="text-white text-decoration-none btn btn-warning custom-class ml-2 text-white my-1 round_test"
                data-toggle="modal"
                data-target="#myModal"
              >
                How to
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn custom-class ml-2 text-white my-1 round_test"
                onClick={handleLogout}
              >
                Logout{" "}
                <span className="h5">
                  <AiOutlineLogout />
                </span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="card p-3">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="60vw"
                controls="true"
              />
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
