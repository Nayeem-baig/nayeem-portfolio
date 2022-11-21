import React from "react";
import Container from "react-bootstrap/Container";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion, useScroll } from "framer-motion";

function Navi() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Navbar
        collapseOnSelect
        className="m-0 p-0"
        sticky="top"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="navname gray">
            <h2>{"<Nayeem/>"}</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav className=" txt3 white">
                <Link to="home" spy={true} offset={-70} duration={300}>
                  <p className="m-3 oswald nav-item">Home</p>
                </Link>
                <Link to="education" spy={true} offset={-70} duration={300}>
                  <p className="m-3 oswald ">Education</p>
                </Link>
                <Link to="skills" spy={true} offset={-70} duration={300}>
                  <p className="m-3 oswald ">Skills</p>
                </Link>
                <Link to="contact" spy={true} offset={-70} duration={300}>
                  <p className="m-3 oswald ">Contact</p>
                </Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <motion.div className="progress-bar " style={{ scaleX: scrollYProgress }}>
        hwdhb
      </motion.div>
    </>
  );
}

export default Navi;
