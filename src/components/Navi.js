import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillLinkedin, AiFillGithub ,AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
function Navi() {
  return (
    <>  
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">  
      <Container>  
        <Navbar.Brand className=" navname gray"><h2>{'<Nayeem/>'}</h2></Navbar.Brand>  
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
        <Navbar.Collapse id="responsive-navbar-nav">  
          <Nav className="me-auto">  
          </Nav>  
          <Nav>  
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
          <Nav.Link href="https://facebook.com" target="_blank">
             <AiFillFacebook />
           </Nav.Link>
          <Nav.Link href="https://facebook.com" target="_blank">
             <BsTwitter />
           </Nav.Link>
         </Nav>
          </Nav>  
        </Navbar.Collapse>  
      </Container>  
    </Navbar>  
  </>
  );
}

export default Navi;
