import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../routes/footer";
import "../css/style.css";
import bp from "../images/bp_new.svg";
import axios from "axios";

class Profile extends Component {
  state = {
    jsondata: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://my-json-server.typicode.com/niravasher/niroggyan_profile/db"
      )
      .then((res) => {
        console.log(res.data.profile_data);
        this.setState({
          jsondata: res.data.profile_data,
        });
      });
  }

  render() {
    const { jsondata } = this.state;
    const goodData = jsondata.length ? (
      jsondata.map((data) => {
        if (data.status === "good") {
          return (
            <tr key={data.id}>
              <td className="text-center text-font">{data.emp_id}</td>
            </tr>
          );
        }
      })
    ) : (
      <div className="center">No data here</div>
    );

    const warningData = jsondata.length ? (
      jsondata.map((data) => {
        if (data.status == "warning") {
          return (
            <tr key={data.id}>
              <td className="text-center text-font">{data.emp_id}</td>
            </tr>
          );
        }
      })
    ) : (
      <div className="center">No data here</div>
    );

    const badData = jsondata.length ? (
      jsondata.map((data) => {
        if (data.status == "bad") {
          return (
            <tr key={data.id}>
              <td className="text-center text-font" key={data.id}>{data.emp_id}</td>
            </tr>
          );
        }
      })
    ) : (
      <div className="center">No data here</div>
    );

    return (
      <div className="bg-new3">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <Navbar />
          </div>
        </div>
        <div className="col-12">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3">
            <div className="col mb-2 mt-4">
              <div className="card design shadow">
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 col-sm-12">
                        <img
                          src={bp}
                          className="center card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-9 col-sm-12">
                        <h5 className="card-title overflow-y-hidden">Card title</h5>
                        <p className="card-text">
                          This is a longer card with supporting text below
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-2 mt-4">
              <div className="card design shadow">
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 col-sm-12">
                        <img
                          src={bp}
                          className="center card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-9 col-sm-12">
                        <h5 className="card-title overflow-y-hidden">Card title</h5>
                        <p className="card-text">
                          This is a longer card with supporting text below
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-2 mt-4">
              <div className="card design shadow">
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 col-sm-12">
                        <img
                          src={bp}
                          className="center card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-9 col-sm-12">
                        <h5 className="card-title overflow-y-hidden">Card title</h5>
                        <p className="card-text">
                          This is a longer card with supporting text below
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-2 mt-4">
              <div className="card design shadow">
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 col-sm-12">
                        <img
                          src={bp}
                          className="center card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-9 col-sm-12">
                        <h5 className="card-title overflow-y-hidden">Card title</h5>
                        <p className="card-text">
                          This is a longer card with supporting text below
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-2 mt-4">
              <div className="card design shadow">
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 col-sm-12">
                        <img
                          src={bp}
                          className="center card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-9 col-sm-12">
                        <h5 className="card-title overflow-y-hidden">Card title</h5>
                        <p className="card-text">
                          This is a longer card with supporting text below
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-2 mt-4">
              <div className="card design shadow">
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 col-sm-12">
                        <img
                          src={bp}
                          className="center card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-9 col-sm-12">
                        <h5 className="card-title overflow-y-hidden">Card title</h5>
                        <p className="card-text">
                          This is a longer card with supporting text below
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-2 mt-4">
              <div className="card design shadow">
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 col-sm-12">
                        <img
                          src={bp}
                          className="center card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-9 col-sm-12">
                        <h5 className="card-title overflow-y-hidden">Card title</h5>
                        <p className="card-text">
                          This is a longer card with supporting text below
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-2 mt-4">
              <div className="card design shadow">
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 col-sm-12">
                        <img
                          src={bp}
                          className="center card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-9 col-sm-12">
                        <h5 className="card-title overflow-y-hidden">Card title</h5>
                        <p className="card-text">
                          This is a longer card with supporting text below
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-2 mt-4">
              <div className="card design shadow">
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 col-sm-12">
                        <img
                          src={bp}
                          className="center card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-9 col-sm-12">
                        <h5 className="card-title overflow-y-hidden">Card title</h5>
                        <p className="card-text">
                          This is a longer card with supporting text below
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="d-flex flex-wrap justify-content-around mb-3 text-center align-self-start">
          <div className="p-2 m-2 bg-success-imp rounded">
            <h3 className="text-center text-white pb-1">GOOD</h3>
            <div className="card shadow">
              <div className="card-body">
                <table id="table1" className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="tableHead">This is good section</th>
                    </tr>
                  </thead>
                  <tbody>
                    {goodData}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="p-2 m-2 bg-warning-imp rounded">
            <h3 className="text-center text-white pb-1">WARNING</h3>
            <div className="card shadow">
              <div className="card-body">
                <table id="table2" className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="tableHead">This is warning section</th>
                    </tr>
                  </thead>
                  <tbody>
                    {warningData}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="p-2 m-2 bg-danger-imp rounded">
            <h3 className="text-center text-white pb-1">BAD</h3>
            <div className="card shadow">
              <div className="card-body">
                <table id="table3" className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="tableHead">This is bad section</th>
                    </tr>
                  </thead>
                  <tbody>
                    {badData}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Profile;
