import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/dashboard")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="container-fluid full-height bg-new3">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-6 mx-auto">
            <div className="border1 card shadow-lg card-signin my-5">
              <div className="card-body">
                <h1 className="card-title text-center">Sign Up</h1>
                <form className="form-signup" onSubmit={handleSubmit}>
                  <div className="form-label-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                      type="email"
                      id="email"
                      ref={emailRef}
                      className="border1 shadow-sm  form-control"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <br />
                  <div className="form-label-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input
                      type="password"
                      id="password"
                      ref={passwordRef}
                      className="border1 shadow-sm form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <br />
                  <div className="form-label-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input
                      type="password"
                      id="confirmpassword"
                      ref={passwordConfirmRef}
                      className="border1 shadow-sm form-control"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>

                  <div className="custom-control custom-checkbox mb-3"></div>
                  <button disabled={loading} className="border1 btn shadow btn-lg btn-primary btn-block text-uppercase" type="submit">
                    Sign Up
                  </button>
                </form>
                <p className="text-center my-4 ">
                Already have an account? <Link to="/login">Login</Link>
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
