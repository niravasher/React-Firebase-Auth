import React, { useState, Component } from "react";
import "../css/Toggle.css";
import axios from "axios";
import Oldmale from "../images/oldmale.svg"
import Oldfemale from "../images/oldfemale.svg"

class Demographics extends Component {
  state = {
    jsondata: [],
    percentvalid: 0,
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
  };
  componentDidMount() {
    
    axios
      .get(
        "https://my-json-server.typicode.com/harsh-singhal7385/json-data-practice/db"
      )
      .then((res) => {
        this.setState({
          jsondata: res.data.age_gender_data,
        });
      });
  }

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
                    <div className="demographics1">
                      <img
                        className="checkmark"
                        src={Oldmale}
                        alt=""
                      />
                      <input
                        id="checkbox1"
                        type="checkbox"
                        className="checkbox"
                        onChange={this.props.clickIcon}
                        checked={this.props.first}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="demographics1">
                      <img
                        className="checkmark"
                        src={Oldfemale}
                        alt=""
                      />
                      <input
                        id="checkbox2"
                        type="checkbox"
                        className="checkbox"
                        onChange={this.props.clickIcon}
                        checked={this.props.second}
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
                    <div className="demographics1">
                      <img
                        className="checkmark"
                        src="https://img.icons8.com/offices/80/000000/person-male-skin-type-4.png"
                        alt=""
                      />
                      <input
                        id="checkbox3"
                        type="checkbox"
                        className="checkbox"
                        onChange={this.props.clickIcon}
                        checked={this.props.third}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="demographics1 ">
                      <img
                        className="checkmark"
                        src="https://img.icons8.com/officel/80/000000/person-female.png"
                        alt=""
                      />
                      <input
                        id="checkbox4"
                        type="checkbox"
                        className="checkbox"
                        onChange={this.props.clickIcon}
                        checked={this.props.fourth}
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
