import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, statusTask } from "../../JS/actions/todo";
import Edit from "./Edit";
import "./Task.css";
import { Button } from "react-bootstrap";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h4 className={task.done ? "done" : null}>{task.text}</h4>

      <Edit task={task} />

      <Button
        variant="success"
        size="sm"
        onClick={() => dispatch(statusTask(task.id))}
      >
        {task.done ? "UNDONE" : "DONE"}
      </Button>
      <Button
        variant="danger"
        size="sm"
        onClick={() => dispatch(deleteTask(task.id))}
      >
        DELETE
      </Button>
    </div>
  );
};

export default Task;
