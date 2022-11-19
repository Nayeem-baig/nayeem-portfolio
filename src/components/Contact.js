import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "../App.css";
import { ReactComponent as Handshake } from "../assets/handshake.svg";
import Call from "./Call";
import MyDetails from "./Email";

const Contact = () => {
  return (
    <div>
      <Row>
        <h1><u>Contact</u></h1>
        <Col className="m-5 d-flex flex-column align-items-start">
            <p className="d-flex txt10 gary oswald">Get in touch</p>
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
        <Col>
          <div className="gary"></div>
          <div className="heroimg mb-5 pb-5 mb-5">
            <Handshake width="600" height="450" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
