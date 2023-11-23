import React from "react";
import Container from "react-bootstrap/Container";
import "../App.css";
import Navbar from "react-bootstrap/Navbar";

function Navi() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        className="m-0 p-0 d-flex justify-content-around"
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
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <p
                  className="nav-link m-3 oswald"
                  onClick={() => scrollToSection("home")}
                >
                  Home
                </p>
              </li>
              <li className="nav-item">
                <p
                  className="nav-link m-3 oswald"
                  onClick={() => scrollToSection("education")}
                >
                  Education
                </p>
              </li>
              <li className="nav-item">
                <p
                  className="nav-link m-3 oswald"
                  onClick={() => scrollToSection("internship")}
                >
                  Experience
                </p>
              </li>
              <li className="nav-item">
                <p
                  className="nav-link m-3 oswald"
                  onClick={() => scrollToSection("skills")}
                >
                  Skills
                </p>
              </li>
              <li className="nav-item">
                <p
                  className="nav-link m-3 oswald"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </p>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navi;
