import React from "react"

import { loadTasks, deleteTask, createTask } from './tasks.js'
import { TaskList } from "./TaskList"
import './App.css'

class App extends React.Component {
  state = { filterText: '' }

  async componentDidMount() {
    const tasks = await loadTasks()
    this.setState({ tasks })
  }

  addTask = async (taskDescription) => {
    const newTask = await createTask(taskDescription)
    this.setState(({ tasks }) => ({ tasks: [...tasks, newTask] }))
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
        <AddTaskForm onAddTask={this.addTask} />
      </div>
      : <div className="Loader" />
    )
  }
}

export default App
