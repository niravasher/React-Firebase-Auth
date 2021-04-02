import React, { useState, Component } from "react";
import "../css/Toggle.css";
import axios from "axios";
import Oldmale from "../images/oldmale.svg"
import Oldfemale from "../images/oldfemale.svg"

class Demographics extends Component {
  state = {
    jsondata: [],
    percentvalid: 0,
  };
  componentDidMount() {
    
    axios
      .get(
        "https://my-json-server.typicode.com/harsh-singhal7385/json-data-practice/db"
      )
      .then((res) => {
        console.log(res);
        this.setState({
          jsondata: res.data.age_gender_data,
        });
      });
  }

  handleChange = () => {
    var { jsondata } = this.state;
    var totalLen = jsondata.length;
    var valid = 0;
    var c1 = document.getElementById("checkbox1");
    var c2 = document.getElementById("checkbox2");
    var c3 = document.getElementById("checkbox3");
    var c4 = document.getElementById("checkbox4");
    var c5 = document.getElementById("checkbox5");


    // if (!c1.checked && !c2.checked && !c3.checked) {
    //   for (var i = 0; i < jsondata.length; i++) {
    //     if (c4.checked && c5.checked) {
    //       valid++;
    //     } else if (c4.checked && !c5.checked) {
    //       if (jsondata[i].gender === "male") {
    //         valid++;
    //       }
    //     } else if (!c4.checked && c5.checked) {
    //       if (jsondata[i].gender === "female") {
    //         valid++;
    //       }
    //     } else {
    //       valid = 0;
    //     }
    //   }
    // } else {
    //   if (c1.checked) {
    //     for (var i = 0; i < jsondata.length; i++) {
    //       if (jsondata[i].age >= 1 && jsondata[i].age <= 4) {
    //         if (c4.checked && c5.checked) {
    //           valid++;
    //         } else if (c4.checked && !c5.checked) {
    //           if (jsondata[i].gender === "male") {
    //             valid++;
    //           }
    //         } else if (!c4.checked && c5.checked) {
    //           if (jsondata[i].gender === "female") {
    //             valid++;
    //           }
    //         } else {
    //           valid++;
    //         }
    //       }
    //     }
    //   }

    //   if (c2.checked) {
    //     for (i = 0; i < jsondata.length; i++) {
    //       if (jsondata[i].age >= 5 && jsondata[i].age <= 7) {
    //         if (c4.checked && c5.checked) {
    //           valid++;
    //         } else if (c4.checked && !c5.checked) {
    //           if (jsondata[i].gender === "male") {
    //             valid++;
    //           }
    //         } else if (!c4.checked && c5.checked) {
    //           if (jsondata[i].gender === "female") {
    //             valid++;
    //           }
    //         } else {
    //           valid++;
    //         }
    //       }
    //     }
    //   }

    //   if (c3.checked) {
    //     for (i = 0; i < jsondata.length; i++) {
    //       if (jsondata[i].age >= 8 && jsondata[i].age <= 10) {
    //         if (c4.checked && c5.checked) {
    //           valid++;
    //         } else if (c4.checked && !c5.checked) {
    //           if (jsondata[i].gender === "male") {
    //             valid++;
    //           }
    //         } else if (!c4.checked && c5.checked) {
    //           if (jsondata[i].gender === "female") {
    //             valid++;
    //           }
    //         } else {
    //           valid++;
    //         }
    //       }
    //     }
    //   }
    // }

    var percent = (valid * 100) / totalLen;
    this.setState({
      percentvalid: percent,
    });
  };

  render() {
    return (
      <>
        <div className="container fontchange">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h3>
                  <label className="unselectable-text">Statistics</label>
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="row">
                  <div className="col">
                    <h6>
                      <label className="unselectable-text">Old Male</label>
                    </h6>
                  </div>
                  <div className="col">
                    <h6>
                      <label className="unselectable-text">Old Female</label>
                    </h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div onClick={this.handleChange} className="demographics1 ">
                      <img
                        className="checkmark"
                        src={Oldmale}
                        alt=""
                      />
                      <input
                        id="checkbox2"
                        type="checkbox"
                        className="checkbox"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div onClick={this.handleChange} className="demographics1 ">
                      <img
                        className="checkmark"
                        src={Oldfemale}
                        alt=""
                      />
                      <input
                        id="checkbox3"
                        type="checkbox"
                        className="checkbox"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 text-center">
                <div className="row">
                  <div className="col">
                    <h6>
                      <label className="unselectable-text">Young Male</label>
                    </h6>
                  </div>
                  <div className="col">
                    <h6>
                      <label className="unselectable-text">Young Female</label>
                    </h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div onClick={this.handleChange} className="demographics1 ">
                      <img
                        className="checkmark"
                        src="https://img.icons8.com/offices/80/000000/person-male-skin-type-4.png"
                        alt=""
                      />
                      <input
                        id="checkbox4"
                        type="checkbox"
                        className="checkbox"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div onClick={this.handleChange} className="demographics1 ">
                      <img
                        className="checkmark"
                        src="https://img.icons8.com/officel/80/000000/person-female.png"
                        alt=""
                      />
                      <input
                        id="checkbox5"
                        type="checkbox"
                        className="checkbox"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </>
    );
  }
}

export default Demographics;
