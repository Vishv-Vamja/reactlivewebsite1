import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

import "./service.css";

function Service() {
    return (
        <>
<div className="my-5 our">
        <h1 className="text-center">Our Services</h1>
</div>
<div className="container-fluid cardd">
    <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-4">
                <div className="container-fluid mb-5">
                    <div className="row">
                            {
                                Sdata.map((val, index) => (
                                    <div key={index} className="col-md-4">
                                        <Card
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                        />
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
        </div> 
    </div> 
</div>
        </>
    );
}

export default Service;
