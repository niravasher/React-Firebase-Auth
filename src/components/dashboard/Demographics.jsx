import React, { useState, Component } from "react";
import "../css/Toggle.css";
import axios from "axios";
import Oldmale from "../images/oldmale.svg";
import Oldfemale from "../images/oldfemale.svg";
import Youngmale from "../images/youngmale.svg";
import Youngfemale from "../images/youngfemale.svg";
import DashCard from "./Cards.jsx";
import ReactTooltip from "react-tooltip";
import { AiFillInfoCircle } from "react-icons/ai";

class Demographics extends Component {
  state = {
    professionals: 0,
    no_tests: 0,
    old_male_count: 0,
    old_male_count_percent: 0,
    old_female_count: 0,
    old_female_count_percent: 0,
    young_male_count: 0,
    young_male_count_percent: 0,
    young_female_count: 0,
    young_female_count_percent: 0,
  };
  componentDidMount() {
    axios
      .get(
        "https://rnxsohimg1.execute-api.ap-south-1.amazonaws.com/default/dashboardJson/"
      )
      .then((res) => {
        this.setState({
          professionals: res.data.tests[0].professionals,
          no_tests: res.data.tests[0].no_tests,
          old_male_count: res.data.tests[0].old_male_count,
          old_male_count_percent: res.data.tests[0].old_male_count_percent,
          old_female_count: res.data.tests[0].old_female_count,
          old_female_count_percent: res.data.tests[0].old_female_count_percent,
          young_male_count: res.data.tests[0].young_male_count,
          young_male_count_percent: res.data.tests[0].young_male_count_percent,
          young_female_count: res.data.tests[0].young_female_count,
          young_female_count_percent:
            res.data.tests[0].young_female_count_percent,
        });
      });
  }

  render() {
    const {
      professionals,
      no_tests,
      old_male_count,
      old_male_count_percent,
      old_female_count,
      old_female_count_percent,
      young_male_count,
      young_male_count_percent,
      young_female_count,
      young_female_count_percent,
    } = this.state;
    return (
      <>
        <div className="container">
          <div className="card shadow mt-2 round_test">
            <div className="card-header">
              <h4 className="h4 text-center text-uppercase">
                Statistics{" "}
                <AiFillInfoCircle data-tip="Choose the group to display health statistics" className="mb-1" />
              </h4>
            </div>
            <div className="card-body">
              <p className="text-center fontchange">
                Total No. of Professionals who got tested:{" "}
                <b>{professionals}</b>
              </p>
              <p className="text-center fontchange">
                No. of tests conducted for every individual: <b>{no_tests}</b>
              </p>
              <div className="row">
                <div className="col-lg-3 d-flex justify-content-center">
                  <label className="containers">
                    <input
                      id="button1"
                      type="checkbox"
                      onChange={this.props.clickIcon}
                      checked={this.props.FirstThird}
                    />
                    <span className="checkmarks"></span>
                  </label>
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                  <label className="containers">
                    <input
                      id="button2"
                      type="checkbox"
                      onChange={this.props.clickIcon}
                      checked={this.props.SecondFourth}
                    />
                    <span className="checkmarks"></span>
                  </label>
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                  <label className="containers">
                    <input
                      id="button3"
                      type="checkbox"
                      onChange={this.props.clickIcon}
                      checked={this.props.all}
                    />
                    <span className="checkmarks"></span>
                  </label>
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                  <button
                    className="btn btn-secondary"
                    id="button4"
                    type="checkbox"
                    onClick={this.props.clickIcon}
                  >
                    Reset
                  </button>
                </div>
              </div>
              <div className="row text-center mb-4">
                <div className="col-lg-3">All Male</div>
                <div className="col-lg-3">All Female</div>
                <div className="col-lg-3">Select All</div>
              </div>
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="row">
                    <div className="col">
                      <h6>
                        <label className="unselectable-text bolded">
                          OLD MALE
                        </label>
                      </h6>
                    </div>
                    <div className="col">
                      <h6>
                        <label className="unselectable-text bolded">
                          OLD FEMALE
                        </label>
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <img src={Oldmale} alt="" />
                      <div className="demographics1">
                        <label className="containerz">
                          <input
                            id="checkbox1"
                            type="checkbox"
                            disabled={this.props.disabledFirst}
                            onChange={this.props.clickIcon}
                            checked={this.props.first}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <span>
                        Count: {old_male_count} ({old_male_count_percent}%)
                      </span>
                    </div>
                    <div className="col">
                      <img src={Oldfemale} alt="" />
                      <div className="demographics1">
                        <label className="containerz">
                          <input
                            id="checkbox2"
                            type="checkbox"
                            disabled={this.props.disabledSecond}
                            onChange={this.props.clickIcon}
                            checked={this.props.second}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <span>
                        Count: {old_female_count} ({old_female_count_percent}%)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card text-white border-0">
                  This is white space
                  <br />
                  This
                </div>
                <div className="col-lg-12 text-center">
                  <div className="row">
                    <div className="col">
                      <h6>
                        <label className="unselectable-text bolded">
                          YOUNG MALE
                        </label>
                      </h6>
                    </div>
                    <div className="col">
                      <h6>
                        <label className="unselectable-text bolded">
                          YOUNG FEMALE
                        </label>
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <img src={Youngmale} alt="" />
                      <div className="demographics1">
                        <label className="containerz">
                          <input
                            id="checkbox3"
                            type="checkbox"
                            disabled={this.props.disabledThird}
                            onChange={this.props.clickIcon}
                            checked={this.props.third}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <span>
                        Count: {young_male_count} ({young_male_count_percent}%)
                      </span>
                    </div>
                    <div className="col">
                      <img src={Youngfemale} alt="" />
                      <div className="demographics1 ">
                        <label className="containerz">
                          <input
                            id="checkbox4"
                            type="checkbox"
                            disabled={this.props.disabledFourth}
                            onChange={this.props.clickIcon}
                            checked={this.props.fourth}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <span>
                        Count: {young_female_count} (
                        {young_female_count_percent}%)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-7 col-sm-11 text-left my-4">
            <DashCard first={this.props.first} second={this.props.second} third={this.props.third} fourth={this.props.fourth} />
          </div>
        </div>
        <ReactTooltip />
      </>
    );
  }
}

export default Demographics;
