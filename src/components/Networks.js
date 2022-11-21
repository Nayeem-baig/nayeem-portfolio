import React from "react";
import "../App.css";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
const Networks = () => {
  return (
    <div className="networks d-flex justify-content-around txt10">
      <a href="https://www.linkedin.com/in/nayeem-baig-0668391ba" className="m-5 hover" target="_blank" > 
        <AiFillLinkedin color="gray" />
      </a>
      <a href="https://github.com/Nayeem-baig" className="m-5 hover" target="_blank">
        <AiFillGithub color="gray" />
      </a>
      <a href="https://facebook.com" className="m-5 hover" target="_blank">
        <AiFillFacebook color="gray" />
      </a>
      <a href="https://twitter.com" className="m-5 hover" target="_blank">
        <BsTwitter color="gray" />
      </a>
    </div>
  );
};

export default Networks;
