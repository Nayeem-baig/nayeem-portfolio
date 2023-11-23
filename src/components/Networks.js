import React from "react";
import "../App.css";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";
const Networks = () => {
  return (
    <motion.div 
    initial={{
      x: 0,
      y: 0,
    }}
    animate={{
      x: 0,
      y: 50,
    }}
    className="d-flex networks justify-content-around txt10">
      <a href="https://www.linkedin.com/in/nayeem-baig-0668391ba" rel="noreferrer" className=" hover" target="_blank" > 
        <AiFillLinkedin color="gray" />
      </a>
      <a href="https://github.com/Nayeem-baig" rel="noreferrer" className=" hover" target="_blank">
        <AiFillGithub color="gray" />
      </a>
      <a href="https://facebook.com" rel="noreferrer" className=" hover" target="_blank">
        <AiFillFacebook color="gray" />
      </a>
      <a href="https://twitter.com/NayeemBaig_" rel="noreferrer" className=" hover" target="_blank">
        <BsTwitter color="gray" />
      </a>
    </motion.div>
  );
};

export default Networks;
