import React from "react";
import "./Polloftheday.css";
const Polloftheday = () => {
  return (
    <>
      <h2>Poll of the Day</h2>
      <div className="polloftheday_background">
        <div>
          <h5>Are you confused about what to do after +2 ???</h5>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">Yes</p>
          </div>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">No</p>
          </div>
        </div>

        <div>
          <h5>What is more important to you??</h5>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">money</p>
          </div>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">fame</p>
          </div>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">money with fame</p>
          </div>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color"> Peace of mind</p>
          </div>
        </div>

        <div>
          <h5>
            In todays life where mental health is more important? Do u care for
            it?
          </h5>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">Yes</p>
          </div>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">No</p>
          </div>
        </div>
      </div>
      <button type="btn" className="tranding_topics_button">
        For More
      </button>
    </>
  );
};

export default Polloftheday;
