import "./App.css";
import AddTask from "./Components/AddTask/AddTask";
import TaskList from "./Components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <h1>MY TODO LIST</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
