import React from "react";
import "./index.css";
const Header = () => {
  return (
    <div className="bg-header-cont">
      <div className="header-img-cont">
        <img
          className="tropfyimg"
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1709038811/1_ifins7.png"
          alt="img1"
        />
      </div>
      <div className="header-info-cont">
        <img
          className="heading-img"
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1709038801/logo_gcugzu.png"
          alt="img1"
        />
        <p className="heading-awardinfo">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </p>
        <ul>
          <li className="list-para">
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li className="list-para">
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <img
          className="tropfyimg-small"
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1709038811/1_ifins7.png"
          alt="img1"
        />

        <img
          className="award-ceremony-img"
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1709038816/2_uuxwhx.png"
          alt="img1"
        />
        <p className="award-info">
          Government of India has awarded the "National Energy Conservation
          Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
          received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &
          Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
  );
};

export default Header;
