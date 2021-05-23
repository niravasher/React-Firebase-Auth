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
                      <td> As a whole, the company employees have their Lipids, Blood Sugar and Vitamin D values out of range.<br>
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
                      <td> A shocking 109 out of the 116 employees in the company have a Vitamin D deficiency,
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
                      <th colSpan="2" className="text-center">All Male Employees <AiFillInfoCircle data-tip="Health analysis of the male employees in your company" className="mb-1" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="thfirst"><span> The male employees in the company have predominantly Lipids, Liver, Blood Sugar and Vitamin D values being out of range.<br>

Out of the 65 male employees in the company, 56 male employees – 86% have their Lipids out of range. With 32 employees having a higher than normal LDL value.<br>

53 out of the 65 male employees in the company have some or the other Liver parameter which is out of range, with 34 out of these 53 employees having a lower than normal Globulin level.<br>

29 of the male employees are at a higher risk of being Diabetic. 25 employees have a higher than the normal value of 5.6% of HbA1c.<br>

63 male employees, out of the 65 in the company suffer from a Vitamin D deficiency.<br>
</span></td>
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
                      <th colspan="2" className="text-center">All Female Employees <AiFillInfoCircle data-tip="Health analysis of the female employees in your company" className="mb-1" /></th>
                    </tr>
                  </thead>
                  <tbody className="bg-light">
                    <tr>
                      <td className="thfirst"><span>The female employees in the company have their Kidney, Thyroid, Vitamin D and Hemoglobin levels out of range.<br>

Out of the 51 female employees in the company, 36 have some Kidney parameter which is out of range. The most common being Creatinine level low, below the recommended 0.6 mg/dl. 33 female employees had their Creatinine levels lower than normal.<br>

20 of the female employees have their Thyroid levels which are off. The parameter which is most out of range is the Thyroid Stimulating Hormone (TSH), with 14 employees having high TSH.<br>

46 of the 51 female employees in the company have a Vitamin D deficiency.<br>

28 of the female employees are at risk of being Anemic, with 27 having low Iron levels and Transferrin Saturation levels.

</span></td>
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
                      <th colspan="2" className="text-center">Younger Male Employees <AiFillInfoCircle data-tip="Health analysis of the younger male employees (<35 years) in your company" className="mb-1" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="thfirst"><span>The younger male employees are seen to have their Lipids, Liver, Vitamin D and Vitamin B12 values out of range. <br>
Out of the 44 young male employees in the company, 36 employees have their Lipids out of range. 36 of these employees have their Non-HDL Cholesterol higher than the recommended range. <br>

36 out of the 44 younger male employees in the company have some or the other Liver parameter which is out of range. 22 of the young male employees have their Alanine amino Transferase - (ALT / SGPT) test value more than the recommended 52 U/L.<br>

42 of the young males in the company have a Vitamin D deficiency.<br>

9 young male employees suffer from a Vitamin B12 deficiency. Out of these 9, there are 2 employees who have a critically low value of Vitamin B12.<br>
</span></td>
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
                      <th colspan="2" className="text-center">Younger Female Employees<AiFillInfoCircle data-tip="Health analysis of the younger female employees (<35 years) in your company" className="mb-1" /></th>
                    </tr>
                  </thead>
                  <tbody className="bg-light">
                    <tr>
                      <td className="thfirst"><span>The younger female employees suffer from mostly their Kidney, Thyroid, Vitamin D and Hemoglobin levels being out of range. <br>

Out of the 25 young female employees in the company, 19 have some Kidney parameter which is out of range. 18 employees have their creatinine level low, below the recommended 0.6 mg/dl. <br>

10 of the young female employees have their thyroid levels which are off. The parameter which is most out of range is the Thyroid Stimulating Hormone (TSH), with 9 employees having high TSH. <br>

23 out of the 25 young female employees in the company suffer from a Vitamin D deficiency. <br>

15 of the young female employees are at risk of being anemic, with 13 out of these 15 having a lower than normal Transferrin Saturation.<br>
</span></td>
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
                      <th colspan="2" className="text-center">Older Male Employees<AiFillInfoCircle data-tip="Health analysis of the older male employees (>35 years) in your company" className="mb-1" /></th>
                    </tr>
                  </thead>
                  <tbody className="bg-light">
                    <tr>
                      <td className="thfirst"><span>The older male employees in the company have their Lipids, Liver, Blood Sugar and Vitamin D values being out of range.<br>

Out of the 21 older male employees in the company, 20 employees have their Lipids out of range. All 20 of these employees have their Non-HDL Cholesterol higher than the recommended range. <br>

17 out of the 21 older male employees in the company have some or the other Liver parameter which is out of range. The Globulin level of 11 employees is lower than the recommended 2.5 mg/dl.<br>

16 of the older male employees are at risk of being Diabetic. 8 of these employees-50%, have their HbA1c out of range. <br>

All 21 of the older male employees are Vitamin D deficient.<br>
</span></td>
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
                      <th colspan="2" className="text-center">Older Female Employees <AiFillInfoCircle data-tip="Health analysis of the older female employees (>35 years) in your company" className="mb-1" /></th>
                    </tr>
                  </thead>
                  <tbody className="bg-light">
                    <tr>
                      <td className="thfirst"><span>The older female employees have mostly their Kidney, Lipids, Thyroid, Blood Sugar, Vitamin D and Hemoglobin levels which are out of range.<br>

Out of the 26 older female employees in the company, 17 have some Kidney parameter which is out of range. All 17 employees have their creatinine level low, below the recommended 0.6 mg/dl.<br>

24 older female employees have their Cholesterol levels off. Most have their Cholesterol:HDL Ratio out of range. 18 had their Cholesterol:HDL Ratio higher than normal.<br>

10 of the older female employees have their thyroid levels which are off. The parameter which is most out of range is the Tri-Iodothyronine Total (TT3), with 8 employees having low TT3.<br>

23 of the 26 older female employees in the company have a Vitamin D deficiency.<br>

14 of the older female employees are at risk of being anemic, with all having low transferrin saturation levels.
</span></td>
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
