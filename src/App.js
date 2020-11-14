import React from "react"

import { createTask, loadTasks } from './tasks.js'
import { TaskList, AddTaskForm } from './TaskList.js'
import './App.css'

class App extends React.Component {
  state = { filterText: '' }

  async componentDidMount() {
    const tasks = await loadTasks()
    this.setState({ tasks })
  }

  addTask = async (taskDescription) => {
    const newTask = await createTask(taskDescription)
    this.setState(({ tasks }) => ({ tasks: [newTask, ...tasks] }))
  }

  deleteTask = (task) => {
    this.setState({
      tasks: this.state.tasks.filter(({ id }) => task.id !== id)
    })
  }

  changeFilter = (filterText) => {
    this.setState({ filterText })
  }

  getVisibleTasks = () => this.state.tasks.filter(task => task.text.includes(this.state.filterText))

  render() {
    return (
      <div className="App">
        <AddTaskForm onAddTask={this.addTask} />
        {this.state.tasks ?
          <TaskList
            tasks={this.getVisibleTasks()}
            onChangeFilter={this.changeFilter}
            onDeleteTask={this.deleteTask}
          />
          : <div>Waiting for backend</div>}
      </div>
    );
  }
}

export default App
