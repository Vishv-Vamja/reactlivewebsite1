import React from "react";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <div className="card" style={{ width: "22rem", marginBottom: "20px" }}>
      <img src={props.imgsrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <Link to="/Contactus" className="btn btn-primary apply">Apply</Link>
      </div>
    </div>
  );
}

export default Cards;
