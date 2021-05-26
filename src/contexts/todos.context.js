import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";
import todoReducer from "../reducers/todo.reducer";

const defaultTodos = [
  { id: uuid(), task: "Learn basic React", completed: true },
  { id: uuid(), task: "Learn Hooks and Context", completed: false },
  { id: uuid(), task: "Start a project", completed: false },
];

export const TodosContext = createContext();

export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
