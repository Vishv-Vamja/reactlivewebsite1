import React, { useState } from "react";
import "./service.css";
function Contactus() {
    const [data,setdata] = useState({
        fullname : "",
        phone : "",
        email : "",
        message : ""
    });
    const InputEvent = (event) => {
        const {name,value} = event.target;

        setdata((PreVal) => {
            return{
                ...PreVal,
                [name]: value,
            };
        });
    };

    const formsubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.message}`)
    };
    return ( 
        <>
            <div className="my-5">
                <h1 className="text-center our"> Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formsubmit}>
                            <div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
                                <input type="text" className="form-control" name="fullname" value={data.fullname} onChange={InputEvent} required id="exampleFormControlInput1" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" className="form-control" name="phone" value={data.phone} onChange={InputEvent} required id="exampleFormControlInput1" placeholder="Enetr your mobile number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Email address</label>
                                <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent} required id="exampleFormControlInput1" placeholder="abc@gmail.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Message</label>
                                <input type="text" className="form-control" name="message" value={data.message} onChange={InputEvent} required id="exampleFormControlInput1"  />
                            </div>
                            </div>
                            <div class="col-12">
                                <button className="btncontact" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Contactus;