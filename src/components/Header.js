import React from "react";
import "./assets/Style.css";
import { FiMenu } from "react-icons/fi";
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
            <ul className="nav-list">
              <li className="list-item">
                <a href="/home">My Work</a>{" "}
              </li>
              <li>
                <a href="/home">About</a>
              </li>
              <li>
                {" "}
                <a href="/home">Design</a>
              </li>
              <li>
                <div className="button">Contact Me</div>
              </li>
            </ul>
          </div>
          <div className="hamburger-menu">
            <FiMenu size="24px" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
