import React, { useState, Component } from "react";
import { VscLocation } from "react-icons/vsc";
import { FaMale, FaFemale } from "react-icons/fa";
import "../css/Toggle.css";
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";

class Demographics extends Component {
  state = {
    jsondata: [],
    percentvalid: 0
  }
  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/harsh-singhal7385/json-data-practice/db')
      .then(res => {
        console.log(res);
        this.setState({
          jsondata: res.data.age_gender_data
        })
      })
  }

  handleChange = () => {
    var { jsondata } = this.state;
    var totalLen = jsondata.length;
    var valid = 0;
    var c1 = document.getElementById('checkbox1');
    var c2 = document.getElementById('checkbox2');
    var c3 = document.getElementById('checkbox3');

    if (c1.checked) {
      for (var i = 0 ; i < jsondata.length ; i++) {
        if (jsondata[i].age >= 1 && jsondata[i].age <= 4) {
          valid++;
        }
      }
    }

    if (c2.checked) {
      for (var i = 0 ; i < jsondata.length ; i++) {
        if (jsondata[i].age >= 5 && jsondata[i].age <= 7) {
          valid++;
        }
      }
    }

    if (c3.checked) {
      for (var i = 0 ; i < jsondata.length ; i++) {
        if (jsondata[i].age >= 8 && jsondata[i].age <= 10) {
          valid++;
        }
      }
    }
    // console.log(valid);
    var percent = (valid * 100) / totalLen;
    this.setState({
      percentvalid: percent
    })
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h3>
                  <label className="unselectable-text">
                    Demographics
                  </label>
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="text-center ">
                  <h6>
                    <label className="unselectable-text">
                      Age Range
                    </label>
                  </h6>
                </div>
                <div className="my-toggle-btn-wrapper">
                  <div className="my-toggle-btn">
                    <input
                      type="checkbox"
                      id="checkbox1"
                      value="1-4"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="checkbox1" className="labelToggle">
                      <span className="on unselectable-text">1-4</span>
                      <span className="off unselectable-text">1-4</span>
                    </label>
                  </div>
                </div>
                <div className="my-toggle-btn-wrapper">
                  <div className="my-toggle-btn">
                    <input
                      type="checkbox"
                      id="checkbox2"
                      value="5-7"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="checkbox2">
                      <span className="on unselectable-text">5-7</span>
                      <span className="off unselectable-text">5-7</span>
                    </label>
                  </div>
                </div>
                <div className="my-toggle-btn-wrapper">
                  <div className="my-toggle-btn">
                    <input
                      type="checkbox"
                      id="checkbox3"
                      value="8-10"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="checkbox3">
                      <span className="on unselectable-text">8-10</span>
                      <span className="off unselectable-text">8-10</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 text-center">
                <div className="row">
                  <div className="col">
                    <h6>
                      <label className="unselectable-text">
                        Male
                      </label>
                    </h6>
                  </div>
                  <div className="col">
                    <h6>
                      <label className="unselectable-text">
                        Female
                      </label>
                    </h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div onClick={this.handleChange} className="demographics1 ">
                      <img src="https://img.icons8.com/offices/80/000000/person-male-skin-type-4.png"/>
                      <input
                        type="checkbox"
                        id="checkbox4"
                        style={{ display: "none" }}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div onClick={this.handleChange} className="demographics1 ">
                      <img src="https://img.icons8.com/officel/80/000000/person-female.png"/>
                      <input
                        type="checkbox5"
                        id="checkbox5"
                        style={{ display: "none" }}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                <div className="col text-center">
                  <h6><label className="form-label-check">Location</label></h6>
                </div>
              </div> */}
                {/* <div className="row"> 
                <div className="col text-center">
                  <div onClick={handleChange} className="demographics1"><VscLocation size="80px" className="demographics" /></div>
                </div>
              </div> */}
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <div>
                  <ProgressBar completed={this.state.percentvalid} height="20px" bgcolor="orange" labelColor="#000" />
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
            <div className="row">
              {/* <div className="col"> */}
              {/* {left}
              {right} */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Demographics;
