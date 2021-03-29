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
<<<<<<< HEAD
            <div className="mb-4 col-lg-3 col-sm-12">
                    <div className="card shadow">
=======
                <div className="mb-4 col-lg-3 col-md-5 col-sm-6 flexcard">
                    <div className="card">
>>>>>>> 5daf442fa2170b4dfb2a32e3e1724cbf156cca90
                        <div className="card-body text-center">
                            <Blood />
                            <h5 className="text-center card-title">Blood</h5>
                            <h6 className="text-center">120/80</h6>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
                <div className="mb-4 col-lg-3 col-sm-12">
                    <div className="card shadow">
=======
                <div className="mb-4 col-lg-3 col-md-5 col-sm-6 flexcard">
                    <div className="card">
>>>>>>> 5daf442fa2170b4dfb2a32e3e1724cbf156cca90
                        <div className="card-body text-center">
                            <BP />
                            <h5 className="text-center card-title">Pressure</h5>
                            <h6 className="text-center">120/80</h6>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
                <div className="mb-4 col-lg-3 col-md-6 col-sm-12">
                    <div className="card shadow">
=======
                <div className="mb-4 col-lg-3 col-md-5 col-sm-6 flexcard">
                    <div className="card">
>>>>>>> 5daf442fa2170b4dfb2a32e3e1724cbf156cca90
                        <div className="card-body text-center">
                            <HT />
                            <h5 className="text-center card-title">Height</h5>
                            <h6 className="text-center">158</h6>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
                <div className="mb-4 col-lg-3 col-md-6 col-sm-12">
                    <div className="card shadow">
=======
                <div className="mb-4 col-lg-3 col-md-5 col-sm-6 flexcard">
                    <div className="card">
>>>>>>> 5daf442fa2170b4dfb2a32e3e1724cbf156cca90
                        <div className="card-body text-center">
                            <WT />
                            <h5 className="text-center card-title">Weight</h5>
                            <h6 className="text-center">120 kg</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashCard;
