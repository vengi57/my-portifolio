import React from "react";
import Header from "./components/Header";
import ComputerLogo from "./images/computer.svg";
import UserFace from "./images/myface.png";
import "./App.css";
import ProjectView from "./components/ProjectView";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import NavTab from "./components/NavTab";
import Blogs from "./components/Blogs";
import MyDescription from "./components/MyDescription";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  backgroundColor: "#070D17",
};
let test = "I am test"
const App = () => (
  <div style={styles}>
    <NavTab />
    <hr className="horizontal-line" />
    <Header />
    <img src={UserFace} alt="userface" className="user-face" />
    <br />
    <MyDescription/>
    <img src={ComputerLogo} className="computer-logo" alt="compterlogo" />
    <br />
    <hr className="horizontal-line" />
    <ProjectView />
    <hr className="horizontal-line" />
    <br />
    <Skills />
    <br />
    <hr className="horizontal-line" />
    <Blogs />
    <br />
    <hr className="horizontal-line" />
    <Footer />
    <hr className="horizontal-line" />
    <br />
  </div>
);

export default App;
