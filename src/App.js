import React from "react";
import Header from "./components/Header";
import ComputerLogo from "./images/computer.svg";
import UserFace from "./images/myface.png";
import "./App.css";
import ProjectView from "./components/ProjectView";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  backgroundColor: "#070D17",
};
const App = () => (
  <div style={styles}>
    <Header />
    <img src={UserFace} alt="userface" className="user-face" />
    <br />
    <img src={ComputerLogo} className="computer-logo" alt="compterlogo" />
    <br />
    <br />
    <hr className="horizontal-line" />
    <ProjectView />
    <hr className="horizontal-line" />
    <br />
    <Skills />
    <br />
    <hr className="horizontal-line" />
    <Footer />
    <hr className="horizontal-line" />
    <br />
  </div>
);

export default App;
