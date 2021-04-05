import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../routes/footer";
import "../css/style.css";
import bp from "../images/bp_new.svg";
import axios from "axios";
import ReactTooltip from 'react-tooltip';
import { AiFillInfoCircle, AiOutlineFileExcel } from "react-icons/ai";
import { CSVLink } from "react-csv";

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
        this.setState({
          jsondata: res.data.profile_data,
        });
      });
  }

  render() {
    var headers = [
      { label: "Good Data", key: "gooddata" },
      { label: "Warning Data", key: "warningdata" },
      { label: "Bad Data", key: "baddata" }
    ];

    var csv_data = [];
    var good_csv_data = [];
    var warning_csv_data = [];
    var bad_csv_data = [];

    const { jsondata } = this.state;
    const goodData = jsondata.length ? (
      jsondata.map((data) => {
        if (data.status === "good") {
          good_csv_data.push(data.emp_id)
          return (
            <tr key={data.id}>
              <td className="text-center text-font">{data.emp_id}</td>
            </tr>
          );
        } else if (data.status === 'warning') {
          warning_csv_data.push(data.emp_id)
        } else if (data.status === 'bad') {
          bad_csv_data.push(data.emp_id);
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
    
    for (var i = 0 ; i < 10000 ; i++) {
      csv_data.push({
        gooddata: good_csv_data[i], warningdata: warning_csv_data[i], baddata: bad_csv_data[i]
      })
    }

    return (
      <div className="bg-new3">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <Navbar />
          </div>
        </div>
        {/* <div className="col-12">
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
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4 text-right">
              <CSVLink data={csv_data} className="btn btn-primary mb-4" headers={headers} filename={"employee_data.csv"}>
                Download CSV <span><AiOutlineFileExcel size="2em" className="mb-1" /></span>
              </CSVLink>
            </div>
          </div>
        </div> */}
        <div className="d-flex flex-wrap justify-content-around mb-3 text-center align-self-start">
          <div className="p-2 m-2 bg-success-imp rounded">
            <h3 className="text-center text-white pb-1">GOOD <AiFillInfoCircle data-tip="hello world" class="mb-1" /></h3>
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
            <h3 className="text-center text-white pb-1">WARNING <AiFillInfoCircle data-tip="hello world" class="mb-1" /></h3>
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
            <h3 className="text-center text-white pb-1">BAD <AiFillInfoCircle data-tip="hello world" class="mb-1" /></h3>
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
        <ReactTooltip />
      </div>
    );
  }
}

export default Profile;
