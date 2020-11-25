import React from "react"

export class TaskList extends React.Component {
  render() {
    const { tasks, onDeleteTask, onChangeFilter } = this.props
    return (
      <div className="TaskList">
        <h1>
          <span>Tasks</span>
          <TaskFilter onChange={onChangeFilter} />
        </h1>
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
    return <div className="TaskFilter">
      <input
        type="search"
        value={this.state.filterText}
        onChange={this.setFilter}
      />
    </div>
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
        <button type="button" onClick={this.delete} />
      </div>
    )
  }
}

