import React from "react";
import { Col, Row } from "react-bootstrap";
import "../App.css";
import { ReactComponent as Hat } from "../assets/Hat.svg";
import { ReactComponent as Study } from "../assets/Studying.svg";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Application",
      school: "Jain (Deemed-to-be University)",
      duration: "2023 - Pursuing"
    },
    {
      degree: "Bachelor of Computer Application (8 CGPA)",
      school: "St. Francis De Sales Degree College",
      duration: "2019 - 2022",
    },
    {
      degree: "Pre-university CEBA (77%)",
      school: "St. Francis PU composite College",
      duration: "2017 - 2019",
    },
    {
      degree: "SSLC (79%)",
      school: "Our Lady of Fatima High School",
      duration: "2007-2017",
    },
  ];

  return (
    <div className="education d-flex mt-5" id="education">
      <Row>
        <div className="gray mb-5">
          <h1>
            <u>Education</u>
          </h1>
        </div>
        <Col lg="6">
          <div className="heroimg pb-5 mb-5">
            <Study className="studyimg" width="600" height="450" />
          </div>
        </Col>
        <Col lg="6">
          {educationData.map((edu, index) => (
            <div key={index} className="d-flex flex-column">
              <div className="d-flex rounded">
                <div className="d-flex align-items-center">
                  <Hat />
                </div>
                <div className="edu-name d-flex flex-column ms-5 align-items-start">
                  <h4 className="edu-name ">{edu.degree}</h4>
                  <div className="edu-name gray txt1">{edu.school}</div>
                  <div className="edu-name oswald">{edu.duration}</div>
                  <hr
                    style={{
                      background: "gray",
                      color: "black",
                      borderColor: "gray",
                      height: "3px",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Education;
