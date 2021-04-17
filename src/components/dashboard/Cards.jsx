import React from 'react';
import '../css/style.css'
import { ReactComponent as Blood } from '../images/blood.svg';
import { ReactComponent as BP } from '../images/bp.svg';
import { ReactComponent as HT } from '../images/ht.svg';
import { ReactComponent as WT } from '../images/wt.svg';
import ReactTooltip from 'react-tooltip';
import { AiFillInfoCircle } from "react-icons/ai";

const DashCard = () => {

    return (
        <div className="container">
            <h2 className="text-center pt-4 pb-2">Critical Areas <AiFillInfoCircle data-tip="hello world" class="mb-1" /></h2>
            <div className="row">
                <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card shadow round_test">
                    <h5 className="text-center card-header bolded text-uppercase">Blood</h5>
                        <div className="card-body text-center">
                            <Blood className="mb-4" />
                            <h6 className="text-center bolded">120/80</h6>
                        </div>
                    </div>
                </div>
                <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow round_test">
                    <h5 className="text-center card-header bolded text-uppercase">Pressure</h5>
                        <div className="card-body text-center">
                            <BP className="mb-4" />
                            <h6 className="text-center bolded">120/80</h6>
                        </div>
                    </div>
                </div>
                <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow round_test">
                        <h5 className="text-center card-header bolded text-uppercase">Height</h5>
                        <div className="card-body text-center">
                            <HT className="mb-4" />
                            <h6 className="text-center bolded">158</h6>
                        </div>
                    </div>
                </div>
                <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow round_test">
                    <h5 className="text-center card-header bolded text-uppercase">Weight</h5>
                        <div className="card-body text-center">
                            <WT className="mb-4" />
                            <h6 className="text-center bolded">120 kg</h6>
                        </div>
                    </div>
                </div>
            </div>
            <ReactTooltip />
        </div>
    );
}

export default DashCard;
