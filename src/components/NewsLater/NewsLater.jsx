import React from "react";
import "./NewsLater.css";
const NewsLater = () => {
  return (
    <>
      <div className="NewsLater_bg">
        <div className="">
          <h1>Join Thousand Of Happy Students!</h1>
          <p>Subscribe our newsletter & get latest news and updation!</p>
          <input
            type="email"
            className="NewsLater_bg_input"
            placeholder="Your Email Address"
          />
          <input type="submit" className="NewsLater_bg_input2" />
        </div>
      </div>
    </>
  );
};
export default NewsLater;
