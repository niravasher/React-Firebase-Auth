import React, { Component } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import bloodCount from "../images/bloodCount.svg";
import kidney from "../images/kidney.svg";
import lipids from "../images/lipids.svg";
import thyroid from "../images/thyroid.svg";
import diabetes from "../images/diabetes.svg";
import liver from "../images/liver.svg";
import electrolytes from "../images/electrolytes.svg";
import urine from "../images/urine.svg";
import anemia from "../images/anemia.svg";
import vitaminB12 from "../images/vitaminB12.svg";
import vitaminD from "../images/vitaminD.svg";

import CBC from "../images/modal/CBC.svg";
import Kidney from "../images/modal/Kidneys.svg";
import Lipids from "../images/modal/Lipids.svg";
import Thyroid from "../images/modal/Thyroid.svg";
import Diabetes from "../images/modal/Diabetes.svg";
import Liver from "../images/modal/Liver.svg";
import Electrolytes from "../images/modal/Electrolytes.svg";
import Urine from "../images/modal/Urine.svg";
import Anemia from "../images/modal/Anemia.svg";
import VitaminB12 from "../images/modal/VitaminB12.svg";
import VitaminD from "../images/modal/VitaminD.svg";

import "../css/tests.css";
import axios from "axios";
import ReactTooltip from "react-tooltip";
import { AiFillInfoCircle } from "react-icons/ai";

class Tests extends Component {
  state = {
    jsondata: [],
    openModal: false,
    nodeInnerText: "",
  };
  componentDidMount() {
    axios
      .get(
        "https://my-json-server.typicode.com/niravasher/niroggyan_central/db"
      )
      .then((res) => {
        this.setState({
          jsondata: res.data.central_data,
        });
      });
  }

  BoolToInt = (bool) => {
    if (bool === true) return 1;
    else return 0;
  };

  cardClicked = (e) => {
    var node = e.target;
    this.setState({
      openModal: true,
      nodeInnerText: node.textContent,
    });
  };

  closeModal = () => {
    this.setState({
      openModal: false,
    });
  };

