import React from "react";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ToDoCard from "../Card/Card";
import Fit2 from "../img/Fit2.png";

const ToDo = () => {
  return (
    <div
      style={{
        background: `url(${Fit2})`,
        backgroundAttachment: "fixed",
        backgroundSize: "100%",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Container style={{ paddingTop: "10%" }}>
        {/* <Link to="/todos" style={{ textDecoration: "none", color: "black" }}>
          <Button variant="outline-success" size="lg" style={{ width: "100%" }}>
            Back
          </Button>
        </Link> */}
        <ToDoCard />
      </Container>
    </div>
  );
};

export default ToDo;
