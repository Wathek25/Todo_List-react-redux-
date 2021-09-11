import React from "react";
import { Button } from "react-bootstrap";
import "./Filter.css";

const Filter = ({ setDone }) => {
  return (
    <div className="btn">
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => setDone("All")}
      >
        ALL
      </Button>
      <Button
        variant="outline-success"
        size="sm"
        onClick={() => setDone("Done")}
      >
        DONE
      </Button>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => setDone("Undone")}
      >
        UNDONE
      </Button>
    </div>
  );
};

export default Filter;