  render() {
    var color;
    const denominator =
      (this.BoolToInt(this.props.young_male) +
        this.BoolToInt(this.props.young_female) +
        this.BoolToInt(this.props.old_male) +
        this.BoolToInt(this.props.old_female)) *
      100;
    const { jsondata } = this.state;
    const centralData = jsondata.length ? (
      jsondata.map((data) => {
        var percent = Math.floor(
          ((data.young_male_abnormal * this.BoolToInt(this.props.young_male) +
            data.young_female_abnormal *
              this.BoolToInt(this.props.young_female) +
            data.old_male_abnormal * this.BoolToInt(this.props.old_male) +
            data.old_female_abnormal * this.BoolToInt(this.props.old_female)) /
            denominator) *
            100
        );
        if (percent < 40) color = "green";
        else if (percent >= 40 && percent < 60) color = "orange";
        else if (percent >= 60) color = "red";
        return (
          <div className="row pb-1 custom_font" key={data.profile_id}>
            <div className="col-lg-12 col-11">
              <div class="card shadow">
                <div class="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-1 text-left hidden-xs">
                        {data.profile_id}
                      </div>
                      <div className="col-lg-5 col-9 text-left">
                        <span>
                          {data.profile_name === "Complete Blood Count" && (
                            <img src={bloodCount} />
                          )}
                          {data.profile_name === "Kidney" && (
                            <img src={kidney} alt="" />
                          )}
                          {data.profile_name === "Lipids" && (
                            <img src={lipids} />
                          )}
                          {data.profile_name === "Thyroid" && (
                            <img src={thyroid} alt="" />
                          )}
                          {data.profile_name === "Liver" && <img src={liver} />}
                          {data.profile_name === "Diabetes" && (
                            <img src={diabetes} alt="" />
                          )}
                          {data.profile_name === "Vitamin D" && (
                            <img src={vitaminD} />
                          )}
                          {data.profile_name === "Vitamin B12" && (
                            <img src={vitaminB12} alt="" />
                          )}
                          {data.profile_name === "Electrolytes & Minerals" && (
                            <img src={electrolytes} />
                          )}
                          {data.profile_name === "Anemia" && (
                            <img src={anemia} alt="" />
                          )}
                          {data.profile_name === "Urine" && <img src={urine} />}
                        </span>{" "}
                        <span
                          onClick={this.cardClicked}
                          className="hover_change"
                        >
                          {data.profile_name}
                        </span>
                      </div>
                      <div className="col-lg-2 col-3 text-center">
                        {data.test_no}
                      </div>
                      <div className="col-lg-4 col-12 text-center">
                        <ProgressBar
                          bgColor={color}
                          labelColor="black"
                          completed={percent || 0}
                        />
                      </div>
                      <div className="col-lg-12 pt-2 text-secondary text-center">
                        <small>{data.comment}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No data here</div>
    );

    return (
      <div className="container ml-4">
        <div className="row no-gutters text-center bebas_neue">
          <div className="col-lg-12">
            <h2>
              Some header here{" "}
              <AiFillInfoCircle data-tip="hello world" class="mb-1" />
            </h2>
            <div className="card border-0 bg-new3">
              <div className="card-body">
                <div className="container">
                  <div className="row text-uppercase bolded">
                    <div className="col-lg-1 hidden-xs">
                      <span data-tip="hello world">Sr.</span>
                    </div>
                    <div className="col-lg-5 col-4 text-left pl-5">
                      <span data-tip="hello world">Profile</span>
                    </div>
                    <div className="col-lg-2 col-4">
                      <span data-tip="hello world">Tests</span>
                    </div>
                    <div className="col-lg-4 col-4">
                      <span data-tip="hello world">Out Of Range</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {centralData}

        {this.state.openModal && (
          <div className="row text-center human_body">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <div class="card border bg-eee border-0">
                {this.state.nodeInnerText === "Complete Blood Count" && (
                  <img
                    class="card-img-top p-3"
                    src={CBC}
                    alt="Card image cap"
                  />
                )}
                {this.state.nodeInnerText === "Kidney" && (
                  <img
                    class="card-img-top p-3"
                    src={Kidney}
                    alt="Card image cap"
                  />
                )}
                {this.state.nodeInnerText === "Lipids" && (
                  <img
                    class="card-img-top p-3"
                    src={Lipids}
                    alt="Card image cap"
                  />
                )}
                {this.state.nodeInnerText === "Thyroid" && (
                  <img
                    class="card-img-top p-3"
                    src={Thyroid}
                    alt="Card image cap"
                  />
                )}
                {this.state.nodeInnerText === "Liver" && (
                  <img
                    class="card-img-top p-3"
                    src={Liver}
                    alt="Card image cap"
                  />
                )}
                {this.state.nodeInnerText === "Diabetes" && (
                  <img
                    class="card-img-top p-3"
                    src={Diabetes}
                    alt="Card image cap"
                  />
                )}
                {this.state.nodeInnerText === "Vitamin D" && (
                  <img
                    class="card-img-top p-3"
                    src={VitaminD}
                    alt="Card image cap"
                  />
                )}
                {this.state.nodeInnerText === "Vitamin B12" && (
                  <img
                    class="card-img-top p-3"
                    src={VitaminB12}
                    alt="Card image cap"
                  />
                )}
                {this.state.nodeInnerText === "Electrolytes & Minerals" && (
                  <img
                    class="card-img-top p-3"
                    src={Electrolytes}
                    alt="Card image cap"
                  />
                )}
                {this.state.nodeInnerText === "Anemia" && (
                  <img
                    class="card-img-top p-3"
                    src={Anemia}
                    alt="Card image cap"
                  />
                )}
                {this.state.nodeInnerText === "Urine" && (
                  <img
                    class="card-img-top p-3"
                    src={Urine}
                    alt="Card image cap"
                  />
                )}
              </div>
            </div>
            <div className="col-lg-4"></div>
            <div class="col-lg-12">
              <div>
                <h5>{this.state.nodeInnerText}</h5>
                {this.state.nodeInnerText === "Complete Blood Count" && (
                  <p class="card-text">
                    This is complete Blood Count description This is complete Blood Count description This is complete Blood Count description This is complete Blood Count description 
                  </p>
                )}
                {this.state.nodeInnerText === "Kidney" && (
                  <p class="card-text">This is Kidney description</p>
                )}
                {this.state.nodeInnerText === "Lipids" && (
                  <p class="card-text">This is Lipids description</p>
                )}
                {this.state.nodeInnerText === "Thyroid" && (
                  <p class="card-text">This is Thyroid description</p>
                )}
                {this.state.nodeInnerText === "Liver" && (
                  <p class="card-text">This is Liver description</p>
                )}
                {this.state.nodeInnerText === "Diabetes" && (
                  <p class="card-text">This is Diabetes description</p>
                )}
                {this.state.nodeInnerText === "Vitamin D" && (
                  <p class="card-text">This is Vitamin D description</p>
                )}
                {this.state.nodeInnerText === "Vitamin B12" && (
                  <p class="card-text">This is Vitamin B12 description</p>
                )}
                {this.state.nodeInnerText === "Electrolytes & Minerals" && (
                  <p class="card-text">This is Electrolytes description</p>
                )}
                {this.state.nodeInnerText === "Anemia" && (
                  <p class="card-text">This is Anemia description</p>
                )}
                {this.state.nodeInnerText === "Urine" && (
                  <p class="card-text">This is Urine description</p>
                )}
                <button
                  type="button"
                  class="btn btn-primary mb-2"
                  onClick={this.closeModal}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        )}
        <ReactTooltip />
      </div>
    );
  }
}

export default Tests;
