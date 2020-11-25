import React from "react"

import { loadTasks, deleteTask } from './tasks.js'
import { TaskList } from "./TaskList"
import './App.css'

class App extends React.Component {
  state = { filterText: '' }

  async componentDidMount() {
    const tasks = await loadTasks()
    this.setState({ tasks })
  }

  deleteTask = async (task) => {
    await deleteTask(task.id)
    this.setState({
      tasks: this.state.tasks.filter(({ id }) => task.id !== id)
    })
  }
  changeFilter = (filterText) => {
    this.setState({ filterText })
  }

  getVisibleTasks = () => this.state.tasks.filter(task => task.text.includes(this.state.filterText))

  render() {
    return (this.state.tasks ?
      <div className="App">
        <TaskList
          tasks={this.getVisibleTasks()}
          onChangeFilter={this.changeFilter}
          onDeleteTask={this.deleteTask}
        />
      </div>
      : <div className="Loader" />
    )
  }
}

export default App
