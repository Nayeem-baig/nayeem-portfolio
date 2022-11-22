import {  Col, Row } from "react-bootstrap";
import "../App.css";
import { FiArrowUpRight } from "react-icons/fi";
import { ReactComponent as Hero } from "../assets/Code.svg";
import Networks from "./Networks";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
    className="home" id="home">
      <Row className="home">
        <Col className="mt-5">
          <div className="info nunito bold justify-content-center align-self-center mt-5">
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
              <a  href="https://docs.google.com/document/d/1I2QDZiQLIdRP37vZdvSvf44ZMLerR7lyCXveO8oosdg/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="motion-btn txtDecNon nunito"
              > View Resume <FiArrowUpRight /></motion.button>
              </a>
            </div>
            <Networks />
          </div>
        </Col>
        <Col>
          <Hero className="heroimg mb-5 mt-5" />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
