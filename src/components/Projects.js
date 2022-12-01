import React, { useState } from "react";
import { ReactComponent as ProImg } from "../assets/ProjectImg.svg";
import { Button, Col, Row } from "react-bootstrap";

const Projects = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className="education mt-5" id="internship">
      <h1 className="gray mb-5">
        <u>Projects</u>
      </h1>
    </div>
  );
};

export default Projects;
