import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import doneIcon from "../img/done_icon.svg";
import cancelIcon from "../img/cancel_icon.svg";
import { useParams } from "react-router-dom";
import { ToDoItems } from "../ToDoItems/ToDoItems";

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
      <Card>
        <Card.Img
          variant="top"
          src={arrCompleted[todoId - 1] ? doneIcon : cancelIcon}
          style={{ width: "40%", height: "40%", marginLeft: "30%" }}
        />
        <Card.Body>
          <Card.Text>{arrTitle[todoId - 1]} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ToDoCard;
