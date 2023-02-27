import React from "react";
import { Card, Button } from "react-bootstrap";
import doneIcon from "../img/done_icon.svg";
import cancelIcon from "../img/cancel_icon.svg";
import { useParams } from "react-router-dom";
import { ToDoItems } from "../ToDoItems/ToDoItems";
import { Link } from "react-router-dom";

const ToDoCard = () => {
  const params = useParams();
  const todoId = params.id;

  let items = ToDoItems();
  let arrTitle = [];
  let arrCompleted = [];

  items.map((item) => {
    arrTitle.push(item.title);
    arrCompleted.push(item.completed);
  });

  return (
    <div>
      <Link to="/todos" style={{ textDecoration: "none", color: "black" }}>
        <Button
          variant={
            arrCompleted[todoId - 1] ? "outline-success" : "outline-danger"
          }
          size="lg"
          style={{ width: "100%" }}
        >
          Back
        </Button>
      </Link>
      <Card
        border={arrCompleted[todoId - 1] ? "success" : "danger"}
        text={arrCompleted[todoId - 1] ? "success" : "danger"}
        style={{ backgroundColor: "rgba(0,0,0,0)" }}
      >
        <Card.Img
          variant="top"
          src={arrCompleted[todoId - 1] ? doneIcon : cancelIcon}
          style={{
            width: "40%",
            height: "40%",
            marginLeft: "30%",
          }}
        />
        <Card.Body>
          <Card.Text c>{arrTitle[todoId - 1]} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ToDoCard;
