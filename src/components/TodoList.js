import {
  Paper,
  List,
  ListItem,
  Divider,
  ListItemText,
} from "@material-ui/core";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toogleTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <>
            <Todo
              id={todo.id}
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toogleTodo={toogleTodo}
              editTodo={editTodo}
            />
            {i < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
