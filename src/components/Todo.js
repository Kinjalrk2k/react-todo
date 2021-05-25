import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggleState from "../hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

function Todo({ id, task, completed, removeTodo, toogleTodo, editTodo }) {
  const [isEditing, toggleIsEditing] = useToggleState(false);

  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm
          id={id}
          editTodo={editTodo}
          task={task}
          toggleEditForm={toggleIsEditing}
        />
      ) : (
        <>
          {" "}
          <Checkbox
            checked={completed}
            tabIndex={-1}
            onClick={() => toogleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
