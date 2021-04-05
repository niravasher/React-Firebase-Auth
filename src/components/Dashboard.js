import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import Navbar from "./routes/Navbar";
import Demographics from "./dashboard/Demographics";
import Tests from "./dashboard/Tests";
import Footer from "./routes/footer";

export default function Dashboard() {
  const [setError] = useState("")
  const { logout } = useAuth()
  const history = useHistory()
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);
  const [fourth, setFourth] = useState(true);

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  function clickIcon(e) {
    if (e.target.id == "checkbox1" && e.target.checked == true) setFirst(true);
    else if (e.target.id == "checkbox2" && e.target.checked == true) setSecond(true);
    else if (e.target.id == "checkbox3" && e.target.checked == true) setThird(true);
    else if (e.target.id == "checkbox4" && e.target.checked == true) setFourth(true);
    else if (e.target.id == "checkbox1" && e.target.checked == false) setFirst(false);
    else if (e.target.id == "checkbox2" && e.target.checked == false) setSecond(false);
    else if (e.target.id == "checkbox3" && e.target.checked == false) setThird(false);
    else if (e.target.id == "checkbox4" && e.target.checked == false) setFourth(false);
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
          <Tests young_male={first} young_female={second} old_male={third} old_female={fourth} />
        </div>
        <div className="col-lg-5 col-md-4 col-sm-12 text-left">
          <Demographics clickIcon={clickIcon} first={first} second={second} third={third} fourth={fourth} />
        </div>
      </div>
      <div className="row">
          <Footer />
      </div>
      </div>  
    </>
  )
}
