import React from "react";
import bottomHalfImg from "../assets/Images/bottomHalfImg.png"
import "../CSS/Components/bottomHalf.css";

function BottomHalf() {

  return (
    <div>

      <div className="bhBody">

        {/* bottom image */}
        <img src={bottomHalfImg} alt="bottom half ad" />

        {/* bottom description */}
        <div className="bhDiv">
          <h1>Focused on Time Saving</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales neque sodales ut etiam sit. Id donec ultrices tincidunt arcu. Bibendum est ultricies integer quis auctor. Posuere morbi leo urna molestie at. Aliquam vestibulum morbi blandit cursus risus at. Lacus luctus accumsan tortor posuere ac ut. Quam id leo in vitae turpis massa sed.</p>

          <h4>Download the mobile app</h4>
        </div>

      </div>

    </div>
  )
}

export default BottomHalf;