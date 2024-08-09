import { useRef } from "react";

function AddTodo({ onNewItem }) {

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    onNewItem(todoName, dueDate)
    todoNameElement.current.value = ""
    dueDateElement.current.value = ""
  }
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>

        <div className="col-6">
          <input type="text"
            ref={todoNameElement} placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button
            type="submit" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;