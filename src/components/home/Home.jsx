import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_new.svg'
import '../css/home.css';

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="container header__container">
          <div className="header__logo">
          <img className="header__img" src={logo} width="100" height="60" alt="" />
          </div>
        </div>
      </div>
      <div className="sect sect--padding-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site">
                <h1 className="site__title">Simplifying Medical Reports</h1>
                <h2 className="site__subtitle">NirogGyan makes lab tests engaging so that you understand your health better, with visual SmartReports.</h2>
                <div className="site__box-link">
                  <Link className="login-btn btn btn--width" to="/login">Login</Link>
                  <Link className="signup-btn btn btn--revert btn--width" to="/signup">Signup</Link>
                </div>
                <img className="site__img" src="https://niroggyan.com/images/detailed-covid-19-report.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
