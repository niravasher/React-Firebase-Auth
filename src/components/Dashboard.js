import React, { useState } from "react"
// import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import NavIcons from "./common/NavIcons";
import Navbar from "./routes/Navbar";
import DashCard from "./dashboard/Cards.jsx";
import './css/style.css';
import Demographics from "./dashboard/Demographics";

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  
  return (
    <>
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div> */}
     <div className="set">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
          <Navbar />
        </div>
      </div>
      <div className="row bg-new3">
        <div className="col-lg-1 col-md-2 col-sm-2 text-center text-center bg-new2 dashboard1">
          <NavIcons />
        </div>
        <div className="col-lg-8 col-md-6 col-sm-6 text-left my-4">
          {
          // <h4 className="mx-5">Welcome {currentUser.email}</h4>
          }
          <DashCard />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 text-left">
          <Demographics />
        </div>
      </div>
      </div>  
    </>
  )
}
