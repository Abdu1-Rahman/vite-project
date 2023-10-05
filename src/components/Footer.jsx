import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <Container>
      <Card style={{backgroundColor:"grey",color:"white"}}>
        <Card.Body>
          <Card.Title><h3>Contact Us</h3></Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Footer;