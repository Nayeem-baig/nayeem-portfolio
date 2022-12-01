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
  const skillRow1 = [
    {
      id: `1`,
      title: "HTML",
      Image: HTMLimg,
    },
    {
      id: `2`,
      title: "Javascript",
      Image: Js,
    },
    {
      id: `3`,
      title: "CSS",
      Image: Css,
    },
    {
      id: `4`,
      title: "Bootstrap",
      Image: Bootstrap,
    },
  ];
  const skillRow2 = [
    {
      id: `5`,
      title: "Mongo DB",
      Image: MongoDB,
    },
    {
      id: `6`,
      title: "Express js",
      Image: Express,
    },
    {
      id: `7`,
      title: "React Js",
      Image: Reactimg,
    },
    ,
    {
      id: `8`,
      title: "Node Js",
      Image: Nodeimg,
    },
  ];

  return (
    <div className="skills" id="skills">
      <Row>
        <h1 className="gray mb-5">
          <u className="black">Skills</u>
        </h1>
        <Col className="d-flex justify-content-around mb-5">
          {skillRow1.map(({ id, title, Image }) => (
            <Col key={id} lg="1">
              <div className="hover d-flex flex-column oswald justify-content-center align-items-center skillset shadow-lg mb-5 rounded">
                <Image />
                {title}
              </div>
            </Col>
          ))}
        </Col>
        <Col lg="12" className="d-flex justify-content-around">
        <Col className="d-flex justify-content-around">
          {skillRow2.map(({ id, title, Image }) => (
            <Col key={id} lg="1">
              <div className="hover d-flex flex-column oswald justify-content-center align-items-center skillset shadow-lg mb-5 rounded">
                <Image />
                {title}
              </div>
            </Col>
          ))}
        </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
