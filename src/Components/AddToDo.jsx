function AddToDo(){
  return (
  <div class="row Pr-row">
    <div class="col-6">
      <input type="text" placeholder="Enter to do here"/>
    </div>
    <div class="col-4"><input type="date" /></div>
    <div class="col-2"><button type="button" class="btn btn-success Pr-Button">ADD</button></div>
  </div>)
}
export default AddToDo