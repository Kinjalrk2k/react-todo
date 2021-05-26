import { createContext } from "react";
import { v4 as uuid } from "uuid";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: uuid(), task: "Learn basic React", completed: true },
  { id: uuid(), task: "Learn Hooks and Context", completed: false },
  { id: uuid(), task: "Start a project", completed: false },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosStuffs = useTodoState(defaultTodos);

  return (
    <TodosContext.Provider value={{ ...todosStuffs }}>
      {props.children}
    </TodosContext.Provider>
  );
}
