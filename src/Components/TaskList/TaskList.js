import React, { useState } from "react";
import { useSelector } from "react-redux";
import Filter from "../Filter/Filter";
import Task from "../Task/Task";

const TaskList = () => {
  const [done, setDone] = useState("All");
  const TaskList = useSelector((state) => state.todoReducer.tasks);
  return (
    <div>
      <Filter setDone={setDone} />
      {done == "All"
        ? TaskList.map((elm) => <Task task={elm} key={elm.id} />)
        : done == "Done"
        ? TaskList.filter((elm) => elm.done == true).map((elm) => (
            <Task task={elm} key={elm.id} />
          ))
        : TaskList.filter((elm) => elm.done == false).map((elm) => (
            <Task task={elm} key={elm.id} />
          ))}
    </div>
  );
};

export default TaskList;
