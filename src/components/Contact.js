import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "../App.css";
import { ReactComponent as Handshake } from "../assets/handshake.svg";
import Call from "./Call";
import MyDetails from "./Email";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <Row>
        <h1 className="gray mt-5">
          <u>Contact</u>
        </h1>
        <Col lg="5" className="ms-5 d-flex flex-column align-items-start">
          <p className="d-flex txt10 gray oswald">Get in touch</p>
          <MyDetails />
          <Call />
          <div className="d-flex">
            <Button
              className="btn-secondary"
              href="https://form.jotform.com/223204244564449"
              target="_blank"
            >
              Send a Message!
            </Button>
          </div>
        </Col>
        <Col lg="5">
          <Handshake className="con-img mb-5" width="600" height="450" />
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
