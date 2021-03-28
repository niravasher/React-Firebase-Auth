import React from "react";
import Navbar from "./Navbar";
import Footer from "../routes/footer";
const Profile = () => {
  
  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 text-center bg-info">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-11 col-md-11 col-sm-10 text-left bg-new3">
          <h1>Welcome to Archives Page...</h1>
        </div>
      </div>
      <div className="row">
          <Footer />
      </div>
    </>
  );
};

export default Profile;
