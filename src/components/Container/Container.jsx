import React from "react";
import Blognotification from "./Blognotification/Blognotification";
import Polloftheday from "./Polloftheday/Polloftheday";
import Currentaffairs from "./Currentaffairs/Currentaffairs";

const Container = () => {
  return (
    <>
      <div className="container_heading py-md-5 py-3">
        <p>Popular Updates</p>
        <h2>
          <span className="theme_color">Hot & Trending</span> Topics
        </h2>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12 mb-md-2">
              <Blognotification />
            </div>
            <div className="col-lg-4 col-md-4 col-12 mb-sm-3">
              <Polloftheday />
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <Currentaffairs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
