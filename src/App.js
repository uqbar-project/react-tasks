import logo from './logo.svg';
import './App.css';

const tasks = [
  { id: 1, text: "Armar charla de React" },
  { id: 2, text: "Pasarla a inglés o francés" },
  { id: 3, text: "No comprometerse a dar charlas en el futuro" }
]

function App() {
  return (
    <div className="App">
      {tasks.map(task => <Task id={task.id} task={task} />)}
    </div>
  );
}

function Task({ task }) {
  return (<div className="Task">{task.text}</div>)
}

export default App;
