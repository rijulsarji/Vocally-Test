import React from "react";
import LandingPage from "./Components/landingPage";
import "./App.css";
import BottomHalf from "./Components/bottomHalf";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="appBody">
      <LandingPage />
      <BottomHalf />
      <Footer />
    </div>
  )
}

export default App;