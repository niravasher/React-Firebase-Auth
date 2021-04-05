import React, { Component } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import bloodCount from "../images/bloodCount.svg";
import RapidAntigen from "../images/rapidAntigen.svg";
import HyperGlycemia from "../images/hyperglycemia.svg";
import Other from "../images/bloodCount.svg";
import Body from "../images/body.svg";
import RBC from "../images/rbc.svg";
import "../css/tests.css";
import axios from "axios";

class Tests extends Component {
  state = {
    jsondata: [],
    openModal: false,
    nodeInnerText: ''
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
      nodeInnerText: node.textContent
    })
  }

  closeModal = () => {
    this.setState({
      openModal: false
    })
  }

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
                          {data.profile_name === "Rapid Antigen" && (
                            <img src={RapidAntigen} alt="" />
                          )}
                          {data.profile_name === "HyperGlycemia" && (
                            <img src={HyperGlycemia} alt="" />
                          )}
                          {data.profile_name === "Some other" && (
                            <img src={Other} alt="" />
                          )}
                        </span>{" "}
                        <span onClick={this.cardClicked} className="hover_change">{data.profile_name}</span>
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
            <div className="card border-0 bg-new3">
              <div className="card-body">
                <div className="container">
                  <div className="row text-uppercase bolded">
                    <div className="col-lg-1 hidden-xs">Sr.</div>
                    <div className="col-lg-5 col-4">Profile</div>
                    <div className="col-lg-2 col-4">Tests</div>
                    <div className="col-lg-4 col-4">Out of Range</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {centralData}

        { this.state.openModal && <div className="row text-center human_body">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div class="card border bg-eee border-0">
              { this.state.nodeInnerText === 'Complete Blood Count' && <img class="card-img-top p-5" src={RBC} alt="Card image cap" /> }
              { this.state.nodeInnerText === 'HyperGlycemia' && <img class="card-img-top p-5" src={Body} alt="Card image cap" /> }
              { this.state.nodeInnerText === 'Rapid Antigen' && <img class="card-img-top p-5" src={Body} alt="Card image cap" /> }
              { this.state.nodeInnerText === 'Some other' && <img class="card-img-top p-5" src={Body} alt="Card image cap" /> }
              <div class="card-body">
                <h5 class="card-title">{this.state.nodeInnerText}</h5>
                { this.state.nodeInnerText === 'Complete Blood Count' && <p class="card-text">
                  This is complete Blood Count description
                </p> }
                { this.state.nodeInnerText === 'HyperGlycemia' && <p class="card-text">
                  This is HyperGlycemia description
                </p> }
                { this.state.nodeInnerText === 'Rapid Antigen' && <p class="card-text">
                  This is Rapid Antigen description
                </p> }
                { this.state.nodeInnerText === 'Some other' && <p class="card-text">
                  This is Some other description
                </p> }
                <button type="button" class="btn btn-primary" onClick={this.closeModal}>
                  CLOSE
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div> }
      </div>
    );
  }
}

export default Tests;
