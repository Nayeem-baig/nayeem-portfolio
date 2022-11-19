import { Button, Col, Row } from "react-bootstrap";
import "../App.css";
import Navi from "./Navi";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import ReactTypingEffect from "react-typing-effect";
import { ReactComponent as Hero } from "../assets/Code.svg";
const Home = () => {
  return (
    <div>
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
            <div className="resume mb-5">
              <Button className="btn-secondary">
                {" "}
                <a
                  className="white txtDecNon"
                  href="https://docs.google.com/document/d/1I2QDZiQLIdRP37vZdvSvf44ZMLerR7lyCXveO8oosdg/edit?usp=sharing"
                  target="_blank"
                >
                  View Resume
                  <FiArrowUpRight />
                </a>
              </Button>
            </div>
            <div className="networks d-flex justify-content-around txt10">
              <a
                href="https://www.linkedin.com/in/nayeem-baig-0668391ba"
                target="_blank"
              >
                <AiFillLinkedin color="gray" />
              </a>
              <a href="https://github.com/Nayeem-baig" target="_blank">
                <AiFillGithub color="gray" />
              </a>
              <a href="https://facebook.com" target="_blank">
                <AiFillFacebook color="gray" />
              </a>
              <a href="https://twitter.com" target="_blank">
                <BsTwitter color="gray" />
              </a>
            </div>
          </div>
        </Col>
        <Col>
          <div className="heroimg pb-5 mb-5">
            <Hero />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
