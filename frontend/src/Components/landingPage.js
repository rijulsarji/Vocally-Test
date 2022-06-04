import React, { useState } from "react";
import Navbar from "./navbar";
import landingPageImg from "../assets/Images/landingPageImg.png";
import "../CSS/Components/landingPage.css";
import scrollDown from "../assets/Images/scrollDown.jpg";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { motion } from "framer-motion";

function LandingPage() {

  const [data, setData] = useState({ name: "", email: "" });


  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value});
  }


  function handleSubmit(e) {
    e.preventDefault();

    if(data.name === "" || data.email === "")
      window.alert("Please fill out the fields");

    else {
      window.alert("Congratulations! You have successfully registered for OpenAuto!");
      fetch("https://vocally-test.herokuapp.com/formInput", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      setData({name: "", email: ""});
    }
  }

  return (
    <div>
      <Navbar /> {/* placing navbar component */} 

      {/* landing page content starts */}
      <div className="landingPage">
        <motion.div
          className="landingPageIntro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Vehicle Maintenance From The Comfort Of Your Home</h1>
          <p>
            Open Auto soothes the hassle of maintaining your vehicle and helps
            you deal with unexpected repairs worry-free.
          </p>

          {/* input form */}
          <form
            className="landingPageForm"
            method="POST"
            action="https://vocally-test.herokuapp.com/formInput"
          >
            <input
              type="text"
              placeholder="Enter Your Name"
              required={true}
              name="name"
              value={data.name}
              onChange={handleInput}
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              required={true}
              name="email"
              value={data.email}
              onChange={handleInput}
            />
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </motion.div>

        {/* right side image */}
        <motion.img
          src={landingPageImg}
          alt="Landing Page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </div>

      {/* scroll down icon */}
      <div className="landingPageScroller">
        <img src={scrollDown} alt="scroll down" />
        <div>
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

export default LandingPage;