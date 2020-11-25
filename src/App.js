import React from "react"

import './App.css'
import { TaskList } from "./TaskList"

const tasks = [
  { id: 1, text: "Armar charla de React" },
  { id: 2, text: "Pasarla a inglés o francés" },
  { id: 3, text: "No comprometerse a dar charlas en el futuro" }
]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TaskList tasks={tasks} />
      </div>
    )
  }
}

export default App
