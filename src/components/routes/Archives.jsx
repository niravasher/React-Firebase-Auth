import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../routes/footer";
import '../css/style.css'
import ReactTooltip from 'react-tooltip';
import { AiFillInfoCircle } from "react-icons/ai";

class Archives extends Component {
  render() {
    return (
      <>
        <div className="bg-new3">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
              <Navbar />
            </div>
          </div>
          <div className="container-fluid">
            <div className="row m-4">
              <div className="col-lg-1"></div>
              <div className="col-lg-12 col-sm-12 text-white upper_left mr-1">
                <table className="table table-bordered table-hover bg-light table-responsive">
                  <thead>
                    <tr>
                      <th colspan="2" className="text-center">Company <AiFillInfoCircle data-tip="Health analysis of your company is below" className="mb-1" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>As a whole, the company employees have their Lipids, Blood Sugar and Vitamin D values out of range.<br>
      There are 96, out of 116 employees in the company with some Cholesterol values out of range.<br> 
31 employees had their HDL values out of range. <br>
42 employees had their LDL values higher than the recommended range.<br>
41 employees have their total Cholesterol higher than the recommended level of 200 mg/dl, while 1 employee has their total Cholesterol critically high, at a level of 406 mg/dl.
There are 39 employees with their Triglycerides higher than the recommended value of 150 mg/dl. <br>
56 out of the 65 - 86% male employees with their Cholesterol out of range, as compared to only 40 out of 51-80% female employees with their Cholesterol out of range.
      </td>
                      <td><span>Mark</span></td>
                    </tr>
                    <tr>
                      <td> There are 50 employees in the company who may be at risk of diabetes. 21% of all the tests relating to sugar levels of the employees are out of range.<br>
43 employees had their HbA1c% higher than the recommended 5.6%, while 3 employees had their values critically high exceeding 10%.<br>
18% employees had a higher than normal Mean Plasma Glucose level and 1 employee had a critically high value of 249 mg/dl.<br>
The older employees in the company have a higher percentage-50% of being at risk of developing Diabetes, also 16 out of the 26 older female employees in the company are at a higher risk of developing Diabetes as compared to just 9 out of the 21 older male employees in the company.

</td>
                      <td><span>Mark</span></td>
                    </tr>
                    <tr>
                      <td>A shocking 109 out of the 116 employees in the company have a Vitamin D deficiency,
104 employees have their Vitamin D values below the normal 30 ng/ml, while 5 employees have their values critically low.<br>
The impact of either age or gender is statistically insignificant in the case of Vitamin D deficiency. Both males and females are equally deficient irrespective of their age.
</td>
                      <td>It was popularised in the 1960s with <span className="bg-warning phalf">abcde sdfieh</span> the release of Letraset sheets containing Lorem<span className="bg-dark phalf">Mark</span>Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row m-4">
              <div className="col-lg-1"></div>
              <div className="col-lg-5 col-sm-12 text-white upper_left mr-1">
                <table className="table table-bordered table-hover bg-light">
                  <thead>
                    <tr>
                      <th colSpan="2" className="text-center">All Male <AiFillInfoCircle data-tip="hello world" className="mb-1" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="thfirst"><span>Mark</span></td>
                      <td><span className="bg-primary phalf">Change</span></td>
                    </tr>
                    <tr>
                      <td className="thfirst"><span>Some random title</span></td>
                      <td>when an unknown printer took a galley of type and scrambled it to <span className="bg-info phalf">Some random title</span>make a type specimen book. It has survived not only five centuries</td>
                    </tr>
                    <tr>
                      <td className="thfirst"><span>this</span></td>
                      <td>It was popularised in the 1960s with <span className="bg-warning phalf">abcde sdfieh</span> the release of Letraset sheets containing Lorem<span className="bg-dark phalf">Mark</span>Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-5 col-sm-12 upper_left">
                <table className="table table-bordered table-hover bg-light">
                  <thead>
                    <tr>
                      <th colspan="2" className="text-center">Young Female <AiFillInfoCircle data-tip="hello world" className="mb-1" /></th>
                    </tr>
                  </thead>
                  <tbody className="bg-light">
                    <tr>
                      <td className="thfirst"><span>to something</span></td>
                      <td> dolor sit amet..", comes from a line in section 1.10.32.<span className="bg-primary phalf">else or</span>The standard chunk of Lorem Ipsum used since the 1500s is</td>
                    </tr>
                    <tr>
                      <td className="thfirst"><span>Some random title</span></td>
                      <td>Lorem ipsum data <span className="bg-success phalf">Some random title</span> outside of the span is existing correctly, <span className="bg-info phalf">lets see how it</span> looks when loaded in a browser</td>
                    </tr>
                    <tr>
                      <td className="thfirst"><span>I sall </span></td>
                      <td><span className="bg-warning phalf">Kill you</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row m-4">
              <div className="col-lg-1"></div>
              <div className="col-lg-5 col-sm-12 text-white upper_left mr-1">
                <table className="table table-bordered table-hover bg-light">
                  <thead>
                    <tr>
                      <th colspan="2" className="text-center">Young Male <AiFillInfoCircle data-tip="hello world" className="mb-1" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="thfirst"><span>Mark</span></td>
                      <td><span className="bg-primary phalf">Change</span></td>
                    </tr>
                    <tr>
                      <td className="thfirst"><span>Some random title</span></td>
                      <td>when an unknown printer took a galley of type and scrambled it to <span className="bg-info phalf">Some random title</span>make a type specimen book. It has survived not only five centuries</td>
                    </tr>
                    <tr>
                      <td className="thfirst"><span>this</span></td>
                      <td>It was popularised in the 1960s with <span className="bg-warning phalf">abcde sdfieh</span> the release of Letraset sheets containing Lorem<span className="bg-dark phalf">Mark</span>Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-5 col-sm-12 upper_left">
                <table className="table table-bordered table-hover bg-light">
                  <thead>
                    <tr>
                      <th colspan="2" className="text-center">Young Female <AiFillInfoCircle data-tip="hello world" className="mb-1" /></th>
                    </tr>
                  </thead>
                  <tbody className="bg-light">
                    <tr>
                      <td className="thfirst"><span>to something</span></td>
                      <td> dolor sit amet..", comes from a line in section 1.10.32.<span className="bg-primary phalf">else or</span>The standard chunk of Lorem Ipsum used since the 1500s is</td>
                    </tr>
                    <tr>
                      <td className="thfirst"><span>Some random title</span></td>
                      <td>Lorem ipsum data <span className="bg-success phalf">Some random title</span> outside of the span is existing correctly, <span className="bg-info phalf">lets see how it</span> looks when loaded in a browser</td>
                    </tr>
                    <tr>
                      <td className="thfirst"><span>I sall </span></td>
                      <td><span className="bg-warning phalf">Kill you</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row m-4">
              <div className="col-lg-1"></div>
              <div className="col-lg-5 col-sm-12 upper_left text-white mr-1">
                <table className="table table-bordered table-hover bg-light">
                  <thead>
                    <tr>
                      <th colspan="2" className="text-center">Old Male <AiFillInfoCircle data-tip="hello world" className="mb-1" /></th>
                    </tr>
                  </thead>
                  <tbody className="bg-light">
                    <tr>
                      <td className="thfirst"><span>Mark</span></td>
                      <td>Contrary to popular belief, Lorem Ipsum is not simply random text<span className="bg-danger phalf">Mark</span>It has roots in a piece of classical Latin literature from 45 BC</td>
                    </tr>
                    <tr>
                      <td className="thfirst"><span>Some random title</span></td>
                      <td>making it over 2000 years old. Richard McClintock, a Latin<span className="bg-primary phalf">Some random title</span></td>
                    </tr>
                    <tr>
                      <td className="thfirst"><span>Mark</span></td>
                      <td><span className="bg-success phalf">Mark</span>passage, and going through the cites of the word in classical</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-5 col-sm-12 upper_left">
                <table className="table table-bordered table-hover bg-light">
                  <thead>
                    <tr>
                      <th colspan="2" className="text-center">Old Female <AiFillInfoCircle data-tip="hello world" className="mb-1" /></th>
                    </tr>
                  </thead>
                  <tbody className="bg-light">
                    <tr>
                      <td className="thfirst"><span>Mark</span></td>
                      <td><span className="bg-warning phalf">Mark</span> The standard chunk of Lorem Ipsum used since the 1500s is</td>
                    </tr>
                    <tr>
                      <td className="thfirst"><span>Some random title</span></td>
                      <td>Here is a <span className="bg-info phalf">Some random title</span>literature, discovered the undoubtable source. Lorem Ipsum</td>
                    </tr>
                    <tr>
                      <td className="thfirst"><span>Mark</span></td>
                      <td>comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum<span className="bg-secondary phalf">Mark</span>BC. This book is a treatise on the theory of ethics, very popular</td>
                    </tr>
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
      </>
    );
  };
}
export default Archives;
