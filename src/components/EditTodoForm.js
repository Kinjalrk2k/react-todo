import { TextField } from "@material-ui/core";
import useInputState from "../hooks/useInputState";

function EditTodoForm({ id, editTodo, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
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
