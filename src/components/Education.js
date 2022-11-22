import React from "react";
import { Col, Row } from "react-bootstrap";
import "../App.css";
import { ReactComponent as Study } from "../assets/Studying.svg";
import { ReactComponent as Hat } from "../assets/Hat.svg";
const Education = () => {
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
          <div className="d-flex flex-column">
            <div className="d-flex rounded">
              <div className="d-flex align-items-center">
                <Hat />
              </div>
              <div className="edu-name d-flex flex-column ms-5 align-items-start">
                <h4 className="edu-name ">Bachelor of Computer Application</h4>
                <div className="edu-name gray txt1">
                  St. Francis De Sales Degree College
                </div>
                <div className="edu-name oswald">2019-2022</div>
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
          <div className="d-flex flex-column">
            <div className="d-flex rounded">
              <div className="d-flex align-items-center">
                <Hat />
              </div>
              <div className=" d-flex flex-column ms-5 align-items-start">
                <h4 className="edu-name ">Pre-university CEBA</h4>
                <div className="edu-name gray txt1">
                  St. Francis PU composite College
                </div>
                <div className="edu-name oswald ">2017-2019</div>
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
          <div className="d-flex flex-column">
            <div className="d-flex rounded">
              <div className="d-flex align-items-center">
                <Hat />
              </div>
              <div className="d-flex flex-column ms-5 align-items-start">
                <h4 className="edu-name ">SSLC</h4>
                <div className="edu-name gray txt1">
                  Our Lady of Fatima High School
                </div>
                <div className="edu-name oswald">2007-2017</div>
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
        </Col>
      </Row>
    </div>
  );
};

export default Education;
