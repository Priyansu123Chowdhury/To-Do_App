import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {


  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemdueDate) => {
    const newItems = [...todoItems, {
      name: itemName,
      dueDate: itemdueDate
    }];
    setTodoItems(newItems)
  };
  const handleDeleteItems = (todoItemName) => {
    const newToDoItems = todoItems.filter(items => items.name !== todoItemName)
    setTodoItems(newToDoItems);
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onClickingDlete={handleDeleteItems}></TodoItems>
    </center>
  );
}

export default App;
