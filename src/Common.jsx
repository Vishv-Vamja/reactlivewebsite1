import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';

function Common(props) {
    return ( 
        <div className="container ">
            <div className="row">
                <div className="col-md-8 home">
                    <div className="firstdiv">
                        <h2 className="common">{props.name}</h2>
                        <h2><span className="child">Vamja Vishv</span></h2>
                        <p className="para">We are the team of talented developers making websites</p>
                        <Link to={props.visit}>
                        <button className="btnhome">{props.btnname}</button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="seconddiv">
                        <img className="img-fluid image1 " src={props.imgsrc} alt="Responsive" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Common;
