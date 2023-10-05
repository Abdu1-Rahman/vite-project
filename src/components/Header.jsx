import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container style={{backgroundColor:"#FFA500",padding:"0",margin:"0",display:"flex",marginBottom:"20px"}}>
        <Navbar.Brand href="#home" style={{color:"white"}}><h2>Kitchen.
          </h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"}>
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to={'product'}>
              <Nav.Link href="#link">Product</Nav.Link>
            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">4</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">5</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">6</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">7</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">8</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">9</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">10</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">11</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default BasicExample;