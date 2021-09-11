import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  STATUS_TASK,
} from "../constants/todo";

//ADD TASK
export const addTask = (newTask) => {
  return { type: ADD_TASK, payload: newTask };
};

//DELETE TASK

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

//EDIT TASK

export const editTask = (id, newText) => {
  return { type: EDIT_TASK, payload: { id, newText } };
};

//STATUS TASK

export const statusTask = (id) => {
  return { type: STATUS_TASK, payload: id };
};
