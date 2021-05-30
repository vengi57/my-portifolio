import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="header-body">

      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello, folks ! ")
            .pauseFor(2500)
            .deleteAll()
            .typeString("I'm Vengi Thiyagarajan ")
            .start()
            .pauseFor(2500)
            .deleteAll()
            .typeString("Full stack Developer ")
            .start()
        }}
      />
      <p className="header-text-sub">I design and code beautifully simple things, and I love what I do.</p>
    </div>
  );
};

export default Header;
