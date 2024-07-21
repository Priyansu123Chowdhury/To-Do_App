import "./App.css"
import AddToDo from "./Components/AddToDo"
import AppName from "./Components/AppName"
import ToDoItem1 from "./Components/ToDoItem1"
import ToDoItem2 from "./Components/ToDoItem2"
function App() {
return <center className="todo-container">
<AppName/>
<div class="container text-center">
  <AddToDo/>
  <div className="items">
  <ToDoItem1/>
  <ToDoItem2/></div>
</div>


</center>
  
}

export default App
