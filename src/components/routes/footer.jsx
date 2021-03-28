import React, { useState } from "react";
import { FaFacebookF } from 'react-icons/fa';
import { FaMediumM } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn} from 'react-icons/fa';
import { Link } from 'react-router-dom'
import '../css/style.css'
export default function Footer(){
return (

    <div className="card text-center footer1 h-10">
  <div className="card-body">
  <button type="button" className="btn btn-xl bg-new5 "><a href="https://www.facebook.com/niroggyan/"><div className="form-group navIcon"><FaFacebookF size="20px" color="white" /></div></a></button>
  <button type="button" className="btn btn-xl bg-new7"  ><a href="https://medium.com/@niroggyan_smart_reports"><div className="form-group navIcon"><FaMediumM size="20px" color="white" /></div></a></button>
  <button type="button" className="btn btn-xl bg-new6"  ><a href="https://www.instagram.com/niroggyan_reports/?hl=en"><div className="form-group navIcon "><FaInstagram size="22px" color="white" /></div></a></button>
  <button type="button" className="btn btn-xl bg-new4"  ><a href="https://www.linkedin.com/company/niroggyan"><div className="form-group navIcon "><FaLinkedinIn size="20px" color="white" /></div></a></button>
  </div>
  <div className="card-footer text-muted footer2">
    <p className="changecolor">@niroggyan</p>
  </div>
</div>
    
);
}