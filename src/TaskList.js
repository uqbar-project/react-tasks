import React from "react"
import { CgCloseO } from 'react-icons/cg';

export class TaskList extends React.Component {
  setFilter = event => { }

  render() {
    const { tasks, onDeleteTask } = this.props
    return (
      <div className="TaskList">
        <TaskFilter onChange={this.setFilter} />
        {tasks.map(task => <Task key={task.id} task={task} onDelete={onDeleteTask} />)}
      </div>
    )
  }
}

class TaskFilter extends React.Component {
  onKeyPress = event => {
    const { onChange } = this.props
  }

  render() {
    return (
      <input type="search" onKeyPress={this.onKeyPress} />
    )
  }
}

class Task extends React.Component {
  delete = () => {
    const { task, onDelete } = this.props
    onDelete(task)
  }

  render() {
    const { task } = this.props
    return (
      <div className="Task">
        <span>{task.text}</span>
        <a onClick={this.delete}><CgCloseO /></a>
      </div>
    )
  }
}