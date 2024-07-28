import Appname from "./components/Appname";
import AddTodo from "./components/AddTodo";
import Todo1 from "./components/Todo1";
import Todo2 from "./components/Todo2";
import './App.css';
import Footer from "./components/Footer";




function App() {


  return (

    <center className="todo-container">

      <Appname></Appname>
      <AddTodo></AddTodo>
      <div className="items">
        <Todo1></Todo1>
        <Todo2></Todo2>

      </div>

      <Footer></Footer>
    </center>




  );
}

export default App;
