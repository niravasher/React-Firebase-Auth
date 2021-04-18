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
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [FirstThird, setFirstThird] = useState(false);
  const [SecondFourth, setSecondFourth] = useState(false);
  const [all, setAll] = useState(false);
  const [disabledFirst, setdisabledFirst] = useState(false);
  const [disabledSecond, setdisabledSecond] = useState(false);
  const [disabledThird, setdisabledThird] = useState(false);
  const [disabledFourth, setdisabledFourth] = useState(false);

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
    if (e.target.id == "button1" && e.target.checked == true) {
      setdisabledFirst(false);
      setdisabledSecond(false);
      setdisabledThird(false);
      setdisabledFourth(false);
      setFirst(true);
      setSecond(false);
      setThird(true);
      setFourth(false);
      setFirstThird(true);
    }
    else if (e.target.id == "button1" && e.target.checked == false) {
      setdisabledFirst(false);
      setdisabledSecond(false);
      setdisabledThird(false);
      setdisabledFourth(false);
      setFirst(false);
      setThird(false);
      setFirstThird(false);
    }
    else if (e.target.id == "button2" && e.target.checked == true) {
      setdisabledFirst(false);
      setdisabledSecond(false);
      setdisabledThird(false);
      setdisabledFourth(false);
      setFirst(false)
      setSecond(true);
      setThird(false);
      setFourth(true);
      setSecondFourth(true);
    }
    else if (e.target.id == "button2" && e.target.checked == false) {
      setdisabledFirst(false);
      setdisabledSecond(false);
      setdisabledThird(false);
      setdisabledFourth(false);
      setSecond(false);
      setFourth(false);
      setSecondFourth(false);
    }
    else if (e.target.id == "button3" && e.target.checked == true) {
      setdisabledFirst(false);
      setdisabledSecond(false);
      setdisabledThird(false);
      setdisabledFourth(false);
      setSecond(true);
      setFourth(true);
      setFirst(true);
      setThird(true);
      setFirstThird(false);
      setAll(true);
    }
    else if (e.target.id == "button3" && e.target.checked == false) {
      setSecond(false);
      setFourth(false);
      setFirst(false);
      setThird(false);
      setAll(false);
      setFirstThird(false);
      setSecondFourth(false);
    }
    else if (e.target.id == "button4") {
      setdisabledFirst(false);
      setdisabledSecond(false);
      setdisabledThird(false);
      setdisabledFourth(false);
      setSecond(false);
      setFourth(false);
      setFirst(false);
      setThird(false);
      setAll(false);
      setFirstThird(false);
      setSecondFourth(false);
    }
    else if (e.target.id == "checkbox1" && e.target.checked == true) {
      setFirst(true);
      setdisabledSecond(true);
      setdisabledThird(true);
      setdisabledFourth(true);
    }
    else if (e.target.id == "checkbox2" && e.target.checked == true) {
      setSecond(true);
      setdisabledFirst(true);
      setdisabledThird(true);
      setdisabledFourth(true);
    }
    else if (e.target.id == "checkbox3" && e.target.checked == true) {
      setThird(true);
      setdisabledSecond(true);
      setdisabledFirst(true);
      setdisabledFourth(true);
    }
    else if (e.target.id == "checkbox4" && e.target.checked == true) {
      setFourth(true);
      setdisabledSecond(true);
      setdisabledThird(true);
      setdisabledFirst(true);
    }
    else if (e.target.id == "checkbox1" && e.target.checked == false) {
      setFirst(false);
      setdisabledSecond(false);
      setdisabledThird(false);
      setdisabledFourth(false);
    }
    else if (e.target.id == "checkbox2" && e.target.checked == false) {
      setSecond(false);
      setdisabledFirst(false);
      setdisabledThird(false);
      setdisabledFourth(false);
    }
    else if (e.target.id == "checkbox3" && e.target.checked == false) {
      setThird(false);
      setdisabledSecond(false);
      setdisabledFirst(false);
      setdisabledFourth(false);
    }
    else if (e.target.id == "checkbox4" && e.target.checked == false) {
      setFourth(false);
      setdisabledSecond(false);
      setdisabledThird(false);
      setdisabledFirst(false);
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
          <Tests young_male={first} young_female={second} old_male={third} old_female={fourth} />
        </div>
        <div className="col-lg-5 col-md-4 col-sm-12 text-left">
          <Demographics clickIcon={clickIcon} FirstThird={FirstThird} SecondFourth={SecondFourth} all={all} first={first} second={second} third={third} fourth={fourth} disabledFirst={disabledFirst} disabledSecond={disabledSecond} disabledThird={disabledThird} disabledFourth={disabledFourth} />
        </div>
      </div>
      <div className="row">
          <Footer />
      </div>
      </div>  
    </>
  )
}
