import React from "react";
import Navbar from "./Navbar";
import Footer from "../routes/footer";
import '../css/style.css';

import blood from '../images/blood.svg';
import bp from '../images/bp.svg';
import ht from '../images/ht.svg';
import wt from '../images/wt.svg';




const Profile = () => {

  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
          <Navbar />
        </div>
      </div>

<div className="bg-new3 col-12">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3">
        <div className="col mb-2 mt-4">
          <div className="card design">
            <img src={bp} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col mb-2 mt-4">
          <div className="card design">
            <img src={ht} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col mb-2 mt-4">
          <div className="card design">
            <img src={wt} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col mb-2 mt-4">
          <div className="card design">
            <img src={wt} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col mb-2 mt-4">
          <div className="card design">
            <img src={bp} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col mb-2 mt-4">
          <div className="card design">
            <img src={ht} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col mb-2 mt-4">
          <div className="card design">
            <img src={bp} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col mb-2 mt-4">
          <div className="card design">
            <img src={wt} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col mb-2 mt-4">
          <div className="card design">
            <img src={bp} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        
      </div>
      

</div>

<div className="container-fluid bg-new3">
  <div className="row mb-4 bg-new3"></div>
</div>

      <div className="row">
        <Footer />
      </div>
    </>
  );
};

export default Profile;
