import React from "react";
import "./assets/Tools.css";

function Tools() {
  return (
    <div className="Tools">
      <div className="container-tools">
        <div className="title-tools">
          <h2>Tools and Skill</h2>
        </div>
        <div className="skills-icon">
        <img src="AdobeXD.png " alt="" className="profile" />
        <img src="figma.png " alt=""  id="XD"className="profile" />
        <img src="ai.png " alt="" className="profile" />
        <img src="css.png " alt="" className="profile" />
        <img src="react.png " alt="" className="profile" />
        </div>
      </div>
    </div>
  );
}

export default Tools;
