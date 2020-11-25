import React from "react"

import { loadTasks } from './tasks.js'
import { TaskList } from "./TaskList"
import './App.css'

class App extends React.Component {
  state = {}

  async componentDidMount() {
    const tasks = await loadTasks()
    this.setState({ tasks })
  }

  render() {
    return (this.state.tasks ?
      <div className="App">
        <TaskList tasks={this.state.tasks} />
      </div>
      : <div className="Loader" />
    )
  }
}

export default App
