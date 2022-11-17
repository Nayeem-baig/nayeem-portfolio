import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
function Navi() {
  return (
    <Navbar className="d-flex justify-content-around" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <div className="navname white txt5 tilt">
          <p>Nayeem Baig</p>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto txt3 white">
            <Nav.Link
              href="https://www.linkedin.com/in/nayeem-baig-0668391ba"
              target="_blank"
            >
              <AiFillLinkedin />
            </Nav.Link>
            <Nav.Link href="https://github.com/Nayeem-baig" target="_blank">
              <AiFillGithub />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Navi;
