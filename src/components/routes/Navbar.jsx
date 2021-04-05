import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ReactPlayer from 'react-player'
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
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
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
              <button type="button" class="text-white text-decoration-none btn btn-warning custom-class ml-2 text-white my-1 round_test" data-toggle="modal" data-target="#myModal">
                How to
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn custom-class ml-2 text-white my-1 round_test"
                onClick={handleLogout}
              >
                Logout <span className="h5"><AiOutlineLogout /></span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div className="card p-3">
              <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width="60vw" controls="true" />
              <button type="button" class="btn btn-danger" data-dismiss="modal">CLOSE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
