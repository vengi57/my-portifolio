import React from "react";
import "./NavTab.css";
const ArrowLeft = <span>◀ ❱</span>
const ArrowRight = <span>❰ ▶</span>

const NavTab = () => {
  const scrollIntoView = (url) => {
    const titleElement = document.getElementById(url);
    titleElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="nav-list">
      <div onClick={() => scrollIntoView("home")}>{ArrowRight}&emsp; Home</div>
      <div onClick={() => scrollIntoView("projects")}>Projects</div>
      <div onClick={() => scrollIntoView("skills")}>Skills</div>
      <div onClick={() => scrollIntoView("blogs")}>My Blogs</div>
      <div onClick={() => scrollIntoView("contact")}>Contact&emsp; {ArrowLeft}</div>
    </div>
  );
};
export default NavTab;
