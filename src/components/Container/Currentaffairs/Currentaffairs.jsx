import React from "react";
import "./Currentaffairs.css";

const Currentaffairs = () => {
  return (
    <>
      <h2>Current Affairs</h2>
      <div className="polloftheday_background">
        <div>
          <h5>
            Who among the following was the Prime Minister of India when Mandal
            Commission was constituted?
          </h5>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">Indira Gandhi</p>
          </div>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color "> Morarji Desai</p>
          </div>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">Rajiv Gandhi</p>
          </div>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">V P Singh</p>
          </div>
        </div>

        <div>
          <h5>Which is the longest National Highway in India?</h5>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">NH-44</p>
          </div>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">NH-44</p>
          </div>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">NH-2</p>
          </div>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color"> NH-10</p>
          </div>
        </div>

        <div>
          <h5>
            In which year India’s first satellite Aryabhatta was launched?
          </h5>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">1975</p>
          </div>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">1970</p>
          </div>
        </div>
      </div>
      <button type="btn" className="tranding_topics_button">
        For More
      </button>
    </>
  );
};

export default Currentaffairs;
