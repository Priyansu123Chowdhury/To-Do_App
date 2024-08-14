import { createContext, useReducer } from "react";
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => { },
  deleteItems: () => { },
});
const todoItemsReducer = (currToDoItems, action) => {
  let newToDoItems = currToDoItems;
  if (action.type === "NEW_ITEMS") {
    newToDoItems = [
      ...currToDoItems,
      { name: action.payload.itemName, duedate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newToDoItems = currToDoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newToDoItems;
};
const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addNewItem = (itemName, itemDueDate) => {
    const newItemsAction = {
      type: "NEW_ITEMS",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemsAction);
  };
  const deleteItems = (todoItemName) => {
    const deleteItemsAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemsAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItems,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
