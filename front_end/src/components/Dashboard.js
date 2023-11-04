import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Card, Col, ListGroup, Row, Stack } from "react-bootstrap";
import { StudentDashboard } from "./StudentComponents";
import { useLocation } from "react-router-dom";
import { EducatorDashboard } from "./EducatorCompnents";
import { AdminDashboard } from "./AdminComponent";

function Dashboard(params) {
  //   let data = params.data;
  let data = {
    name: "dasd",
    address: "daddddd",
    id: "123213213",
    email: "dsadasdd@com",
  };
  let location = useLocation();
  let type = location.state.role;


  let specificOptions;
  let specificDetail;

  if (type == "Student") {
    specificDetail = <StudentDashboard data={data}></StudentDashboard>;
  } else if (type == "Educator") {
    specificDetail = <EducatorDashboard data={data}></EducatorDashboard>
  } else if (type == "Admin") {
    specificDetail = <AdminDashboard data={data}></AdminDashboard>
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Acadamic Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col>{specificDetail}</Col>
        </Row>
      </Container>
    </>
  );
}

export { Dashboard };
