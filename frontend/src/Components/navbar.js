import React from "react";
import brandImg from "../assets/Images/Brand.jpg";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import "../CSS/Components/navbar.css";

// this component has been designed with the help of bootstrap.

function Navbar() {
  
  return (
    <div>
      <nav className="navbar mw-5 navbarBody">

        {/* brand logo */}
        <img src={brandImg} className="navbar-brand" alt="brand logo" />

        {/* contact container */}
        <div className="d-none d-lg-flex navbarRS">
          <div className="d-flex align-items-center justify-content-between navbarElements">
            <BsFillTelephoneFill color="#FFFFFF" />
            <p className="text-light m-0">+769 586 4558</p>
          </div>

          <div className="d-flex align-items-center justify-content-between navbarElements">
            <BsFillEnvelopeFill color="#FFFFFF" />
            <a href="mailto:service@openauto.ca" className="text-light m-0">
              service@openauto.ca
            </a>
          </div>

          {/* download link */}
          <div className="d-none d-lg-flex align-items-center justify-content-between navbarElements downloadLink">
            <BsFillTelephoneFill />
            <p className="m-0">Download the mobile app</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;