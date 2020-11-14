import React from "react"
import { CgCloseO } from 'react-icons/cg';

export class TaskList extends React.Component {
  render() {
    const { tasks, onDeleteTask, onChangeFilter } = this.props
    return (
      <div className="TaskList">
        <TaskFilter onChange={onChangeFilter} />
        {tasks.map(task => <Task key={task.id} task={task} onDelete={onDeleteTask} />)}
      </div>
    )
  }
}

class TaskFilter extends React.Component {
  state = { filterText: '' }

  setFilter = event => {
    const { onChange } = this.props
    this.setState({ filterText: event.target.value }, () => onChange(this.state.filterText))
  }

  render() {
    return (
      <input type="search" value={this.state.filterText} onChange={this.setFilter} />
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