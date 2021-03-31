import React, { useState } from "react"
//  import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import Navbar from "./routes/Navbar";
import DashCard from "./dashboard/Cards.jsx";
import Demographics from "./dashboard/Demographics";
import Footer from "./routes/footer";

export default function Dashboard() {
  const [setError] = useState("")
  const { logout } = useAuth()
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
     <div className="set">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <Navbar />
        </div>
      </div>
      <div className="row bg-new3">
        <div className="col-lg-7 col-md-7 col-sm-11 text-left my-4">
          <DashCard />
        </div>
        <div className="col-lg-5 col-md-4 col-sm-12 text-left">
          <Demographics />
        </div>
      </div>
      <div className="row">
          <Footer />
      </div>
      </div>  
    </>
  )
}
