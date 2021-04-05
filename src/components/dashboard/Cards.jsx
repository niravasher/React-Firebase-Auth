import React from 'react';
import '../css/style.css'
import { ReactComponent as Blood } from '../images/blood.svg';
import { ReactComponent as BP } from '../images/bp.svg';
import { ReactComponent as HT } from '../images/ht.svg';
import { ReactComponent as WT } from '../images/wt.svg';

const DashCard = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow">
                    <h5 className="text-center card-header bolded text-uppercase">Blood</h5>
                        <div className="card-body text-center">
                            <Blood className="mb-4" />
                            <h6 className="text-center bolded">120/80</h6>
                        </div>
                    </div>
                </div>
                <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow">
                    <h5 className="text-center card-header bolded text-uppercase">Pressure</h5>
                        <div className="card-body text-center">
                            <BP className="mb-4" />
                            <h6 className="text-center bolded">120/80</h6>
                        </div>
                    </div>
                </div>
                <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow">
                        <h5 className="text-center card-header bolded text-uppercase">Height</h5>
                        <div className="card-body text-center">
                            <HT className="mb-4" />
                            <h6 className="text-center bolded">158</h6>
                        </div>
                    </div>
                </div>
                <div className="mb-4 col-lg-6 col-md-5 col-sm-6 flexcard">
                    <div className="card rounded shadow">
                    <h5 className="text-center card-header bolded text-uppercase">Weight</h5>
                        <div className="card-body text-center">
                            <WT className="mb-4" />
                            <h6 className="text-center bolded">120 kg</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashCard;
