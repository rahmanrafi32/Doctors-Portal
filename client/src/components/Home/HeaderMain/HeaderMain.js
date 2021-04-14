import React from "react";
import chair from "../../../images/Chair.png";

const HeaderMain = () => {
  return (
    <main style={{height:'600px', overflowX:'hidden'}} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1>
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
          harum labore? Ipsam delectus totam accusantium!
        </p>
        <button className="btn btn-primary">Get Appoinment</button>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
