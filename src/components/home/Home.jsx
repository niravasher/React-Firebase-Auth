import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_new.svg'
import '../css/home.css';

const Home = () => {
  return (
    <>
      <div class="header">
        <div class="container header__container">
          <div class="header__logo">
          <img className="header__img" src={logo} width="100" height="60" />
          </div>
        </div>
      </div>
      <div class="sect sect--padding-top">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="site">
                <h1 class="site__title">Simplifying Medical Reports</h1>
                <h2 class="site__subtitle">NirogGyan makes lab tests engaging so that you understand your health better, with visual SmartReports.</h2>
                <div class="site__box-link">
                  <Link class="login-btn btn btn--width" to="/login">Login</Link>
                  <Link class="signup-btn btn btn--revert btn--width" to="/signup">Signup</Link>
                </div>
                <img class="site__img" src="https://niroggyan.com/images/detailed-covid-19-report.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
