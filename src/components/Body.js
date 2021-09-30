import React from "react";
import "./assets/Body.css";

function Body() {
  return (
    <div className="Body">

      <div className="container-body">
      <div className="leftside">
        <div className="content">
          <p className="Name-User">Hi, Im Bayuna Rama</p>
          <p className="Name-Work">
            {" "}
            UI/UX Designer Who Teaches Design on Youtube.
          </p>
          <p className="Name-Details">
            {" "}
            I’m from Indonesia and I have been working as a UI UX designer for
            more than 5 years. I’ve worked for a Dutch company Frisseblikken as
            a web designer and front-end developer for 3 years, I build my own
            web development team Duosweb since 2018, and currently I work for
            Bold Australia as UI Designer since 2020. with you
          </p>
        </div>
      </div>
      <div className="rightside">
        <img src="hero2.png " alt="" className="profile" />
      </div>
      </div>
    </div>
  );
}

export default Body;
