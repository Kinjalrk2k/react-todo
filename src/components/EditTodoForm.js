import { TextField } from "@material-ui/core";
import { useContext } from "react";
import { DispatchContext } from "../contexts/todos.context";
import useInputState from "../hooks/useInputState";
import { EDIT } from "../reducers/types/todoAction.types";

function EditTodoForm({ id, task, toggleEditForm }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: EDIT, id, newTask: value });
        reset();
        toggleEditForm();
      }}
      style={{
        marginLeft: "1rem",
        width: "50%",
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
