import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import cancelIcon from "../img/cancel_icon.svg";
import doneIcon from "../img/done_icon.svg";
import { Link } from "react-router-dom";
import { ToDoItems } from "../ToDoItems/ToDoItems";
import styles from "./ToDoList.module.scss";

const ToDoList = () => {
  let items = ToDoItems();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>ToDos</h1>
      <Row className="g-3" style={{ margin: "1px" }}>
        {items.map((item) => (
          <Col key={item.id}>
            <Link
              to={item.link}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card
                className={styles.card}
                id={item.id}
                border={item.completed ? "success" : "danger"}
                text={item.completed ? "success" : "danger"}
              >
                <Card.Body className={styles.cardBody} id={item.id}>
                  <Card.Text id={item.id}>
                    {" "}
                    {item.id}.
                    <Card.Title id={item.id}> {item.title} </Card.Title>{" "}
                  </Card.Text>

                  <Card.Img
                    id={item.id}
                    variant="bottom"
                    height={item.completed ? "35px" : "25px"}
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
