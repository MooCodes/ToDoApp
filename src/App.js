import './App.css'
import Task from './components/Task'

let tasks = [
  {
    id: 1,
    name: "Make Bed",
    date: new Date().toLocaleDateString()
  },
  {
    id: 2,
    name: "Work on To Do App",
    date: new Date().toLocaleDateString()
  },
  {
    id: 3,
    name: "Make Dinner",
    date: new Date().toLocaleDateString()
  }
]

function App() {
  return (
    <div className="App">
      <div className="Task-Container">
        {tasks.map(task => <Task key={task.id} name={task.name} date={task.date} />)}
      </div>
    </div>
  );
}

export default App;
