import React, { useRef } from 'react';
import '../css/style.css'
import { ReactComponent as Anemia } from '../images/cards/anemia.svg';
import { ReactComponent as B12 } from '../images/cards/B12.svg';
import { ReactComponent as Kidney } from '../images/cards/kidney.svg';
import { ReactComponent as Lipids } from '../images/cards/lipids.svg';
import { ReactComponent as Liver } from '../images/cards/liver.svg';
import { ReactComponent as Thyroid } from '../images/cards/thyroid.svg';
import { ReactComponent as VitD } from '../images/cards/VitD.svg';
import { ReactComponent as Diabetes } from '../images/cards/diabetes.svg';
import ReactTooltip from 'react-tooltip';
import { AiFillInfoCircle } from "react-icons/ai";

const DashCard = (props) => {
    var show = false;
    var showFirst = false;
    var showSecond = false;
    var showThird = false;
    var showFourth = false;
    var showFifth = false;
    var showSixth = false;
    var showSeventh = false;
    var showEighth = false;

    if (props.second || props.fourth || props.first || props.third) {
        show = true;
    }

    if (props.first === true && props.second === false && props.third === false && props.fourth === false) {
        showFirst = false;
        showSecond = false;
        showThird = false;
        showFourth = true;
        showFifth = true;
        showSixth = false;
        showSeventh = true;
        showEighth = true;
    }

    else if (props.first === false && props.second === true && props.third === false && props.fourth === false) {
        showFirst = true;
        showSecond = false;
        showThird = true;
        showFourth = true;
        showFifth = false;
        showSixth = true;
        showSeventh = true;
        showEighth = true;
    }

    else if (props.first === false && props.second === false && props.third === true && props.fourth === false) {
        showFirst = false;
        showSecond = true;
        showThird = false;
        showFourth = true;
        showFifth = true;
        showSixth = false;
        showSeventh = false;
        showEighth = true;
    }

    else if (props.first === false && props.second === false && props.third === false && props.fourth === true) {
        showFirst = true;
        showSecond = false;
        showThird = true;
        showFourth = false;
        showFifth = false;
        showSixth = true;
        showSeventh = false;
        showEighth = true;
    }

    else if (props.first === true && props.second === false && props.third === true && props.fourth === false) {
        showFirst = false;
        showSecond = false;
        showThird = false;
        showFourth = true;
        showFifth = true;
        showSixth = false;
        showSeventh = true;
        showEighth = true;
    }

    else if (props.first === false && props.second === true && props.third === false && props.fourth === true) {
        showFirst = true;
        showSecond = false;
        showThird = true;
        showFourth = false;
        showFifth = false;
        showSixth = true;
        showSeventh = false;
        showEighth = true;
    }

    else if (props.first === true && props.second === true && props.third === true && props.fourth === true) {
        showFirst = false;
        showSecond = false;
        showThird = false;
        showFourth = true;
        showFifth = false;
        showSixth = false;
        showSeventh = true;
        showEighth = true;
    }

    return (
        <div className="container">
            {(show) && <h2 className="text-center pt-4 pb-2" id="title">Concern Areas <AiFillInfoCircle data-tip="Below are the areas of concern for the selected group of employees" className="mb-1" /></h2>}
            <div className="row">
                {showFirst && <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card shadow round_test">
                    <h5 className="text-center card-header bolded text-uppercase">Anemia</h5>
                        <div className="card-body text-center">
                            <Anemia className="mb-4" />
                            <h6 className="text-center bolded"></h6>
                        </div>
                    </div>
                </div>}
                {showSecond && <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow round_test">
                    <h5 className="text-center card-header bolded text-uppercase">Vitamin B12</h5>
                        <div className="card-body text-center">
                            <B12 className="mb-4" />
                            <h6 className="text-center bolded"></h6>
                        </div>
                    </div>
                </div>}
                {showThird && <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow round_test">
                        <h5 className="text-center card-header bolded text-uppercase">Kidney</h5>
                        <div className="card-body text-center">
                            <Kidney className="mb-4" />
                            <h6 className="text-center bolded"></h6>
                        </div>
                    </div>
                </div>}
                {showFourth && <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow round_test">
                    <h5 className="text-center card-header bolded text-uppercase">Lipids</h5>
                        <div className="card-body text-center">
                            <Lipids className="mb-4" />
                            <h6 className="text-center bolded"></h6>
                        </div>
                    </div>
                </div>}
                {showFifth && <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card shadow round_test">
                    <h5 className="text-center card-header bolded text-uppercase">Liver</h5>
                        <div className="card-body text-center">
                            <Liver className="mb-4" />
                            <h6 className="text-center bolded"></h6>
                        </div>
                    </div>
                </div>}
                {showSixth && <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow round_test">
                    <h5 className="text-center card-header bolded text-uppercase">Thyroid</h5>
                        <div className="card-body text-center">
                            <Thyroid className="mb-4" />
                            <h6 className="text-center bolded"></h6>
                        </div>
                    </div>
                </div>}
                {showSeventh && <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow round_test">
                        <h5 className="text-center card-header bolded text-uppercase">Diabetes</h5>
                        <div className="card-body text-center">
                            <Diabetes className="mb-4" />
                            <h6 className="text-center bolded"></h6>
                        </div>
                    </div>
                </div>}
                {showEighth && <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow round_test">
                        <h5 className="text-center card-header bolded text-uppercase">Vitamin D</h5>
                        <div className="card-body text-center">
                            <VitD className="mb-4" />
                            <h6 className="text-center bolded"></h6>
                        </div>
                    </div>
                </div>}
            </div>
            <ReactTooltip />
        </div>
    );
}

export default DashCard;
