import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import "./index.css";
const Footer = () => {
  return (
    <div className="bg-cont-footer">
      <p>
        <FaSquarePhone /> 1800 200 1234
      </p>
      <p>
        <FaFacebookSquare />
        www.facebook.com/cripumps
      </p>
      <p>
        <TbWorld /> www.crigroups.com
      </p>
    </div>
  );
};

export default Footer;
