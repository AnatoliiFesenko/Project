import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div style={{ height: "100%", widty: "100%" }}>
      <Link to="/todos">
        <Button
          variant="outline-success"
          size="lg"
          style={{
            marginTop: "24%",
            marginLeft: "48%",
          }}
        >
          MY TODOS
        </Button>
      </Link>
    </div>
  );
};

export default Main;
