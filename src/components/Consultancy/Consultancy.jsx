import React from "react";
import consultancyimg from "../../image/consultancy2.png";
import "./Consultancy.css";
const Consultancy = () => {
  return (
    <>
      <div className="py-md-5 py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <img src={consultancyimg} alt="img" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-12 d-flex justify-content-around align-items-center text-center flex-column">
              <div className="consultancy">
                <div className="">
                  <h1>Consultancy !</h1>
                  <p>**We provide consultancy regarding!**</p>
                  <h5 className="card-text">1) What to do after +2</h5>
                  <h5 className="card-text">2) Interview for Phd entrance</h5>
                  <a href="#" className="btn ">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Consultancy;
