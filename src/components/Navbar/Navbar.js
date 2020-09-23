import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Image from "../../image/logo.png";
import { Button } from "./Button";
// import ShareButton from "react-web-share-button";
import Sharebutton from "../Sharebutton";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  var divStyle = {
    color: "white",
    background: "yellow",
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={Image} className="img-fluid navbar-logo-img" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item-button" onClick={closeMobileMenu}>
              <Sharebutton
                title="My Great Page"
                text="A really great page"
                url="http://www.greatpage.com"
              />
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Testimonials
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Faculty
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                FAQ's
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Enquiry
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Feedback
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Aboutus
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Signup
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline d-none"></Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
