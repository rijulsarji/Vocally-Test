import React from "react";
import brandImg from "../assets/Images/Brand.jpg";
import { BsFillTelephoneFill, BsFillEnvelopeFill, BsFacebook, BsTwitter, BsYoutube, BsLinkedin, BsInstagram } from "react-icons/bs";
import "../CSS/Components/footer.css";

function Footer() {
  
  return (
    <div className="footerBody">
      {/* left side of the footer */}
      <div className="footLS">
        <img src={brandImg} alt="openauto" />
        <p>Open Auto @ all rights reserved</p>
      </div>

      {/* right side of the footer */}
      <div className="footRS">
        {/* contact details container */}
        <div className="contactContainer">
          {/* phone contact */}
          <div className="footContact">
            <BsFillTelephoneFill color="#FFFFFF" />
            <p className="text-light m-0">+769 586 4558</p>
          </div>

          {/* email contact */}
          <div className="footContact">
            <BsFillEnvelopeFill color="#FFFFFF" />
            <a href="mailto:service@openauto.ca" className="text-light m-0">
              service@openauto.ca
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="footerSocialMedia">
          <BsFacebook />
          <BsTwitter />
          <BsYoutube />
          <BsLinkedin />
          <BsInstagram />
        </div>

      </div>
    </div>
  );
}

export default Footer;