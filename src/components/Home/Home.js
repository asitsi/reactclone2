import React from "react";
import { NavLink } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./Home.css";
import web1 from "../../image/edu_1.png";
import Trips from "../Trips/Trips";
import PopularCategory from "../PopularCategory/PopularCategory";
import Container from "../Container/Container.jsx";
import Consultancy from "../Consultancy/Consultancy";
import Quiz from "../Quiz/Quiz";
import Testimonial from "../Testimonial/Testimonial";
import NewsLater from "../NewsLater/NewsLater";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="Top_header d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 header_tittle order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Your New </h1>
              <p>
                Study any topic, anytime. Choose from thousands of expert-led
                courses now.
              </p>
              <NavLink
                className="header_tittle_enrollbtn"
                to="/SignupstudentMain"
              >
                Enroll now
                <ArrowForwardIcon className="header_tittle_ArrowForwardIcon" />
              </NavLink>
            </div>

            <div className="col-lg-6 col-md-6 col-12 header_img order-1 order-lg-2 ">
              <img src={web1} alt="" className="img-fluid animated" />
            </div>
          </div>
        </div>
      </div>
      <Trips />
      <PopularCategory />
      <Container />
      <Consultancy />
      <Quiz />
      <NewsLater />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
