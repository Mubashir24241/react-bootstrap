import Appname from "./components/Appname"


function App() {


  return (

    <center className="todo-container">

      <Appname></Appname>
      {/* <h1> Todo App</h1> */}



      <div class="container text-center">
        <div class="row">

          <div class="col-6">
            <input type="text" placeholder="Enter ToDo Here..."></input>
          </div>
          <div class="col-4">
            <input type="date">

            </input>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">Add</button>
          </div>

          <div class="col-6">
            Buy Milk
          </div>
          <div class="col-4">
            10/05/2024
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>

          <div class="col-6">
            Read Book
          </div>
          <div class="col-4">
            15/05/2024
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>



        </div>

      </div>
    </center>

  );
}

export default App
