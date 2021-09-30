import React from "react";
import "./assets/Style.css";

const Header = () => {
  return (
    <div className="Header">
      {/* <div className="leftside">
        <img src="git.png " alt="" width="40px" />
      </div>
      <div className="rightside">
        <div className="links">
          <a href="/home">My Work</a>
          <a href="/home">About</a>
          <a href="/home">Design</a>
          <a href="/home">Contact Me</a>
        </div>
      </div> */}

      <header>
        <div className="container-header">
          <div className="brand"> 
            <img src="git.png " alt="" width="40px" />
            </div>
          <div className="links">
            <a href="/home">My Work</a>
            <a href="/home">About</a>
            <a href="/home">Design</a>
          </div>
          <div className="button">Contact Me</div>
        </div>
      </header>
    </div>
  );
};

export default Header;
