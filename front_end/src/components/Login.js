import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Button, Card, Dropdown, SplitButton } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { StudentDashboard } from "./StudentComponents";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginPage() {
  const [state, setState] = useState("Student");
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Card>
          <Card.Header>Login Page</Card.Header>
          <Card.Body>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {state}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setState("Student");
                  }}
                >
                  Student
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setState("Educator");
                  }}
                >
                  Educator
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setState("Admin");
                  }}
                >
                  Admin
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"></InputGroup.Text>
              <Form.Control
                placeholder="UserId"
                aria-label="UserId"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"></InputGroup.Text>
              <Form.Control
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Button
              variant="primary"
              onClick={() => {
                navigate("/dashboard", { state: { role: state } });
              }}
            >
              Login
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export { LoginPage };
