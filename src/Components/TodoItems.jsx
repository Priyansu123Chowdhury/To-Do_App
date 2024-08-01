

import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onClickingDlete }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem key={item} todoDate={item.dueDate} todoName={item.name} onClickingDlete={onClickingDlete}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;