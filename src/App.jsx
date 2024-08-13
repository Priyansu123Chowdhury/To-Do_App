import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {


  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (itemName, itemdueDate) => {


    setTodoItems((currValue) => [...currValue, {
      name: itemName,
      dueDate: itemdueDate
    }])
  };
  const deleteItems = (todoItemName) => {
    const newToDoItems = todoItems.filter(items => items.name !== todoItemName)
    setTodoItems(newToDoItems);
  }
  return (
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItems,
    }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems ></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
