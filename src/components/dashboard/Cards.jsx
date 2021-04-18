import React from 'react';
import '../css/style.css'
import { ReactComponent as Anemia } from '../images/cards/anemia.svg';
import { ReactComponent as B12 } from '../images/cards/B12.svg';
import { ReactComponent as Kidney } from '../images/cards/kidney.svg';
import { ReactComponent as Lipids } from '../images/cards/lipids.svg';
import { ReactComponent as Liver } from '../images/cards/liver.svg';
import { ReactComponent as Thyroid } from '../images/cards/thyroid.svg';
import { ReactComponent as VitD } from '../images/cards/VitD.svg';
import ReactTooltip from 'react-tooltip';
import { AiFillInfoCircle } from "react-icons/ai";

const DashCard = () => {

    return (
        <div className="container">
            <h2 className="text-center pt-4 pb-2">Critical Areas <AiFillInfoCircle data-tip="hello world" class="mb-1" /></h2>
            <div className="row">
                <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card shadow round_test">
                    <h5 className="text-center card-header bolded text-uppercase">Anemia</h5>
                        <div className="card-body text-center">
                            <Anemia className="mb-4" />
                            <h6 className="text-center bolded">120/80</h6>
                        </div>
                    </div>
                </div>
                <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow round_test">
                    <h5 className="text-center card-header bolded text-uppercase">Vitamin B12</h5>
                        <div className="card-body text-center">
                            <B12 className="mb-4" />
                            <h6 className="text-center bolded">120/80</h6>
                        </div>
                    </div>
                </div>
                <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow round_test">
                        <h5 className="text-center card-header bolded text-uppercase">Kidney</h5>
                        <div className="card-body text-center">
                            <Kidney className="mb-4" />
                            <h6 className="text-center bolded">158</h6>
                        </div>
                    </div>
                </div>
                <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow round_test">
                    <h5 className="text-center card-header bolded text-uppercase">Lipids</h5>
                        <div className="card-body text-center">
                            <Lipids className="mb-4" />
                            <h6 className="text-center bolded">120 kg</h6>
                        </div>
                    </div>
                </div>
                <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card shadow round_test">
                    <h5 className="text-center card-header bolded text-uppercase">Liver</h5>
                        <div className="card-body text-center">
                            <Liver className="mb-4" />
                            <h6 className="text-center bolded">120/80</h6>
                        </div>
                    </div>
                </div>
                <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow round_test">
                    <h5 className="text-center card-header bolded text-uppercase">Thyroid</h5>
                        <div className="card-body text-center">
                            <Thyroid className="mb-4" />
                            <h6 className="text-center bolded">120/80</h6>
                        </div>
                    </div>
                </div>
                <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow round_test">
                        <h5 className="text-center card-header bolded text-uppercase">Vitamin D</h5>
                        <div className="card-body text-center">
                            <VitD className="mb-4" />
                            <h6 className="text-center bolded">158</h6>
                        </div>
                    </div>
                </div>
            </div>
            <ReactTooltip />
        </div>
    );
}

export default DashCard;
