import { Col, Row } from "react-bootstrap";
import "./App.css";
import Navi from "./components/Navi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

function App() {
  return (
    <div className="App d-flex wd-100 ">
      <Row>
        <div className="mb-5">
          <Navi />
        </div>
        <Col>
          <div className="info  nunito align-self-center mt-5">
            <div className="intro  txt5">Hi, I am Nayeem Baig</div>
            <p className="aboutMe ml-5 mr-5">
              I'm passionate web developer having an experience <br/> of web
              applications with React.js {"&"} Node.js
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
            <div className="resume  txtDecNon">
              <button type="button" class="btn btn-light">
                {" "}
                <a
                  className="txtDecNon"
                  href="https://docs.google.com/document/d/1I2QDZiQLIdRP37vZdvSvf44ZMLerR7lyCXveO8oosdg/edit?usp=sharing"
                  target="_blank"
                >
                  View Resume{" "}
                </a>
                <FiArrowUpRight />
              </button>
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
    </div>
  );
}

export default App;
