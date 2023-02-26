import React from "react";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ToDoCard from "../Card/Card";

const ToDo = () => {
  return (
    <div>
      <Container style={{ paddingTop: "10%" }}>
        <Link to="/todos" style={{ textDecoration: "none", color: "black" }}>
          <Button variant="outline-danger" size="lg" style={{ width: "100%" }}>
            Back
          </Button>
        </Link>
        <ToDoCard />
      </Container>
    </div>
  );
};

export default ToDo;
