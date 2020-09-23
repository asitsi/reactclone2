import React from "react";
import web1 from "../../image/2170435.jpg";
import Bag from "../../image/Busines.jpg";
import hf from "../../image/h&f.jpg";
import math from "../../image/math.jpg";
import science from "../../image/science.jpg";
import english from "../../image/english.jpg";
import photography from "../../image/photography.jpg";
import art from "../../image/art.jpg";
import accounting from "../../image/accounting.jpg";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import { NavLink } from "react-router-dom";
import "./PopularCategory.css";

const PopularCategory = () => {
  return (
    <>
      <div className="Subject_category py-md-5 py-3">
        <div className="Subject_category_heading">
          <p>Popular Category</p>
          <h2>
            <span className="theme_color">Hot & Popular</span> Category
          </h2>
        </div>

        <div className="container">
          <div className="row pt-4 gy-4">
            <div className="col-lg-4 col-md-6 col-12">
              <NavLink to="/" className="card_bg">
                <img src={web1} alt="Avtar_img" className="avtar_card_img" />
                <div>
                  <h5>Development</h5>
                  <p>
                    <EventOutlinedIcon className="avtar_card_img2" /> 23 Classes
                  </p>
                </div>
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card_bg2">
                <img src={Bag} alt="Avtar_img" className="avtar_card_img" />
                <div>
                  <h5>Busines</h5>
                  <p>
                    <EventOutlinedIcon className="avtar_card_img2" /> 58 Classes
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card_bg3">
                <img src={hf} alt="Avtar_img" className="avtar_card_img" />
                <div>
                  <h5>Health & Fitness</h5>
                  <p>
                    <EventOutlinedIcon className="avtar_card_img2" /> 43 Classes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*
          
          Row Secound
    
        */}

          <div className="row pt-4 gy-4">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card_bg4">
                <img src={math} alt="Avtar_img" className="avtar_card_img" />
                <div>
                  <h5>Mathematics</h5>
                  <p>
                    <EventOutlinedIcon className="avtar_card_img2" /> 23 Classes
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card_bg5">
                <img src={science} alt="Avtar_img" className="avtar_card_img" />
                <div>
                  <h5>Science</h5>
                  <p>
                    <EventOutlinedIcon className="avtar_card_img2" /> 58 Classes
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card_bg6">
                <img src={english} alt="Avtar_img" className="avtar_card_img" />
                <div>
                  <h5>English</h5>
                  <p>
                    <EventOutlinedIcon className="avtar_card_img2" /> 43 Classes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*
        
         Row Third

        */}

          <div className="row py-4 gy-4">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card_bg7">
                <img
                  src={photography}
                  alt="Avtar_img"
                  className="avtar_card_img"
                />
                <div>
                  <h5>Photography</h5>
                  <p>
                    <EventOutlinedIcon className="avtar_card_img2" /> 23 Classes
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card_bg8">
                <img src={art} alt="Avtar_img" className="avtar_card_img" />
                <div>
                  <h5>Art & Design</h5>
                  <p>
                    <EventOutlinedIcon className="avtar_card_img2" /> 58 Classes
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card_bg9">
                <img
                  src={accounting}
                  alt="Avtar_img"
                  className="avtar_card_img"
                />
                <div>
                  <h5>Accounting</h5>
                  <p>
                    <EventOutlinedIcon className="avtar_card_img2" /> 43 Classes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCategory;
