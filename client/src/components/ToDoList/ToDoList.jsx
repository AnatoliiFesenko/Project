import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";
import cancelIcon from "../img/cancel_icon.svg";
import doneIcon from "../img/done_icon.svg";
import { Link } from "react-router-dom";
import { ToDoItems } from "../ToDoItems/ToDoItems";

const ToDoList = () => {
  let items = ToDoItems();
  let getNewURL = (event) => {
    // console.log(event.target.id);
  };

  return (
    <div>
      <h1
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        ToDos
      </h1>
      <Row className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <Link
              to={item.link}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card
                id={item.id}
                style={{ width: "300px", height: "180px", cursor: "pointer" }}
                onClick={getNewURL}
              >
                <Card.Body id={item.id}>
                  <Card.Title id={item.id}> {item.title} </Card.Title>

                  <Card.Text id={item.id}> {item.id} </Card.Text>
                  <Card.Img
                    id={item.id}
                    variant="bottom"
                    height="20px"
                    src={item.completed ? doneIcon : cancelIcon}
                  />
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ToDoList;
