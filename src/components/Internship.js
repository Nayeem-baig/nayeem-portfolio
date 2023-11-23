import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "../App.css";
import { ReactComponent as Intern } from "../assets/InternSvg.svg";
import { ReactComponent as Letter } from "../assets/letter.svg";

const Internship = () => {
  const internshipData = [
    {
      position: "Full Stack Developer (MERN STACK)",
      company: "BlueSecures",
      duration: "11th Jan 2023 - Current"
    },
    {
      position: "Intern Web-developer",
      company: "Perisync Technologies PVT LTD",
      duration: "9th June 2022 - 12th Aug 2022",
    },
    // Add more internship experiences as needed
  ];

  return (
    <div className="education mt-5" id="internship">
      <Row>
        <h1 className="gray mb-5">
          <u>Experience</u>
        </h1>
        <Col lg="5" className="ms-5 d-flex flex-column align-items-start">
          {internshipData.map((internship, index) => (
            <div key={index} className="d-flex">
              <div className="d-flex align-items-center">
                <Letter />
              </div>
              <div className="edu-name d-flex flex-column ms-5 align-items-start">
                <h4 className="edu-name ">{internship.position}</h4>
                <div className="edu-name gray txt1">{internship.company}</div>
                <div className="edu-name oswald">{internship.duration}</div>
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
          ))}
        </Col>

        <Col lg="5">
          <Intern className="con-img mb-5" width="600" height="450" />
        </Col>
      </Row>
    </div>
  );
};

export default Internship;
