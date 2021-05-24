import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Todo({ task, completed }) {
  return (
    <ListItem>
      <Checkbox checked={completed} tabIndex={-1} />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Edit">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todo;
