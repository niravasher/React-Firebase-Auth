import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../routes/footer";
import "../css/style.css";
import bp from "../images/bp_new.svg";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

class Profile extends Component {
  state = {
    jsondata: [],
  };

  componentDidMount() {
    axios
      .get("https://my-json-server.typicode.com/niravasher/niroggyan_profile/db")
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
            <div className="col-lg-2 col-sm-4 border-dark p-2" key={data.id}>
              {data.emp_id}
            </div>
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
            <div className="col-lg-2 col-sm-4 border-dark p-2" key={data.id}>
              {data.emp_id}
            </div>
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
            <div className="col-lg-2 col-sm-4 border-dark p-2" key={data.id}>
              {data.emp_id}
            </div>
          );
        }
      })
    ) : (
      <div className="center">No data here</div>
    );

    return (
      <>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <Navbar />
          </div>
        </div>
        <div className="bg-new3 col-12">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3">
            <div className="col mb-2 mt-4">
              <div className="card design">
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
                        <h5 className="card-title">Card title</h5>
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
              <div className="card design">
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
                        <h5 className="card-title">Card title</h5>
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
              <div className="card design">
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
                        <h5 className="card-title">Card title</h5>
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
              <div className="card design">
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
                        <h5 className="card-title">Card title</h5>
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
              <div className="card design">
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
                        <h5 className="card-title">Card title</h5>
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
              <div className="card design">
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
                        <h5 className="card-title">Card title</h5>
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
              <div className="card design">
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
                        <h5 className="card-title">Card title</h5>
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
              <div className="card design">
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
                        <h5 className="card-title">Card title</h5>
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
              <div className="card design">
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
                        <h5 className="card-title">Card title</h5>
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
        <Accordion preExpanded={['a']} className="mb-4">
          <AccordionItem uuid="a" className="bg-success text-white">
            <AccordionItemHeading className="bg-success text-white">
              <AccordionItemButton className="bg-success text-white p-3 text-center">
                &gt; What harsh truths do you prefer to ignore?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="card-body">
                <div className="container">
                  <div className="row text-center">
                    {goodData}
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="bg-warning text-white">
            <AccordionItemHeading className="bg-warning text-white">
              <AccordionItemButton className="bg-warning text-white p-3 text-center">
                &gt; Is free will real or just an illusion?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="card-body">
                <div className="container">
                  <div className="row text-center">
                    {warningData}
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="bg-danger text-white">
            <AccordionItemHeading className="bg-danger text-white">
              <AccordionItemButton className="bg-danger text-white p-3 text-center">
                &gt; Is free will real or just an illusion?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="card-body">
                <div className="container">
                  <div className="row text-center">
                    {badData}
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <div className="row">
          <Footer />
        </div>
      </>
    );
  }
}

export default Profile;
