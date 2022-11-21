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
          <div className="heroimg mb-5 pb-5 mb-5">
            <Study width="600" height="450" />
          </div>
        </Col>
        <Col lg="6">
          <div className="d-flex flex-column">
            <div className="edu-card  d-flex rounded">
              <div className="d-flex align-items-center">
                <Hat />
              </div>
              <div className="d-flex flex-column ms-5 align-items-start">
                <h4 className="">Bachelor of Computer Application</h4>
                <div className="gray txt1">
                  St. Francis De Sales Degree College
                </div>
                <div>2019-2022</div>
              </div>
            </div>
            <hr
              style={{
                background: "gray",
                color: "black",
                borderColor: "gray",
                height: "3px",
              }}
            />
          </div>
          <div className="d-flex flex-column">
            <div className="edu-card  d-flex rounded">
              <div className="d-flex align-items-center">
                <Hat />
              </div>
              <div className="d-flex flex-column ms-5 align-items-start">
                <h4 className="">Pre-university CEBA</h4>
                <div className="gray txt1">
                  St. Francis PU composite College
                </div>
                <div>2017-2019</div>
              </div>
            </div>
            <hr
              style={{
                background: "gray",
                color: "black",
                borderColor: "gray",
                height: "3px",
              }}
            />
          </div>
          <div className="d-flex flex-column">
            <div className="edu-card  d-flex rounded">
              <div className="d-flex align-items-center">
                <Hat />
              </div>
              <div className="d-flex flex-column ms-5 align-items-start">
                <h4 className="">SSLC</h4>
                <div className="gray txt1">Our Lady of Fatima High School</div>
                <div>2007-2017</div>
              </div>
            </div>
            <hr
              style={{
                background: "gray",
                color: "black",
                borderColor: "gray",
                height: "3px",
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Education;
