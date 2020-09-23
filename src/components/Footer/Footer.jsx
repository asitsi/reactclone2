import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../image/logo.png";
import ShopOutlinedIcon from "@material-ui/icons/ShopOutlined";
import AppleIcon from "@material-ui/icons/Apple";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";

const Footer = () => {
  const currYear = new Date();
  const Year = currYear.getFullYear();
  return (
    <>
      <div className="Footer_bg py-md-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 Footer_column1">
              <img src={Logo} alt="Logo" className="Footer_logo" />
              <NavLink to="/" className="Footer_bg_navlink">
                <p>4967 Sardis Sta, Victoria 8007, Montreal.</p>
              </NavLink>
              <NavLink to="/" className="Footer_bg_navlink">
                <p>+1 246-345-0695</p>
              </NavLink>
              <NavLink to="/" className="Footer_bg_navlink">
                <p>info@learnup.com</p>
              </NavLink>
            </div>
            <div className="col-lg-6">
              <div className="row Footer_Top_Category">
                <div className="col-lg-4 col-12 ">
                  <h5>Top Locations</h5>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Delhi</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Mumbai</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Kolkata</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Banglor</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Bhopal</p>
                  </NavLink>
                </div>
                <div className="col-lg-4 col-12">
                  <h5>Top Subjects</h5>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Math Tutors</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>English Tutors</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Science Tutors</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Accountancy Tutors</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Online Classes</p>
                  </NavLink>
                </div>
                <div className="col-lg-4 col-12">
                  <h5>Work With Us</h5>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Testimonials</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Faculty</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>FAQ's</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Enquiry</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Suggestion</p>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 Footer_App">
              <h5>Download App</h5>
              <NavLink to="/" className="Footer_bg_navlink">
                <div className="Google_App">
                  <ShopOutlinedIcon className="App_icone" />
                  <h2>Google play</h2>
                  <p>(* Get it now *)</p>
                </div>
              </NavLink>
              <NavLink to="/" className="Footer_bg_navlink">
                <div className="Google_App">
                  <AppleIcon className="App_icone" />
                  <h2>Apple store </h2>
                  <p>(* Now it Available *)</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer_bottom">
        <div> Copyright © {Year}</div>
        <div>
          <NavLink to="/">
            <FacebookIcon className="Footer_bottom_icon" />
          </NavLink>
          <NavLink to="/">
            <TwitterIcon className="Footer_bottom_icon" />
          </NavLink>
          <NavLink to="/">
            <InstagramIcon className="Footer_bottom_icon" />
          </NavLink>
          <NavLink to="/">
            <LinkedInIcon className="Footer_bottom_icon" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
