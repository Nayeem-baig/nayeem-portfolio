import { Button, Col, Row } from "react-bootstrap";
import "./App.css";
import Navi from "./components/Navi";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import ContactForm from "./components/ContactForm";
import ReactTypingEffect from "react-typing-effect";
import MyDetails from "./components/Email";
import Call from "./components/Call";
import { ReactComponent as Contactme } from "./assets/Contactme.svg";

function App() {
  return (
    <div className="App">
      <Row>
        <div className="mb-5">
          <Navi />
        </div>
        <Col>
          <div className="info nunito bold align-self-center mt-5">
            <ReactTypingEffect
              className="intro black txt5"
              text={["Hi, I am Nayeem Baig..."]}
            />
            <p className="aboutMe gray txt3">
              I'm passionate web developer having an experience <br /> of web
              applications with React.js {"&"} Node.js. <br />
              This is my portfolio also built using React.js.
            </p>
            <div className="networks txt3">
              <a
                href="https://www.linkedin.com/in/nayeem-baig-0668391ba"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Nayeem-baig" target="_blank">
                <AiFillGithub />
              </a>
            </div>
            <div className="resume">
              <Button>
                {" "}
                <a
                  className="white txtDecNon"
                  href="https://docs.google.com/document/d/1I2QDZiQLIdRP37vZdvSvf44ZMLerR7lyCXveO8oosdg/edit?usp=sharing"
                  target="_blank">
                  View Resume
                <FiArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
        </Col>
        <Col>
          <div className="heroimg ">
            <div className="">
              <img
                src={require("./assets/hero.png")}
                width="500"
                height="350"
              />
            </div>
          </div>
        </Col>
      </Row>

      {/*  */}
      <Row>
        <Col>
          <div className="heroimg mb-5">
            <div>
              <Contactme width="500" height="350" />
            </div>
          </div>
        </Col>
        <Col>
          <div className="m-5 d-flex flex-column align-self-center">
            <p className="d-flex txt10 blue oswald">Get in touch</p>
            <MyDetails />
            <Call />
            <ContactForm />
          </div>
        </Col>
      </Row>
      {/* <Row>
          <Col>
        <div className="d-flex flex-row">
        <div className="d-flex">
          
        </div>
        <div className="m-5 d-flex flex-column align-self-center">
          <p className="d-flex txt10 blue oswald">Get in touch</p>
          <MyDetails />
          <Call />
          <ContactForm />
        </div>
        </div>
          </Col>
        </Row> */}
    </div>
  );
}

export default App;
