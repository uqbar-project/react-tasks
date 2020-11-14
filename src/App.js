import React from "react"

import { TaskList } from './TaskList.js'
import './App.css'

const loadTasks = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [
    { id: 1, text: "Armar charla de React" },
    { id: 2, text: "Pasarla a inglés o francés" },
    { id: 3, text: "No comprometerse a dar charlas en el futuro" }
  ]
}

class App extends React.Component {
  state = { filterText: '' }

  async componentDidMount() {
    const tasks = await loadTasks()
    this.setState({ tasks })
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
