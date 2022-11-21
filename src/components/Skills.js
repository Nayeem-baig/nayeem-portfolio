import React from "react";
import { Col, Row } from "react-bootstrap";
import "../App.css";
// import { ReactComponent as Skillsimg } from "../assets/Skills.svg";
import { ReactComponent as HTMLimg } from "../assets/Html.svg";
import { ReactComponent as Css } from "../assets/css3.svg";
import { ReactComponent as Js } from "../assets/Js.svg";
import { ReactComponent as Bootstrap } from "../assets/Bootstrap.svg";
import { ReactComponent as MongoDB } from "../assets/Mongodb.svg";
import { ReactComponent as Express } from "../assets/Express.svg";
import { ReactComponent as Reactimg } from "../assets/Reactjs.svg";
import { ReactComponent as Nodeimg } from "../assets/Nodejs.svg";

const Skills = () => {
  return (

    <div className="skills" id="skills">
      <Row>
        <h1 className="gray mb-5">
          <u className="black">Skills</u>
        </h1>
        <Col  className="d-flex justify-content-around mb-5">
          <Col lg="1">
            <div className="hover d-flex flex-column oswald justify-content-center align-items-center skillset shadow-lg mb-5 rounded">
              <HTMLimg className="mb-2" />
              HTML
            </div>
          </Col>
          <Col lg="1">
            <div className="hover d-flex flex-column oswald justify-content-center align-items-center skillset shadow-lg mb-5 rounded">
              <Js className="mb-2" />
              Javascript
            </div>
          </Col>
          <Col lg="1">
            <div className="hover d-flex flex-column oswald justify-content-center align-items-center skillset shadow-lg mb-5 rounded">
              <Css className="mb-2" />
              CSS
            </div>
          </Col>
          <Col lg="1">
            <div className="hover d-flex flex-column oswald justify-content-center align-items-center skillset shadow-lg mb-5 rounded">
              <Bootstrap className="mb-2" />
              Bootstrap
            </div>
          </Col>
        </Col>
        <Col lg="12" className="d-flex justify-content-around mb-5">
          <Col lg="1">
            <div className="hover d-flex flex-column oswald justify-content-center align-items-center skillset shadow-lg mb-5 rounded">
              <MongoDB className="mb-2" />
              Mongo DB
            </div>
          </Col>
          <Col lg="1">
            <div className="hover d-flex flex-column oswald justify-content-center align-items-center skillset shadow-lg mb-5 rounded">
              <Express className="mb-2" />
              Express js
            </div>
          </Col>
          <Col lg="1">
            <div className="hover d-flex flex-column oswald justify-content-center align-items-center skillset shadow-lg mb-5 rounded">
              <Reactimg className="mb-2" />
              React Js
            </div>
          </Col>
          <Col lg="1">
            <div className="hover d-flex flex-column oswald justify-content-center align-items-center skillset shadow-lg mb-5 rounded">
              <Nodeimg className="mb-2" />
              Node Js
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
