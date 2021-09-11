import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  STATUS_TASK,
} from "../constants/todo";

const initialState = {
  tasks: [
    { id: Math.random(), text: "Answer emails", done: false },
    { id: Math.random(), text: "Finish The project", done: false },
    { id: Math.random(), text: "Call the client", done: false },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((elm) =>
          elm.id == action.payload.id
            ? { ...elm, text: action.payload.newText }
            : elm
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((elm) => elm.id != action.payload),
      };
    case STATUS_TASK:
      return {
        ...state,
        tasks: state.tasks.map((elm) =>
          elm.id == action.payload ? { ...elm, done: !elm.done } : elm
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
