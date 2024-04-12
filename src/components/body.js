import React from "react";
import photo from "../images/photo.png";
import photo1 from "../images/photo3.png";
import icon1 from "../images/icon1.png";
import resume from "../images/Resume.pdf";
import insta from "../images/insta.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import { FaArrowUpLong } from "react-icons/fa6";

function Body() {
  return (
    <div className="bodycontainer">
      <div className="body-container">
        <div className="text">
          <h5>Hello,</h5>
          <h1>
            I`m <span>SARAVANAN</span>
          </h1>
          <h1 className="h1">
            <span>Front-End</span> Developer
          </h1>
          <p className="p">
            HTML - CSS <span> - JAVASCRIPT - REACTJS</span>
          </p>
          <span className="span">
            Building smart{" "}
            <span>interfaces and useful interactions, developing</span> rich web
            <br></br> applications a<span>nd seamless web experiences</span>
          </span>
          <div>
            {/* <button title='Follw Me'>Download Resume</button> */}
            <a href={resume} download="Resume">
              <span title="Download Resume">Download Resume</span>
            </a>
            <p>
              View Portfolio <img src={icon1} alt="" className="icon1"></img>
            </p>
          </div>
        </div>
        <div className="photo">
          <img
            src={photo}
            alt=""
            className="photo1"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1500"
            data-aos-once="true"
          ></img>
          <img
            src={photo1}
            alt=""
            className="photo2"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1500"
            data-aos-once="true"
          ></img>
        </div>
        <div className="follow">
          <hr className="hr-1"></hr>
          <img src={insta} alt=""></img>
          <img src={facebook} alt=""></img>
          <img src={linkedin} alt=""></img>
          <p>
            Follow me <FaArrowUpLong className="follow-icon" />{" "}
          </p>
          <hr className="hr-2"></hr>
        </div>
      </div>
    </div>
  );
}

export default Body;
