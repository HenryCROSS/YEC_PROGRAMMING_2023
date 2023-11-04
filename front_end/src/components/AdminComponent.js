import { useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

function AdminDashboard(params) {
  let data = params.data;
  let content;
  const [state, setState] = useState("Info");
  const [editState, setEditState] = useState(false);
  const [editCoursesState, setEditCoursesState] = useState(false);

  let editOption = <></>;

  if (state == "Info") {
    if (editState) {
      content = (
        <Card>
          <Card.Header>Edit Admin Info</Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>ID: {data.id}</ListGroup.Item>
              <ListGroup.Item>Name: {data.name}</ListGroup.Item>
              <ListGroup.Item>Address: {data.address}</ListGroup.Item>
              <ListGroup.Item>Email: {data.email}</ListGroup.Item>
              <ListGroup.Item>Phone: {data.phone}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      );
    } else {
      content = (
        <Card>
          <Card.Header>Admin Info</Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>ID: {data.id}</ListGroup.Item>
              <ListGroup.Item>Name: {data.name}</ListGroup.Item>
              <ListGroup.Item>Address: {data.address}</ListGroup.Item>
              <ListGroup.Item>Email: {data.email}</ListGroup.Item>
              <ListGroup.Item>Phone: {data.phone}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      );
    }

    editOption = (
      <ListGroup>
        <ListGroup.Item
          onClick={() => {
            if (editState) {
              setEditState(false);
            } else {
              setEditState(true);
            }
          }}
        >
          Edit
        </ListGroup.Item>
      </ListGroup>
    );
  } else if (state == "Enrolled") {
    if (editCoursesState) {
        content = (
            <Card>
              <Card.Header>Edit Courses</Card.Header>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item>course info</ListGroup.Item>
                  <ListGroup.Item>course info</ListGroup.Item>
                  <ListGroup.Item>course info</ListGroup.Item>
                  <ListGroup.Item>course info</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          );
    } else {
      content = (
        <Card>
          <Card.Header>Courses</Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>course info</ListGroup.Item>
              <ListGroup.Item>course info</ListGroup.Item>
              <ListGroup.Item>course info</ListGroup.Item>
              <ListGroup.Item>course info</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      );
    }

    editOption = (
      <ListGroup>
        <ListGroup.Item
          onClick={() => {
            if (editCoursesState) {
              setEditCoursesState(false);
            } else {
              setEditCoursesState(true);
            }
          }}
        >
          Edit
        </ListGroup.Item>
      </ListGroup>
    );
  }

  return (
    <Container>
      <Row>
        <Col xs lg="2">
          <ListGroup>
            <ListGroup.Item
              onClick={() => {
                setState("Info");
              }}
            >
              Info
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => {
                setState("Enrolled");
              }}
            >
              Manage courses
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Row>
            <Col>{content}</Col>
            <Col xs lg="2">
              {editOption}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export { AdminDashboard };
