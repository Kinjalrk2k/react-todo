import { v4 as uuid } from "uuid";
import { ADD, REMOVE, TOGGLE, EDIT } from "./types/todoAction.types";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [...state, { id: uuid(), task: action.task, completed: false }];

    case REMOVE:
      return state.filter((todo) => todo.id !== action.id);

    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case EDIT:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );

    default:
      return state;
  }
};

export default reducer;
