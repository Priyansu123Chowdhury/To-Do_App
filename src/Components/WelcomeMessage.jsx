import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./WelcomeMessage.module.css";
const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext)
  return (


    todoItems.length === 0 && (
      <p className={styles.welcomeMessage}>Nothing To Do</p>

    )
  );
};
export default WelcomeMessage;
