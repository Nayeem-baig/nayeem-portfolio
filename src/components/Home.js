import React, { useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import { FiArrowUpRight } from "react-icons/fi";
import { ReactComponent as Hero } from "../assets/Code.svg";
import Networks from "./Networks";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";
import PDF from "../assets/Nayeem CV.pdf";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const showResume = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="home" id="home">
      <Row className="home">
        <Col className="mt-5">
          <div className="info nunito bold justify-content-center align-self-center mt-5">
            <ReactTypingEffect
              className="intro black txt5"
              text={["Hi, I am Nayeem Baig..."]}
            />
            <p className="aboutMe gray txt3">
              I'm a passionate web developer with experience in web applications
              using React.js and Node.js. <br />
              This is my portfolio also built using React.js.
            </p>
            <div className="resume mb-5" onClick={showResume}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="motion-btn txtDecNon nunito"
              >
                View Resume <FiArrowUpRight />
              </motion.button>
            </div>
            <Networks />
          </div>
        </Col>
        <Col>
          <Hero className="heroimg mb-5 mt-5" />
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Nayeem Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <embed src={PDF + "#toolbar=0"} type="application/pdf" style={{ width: "100%", height: "600px" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
