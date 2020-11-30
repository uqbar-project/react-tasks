import React from "react"

import './App.css'
import { TaskList } from "./TaskList"

const tasks = [
  { id: 1, text: "Organizar charla de React" },
  { id: 2, text: "Preparar ejemplos" },
  { id: 3, text: "Aprender a hablar francés" }
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
