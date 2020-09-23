import React from "react";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import ContactPhoneOutlinedIcon from "@material-ui/icons/ContactPhoneOutlined";
import "./Trips.css";

const Trips = () => {
  return (
    <>
      <div className="trips">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 trips_content">
              <DescriptionOutlinedIcon className="Avtar_icone" />
              <div>
                <h5>Post Your Requirements</h5>
                <p>
                  Just fill up an application to post you learning requirements
                  on our platform.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-12 trips_content">
              <AccountBalanceWalletOutlinedIcon className="Avtar_icone" />
              <div>
                <h5>Choose Your Package</h5>
                <p>
                  Pay the minimal charges on basis of the number of contacts you
                  need.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-12 trips_content_last">
              <ContactPhoneOutlinedIcon className="Avtar_icone" />
              <div>
                <h5>Connect With Tutor</h5>
                <p>Select your tutor and connect with him/her in no time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trips;
