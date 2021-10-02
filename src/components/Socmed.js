import React from "react";
import "./assets/Socmed.css";
import { RiYoutubeLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";

function Socmed() {
  return (
    <div className="Socmed">
      <div className="container-socmed">
          <div className="Button-email">Email Me</div>
        <ul>
            <li> <RiYoutubeLine size="40px" color="#616161"/></li>
            <li> <RiWhatsappLine size="40px" color="#616161"/></li>
            <li> <RiInstagramLine size="40px" color="#616161"/></li>
        </ul>
      </div>
    </div>
  );
}

export default Socmed;
