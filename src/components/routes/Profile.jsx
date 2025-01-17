import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../routes/footer";
import "../css/style.css";


import CBC from "../images/profile/CBC.svg";
import Anemia from "../images/profile/Anemia.svg";
import Diabetes from "../images/profile/Diabetes.svg";
import Electrolytes from "../images/profile/Electrolytes.svg";
import Kidneys from "../images/profile/Kidneys.svg";
import Lipid from "../images/profile/Lipid.svg";
import Liver from "../images/profile/Liver.svg";
import Thyroid from "../images/profile/Thyroid.svg";
import Urine from "../images/profile/Urine.svg";
import VitaminB12 from "../images/profile/VitaminB12.svg";
import VitaminD from "../images/profile/VitaminD.svg";

import axios from "axios";
import ReactTooltip from 'react-tooltip';
import { AiFillInfoCircle, AiOutlineFileExcel } from "react-icons/ai";
import { CSVLink } from "react-csv";

class Profile extends Component {
  state = {
    jsondata: [],
  };

  componentDidMount() {
    var config = {
      headers: {'Access-Control-Allow-Origin': '*'}
  };
    axios
      .get(
        "https://rnxsohimg1.execute-api.ap-south-1.amazonaws.com/default/dashboardJson/"
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
        <div className="container-fluid custom_font">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-2 text-center">
              <img
                src={CBC}
                className="center card-img-top reduce_width"
                alt="..."
              />
              <h4>CBC</h4>
              <p></p>
            </div>
            <div className="col-lg-2 text-center">
              <img
                src={Anemia}
                className="center card-img-top reduce_width"
                alt="..."
              />
              <h4>Anemia</h4>
              <p></p>
            </div>
            <div className="col-lg-2 text-center">
              <img
                src={Diabetes}
                className="center card-img-top reduce_width"
                alt="..."
              />
              <h4>Diabetes</h4>
              <p></p>
            </div>
            <div className="col-lg-2 text-center">
              <img
                src={Electrolytes}
                className="center card-img-top reduce_width"
                alt="..."
              />
              <h4>Electrolytes</h4>
              <p></p>
            </div>
            <div className="col-lg-2 text-center">
              <img
                src={Kidneys}
                className="center card-img-top reduce_width"
                alt="..."
              />
              <h4>Kidneys</h4>
              <p></p>
            </div>
            <div className="col-lg-1"></div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-2 text-center">
              <img
                src={Lipid}
                className="center card-img-top reduce_width"
                alt="..."
              />
              <h4>Lipids</h4>
              <p></p>
            </div>
            <div className="col-lg-2 text-center">
              <img
                src={Liver}
                className="center card-img-top reduce_width"
                alt="..."
              />
              <h4>Liver</h4>
              <p></p>
            </div>
            <div className="col-lg-2 text-center">
              <img
                src={Thyroid}
                className="center card-img-top reduce_width"
                alt="..."
              />
              <h4>Thyroid</h4>
              <p></p>
            </div>
            <div className="col-lg-2 text-center">
              <img
                src={Urine}
                className="center card-img-top reduce_width"
                alt="..."
              />
              <h4>Urine</h4>
              <p></p>
            </div>
            <div className="col-lg-2 text-center">
              <img
                src={VitaminB12}
                className="center card-img-top reduce_width"
                alt="..."
              />
              <h4>Vitamin B12</h4>
              <p></p>
            </div>
            <div className="col-lg-1"></div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-2 text-center">
              <img
                src={VitaminD}
                className="center card-img-top reduce_width"
                alt="..."
              />
              <h4>Vitamin D</h4>
              <p></p>
            </div>
            <div className="col-lg-1"></div>
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
        </div>
        <div className="d-flex flex-wrap justify-content-around mb-3 text-center align-self-start">
          <div className="p-2 m-2 bg-success-imp rounded">
            <h3 className="text-center text-white pb-1" id="profile">GOOD <AiFillInfoCircle data-tip="hello world" className="mb-1" /></h3>
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
            <h3 className="text-center text-white pb-1">WARNING <AiFillInfoCircle data-tip="hello world" className="mb-1" /></h3>
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
            <h3 className="text-center text-white pb-1">BAD <AiFillInfoCircle data-tip="hello world" className="mb-1" /></h3>
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
