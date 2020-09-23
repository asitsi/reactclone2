import React from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import "./Blognotification.css";

const Blognotification = () => {
  return (
    <>
      <div className="">
        {/* <div className="Blog_notification_heading">
          <p>Popular Blogs</p>
          <h2>
            <span className="theme_color">Hot & Popular</span> Blogs
          </h2>
        </div> */}
        <h2>Blogs Notificatin's</h2>
        <div className="container  Blog_notification_contaner">
          <div className="row">
            <div className="col-12">
              <div className="row ">
                <div className="col-12 Blog_notification_heading_sub d-flex">
                  <AcUnitIcon className="Blog_notification_heading_icon" />
                  <h5>Information Bulletin UGC-NET June 2020 </h5>
                </div>

                <div className="col-12 Blog_notification_heading_sub d-flex">
                  <AcUnitIcon className="Blog_notification_heading_icon" />
                  <h5>
                    Public Notice: Dates of various Examinations to be conducted
                    by the National Testing Agency
                  </h5>
                </div>
                <div className="col-12 Blog_notification_heading_sub d-flex">
                  <AcUnitIcon className="Blog_notification_heading_icon" />
                  <h5>Information Bulletin UGC-NET June 2020 </h5>
                </div>
                <div className="col-12 Blog_notification_heading_sub d-flex">
                  <AcUnitIcon className="Blog_notification_heading_icon" />
                  <h5>
                    Public Notice: Dates of various Examinations to be conducted
                    by the National Testing Agency
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blognotification;
