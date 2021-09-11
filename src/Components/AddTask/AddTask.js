import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../JS/actions/todo";
import { Button } from "react-bootstrap";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Math.random(), text: text, done: false }));
    setText("");
  };

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task..."
      />
      <Button variant="secondary" size="sm" onClick={handleAdd}>
        ADD
      </Button>
    </form>
  );
};

export default AddTask;
