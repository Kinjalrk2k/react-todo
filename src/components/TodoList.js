import { Paper, List, Divider } from "@material-ui/core";
import { useContext } from "react";
import { TodosContext } from "../contexts/todos.context";
import Todo from "./Todo";

function TodoList() {
  const todos = useContext(TodosContext);

  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo {...todo} key={todo.id} />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );

  return null;
}

export default TodoList;
