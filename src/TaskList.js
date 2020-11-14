import React from "react"

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
        <button type="button" onClick={this.delete}>x</button>
      </div>
    )
  }
}

export class AddTaskForm extends React.Component {
  state = { text: '' }
  submitForm = event => {
    event.preventDefault()

    if (this.state.text.length > 0) {
      this.props.onAddTask(this.state)
      this.setState({ text: '' })
    }
  }

  updateText = event => {
    this.setState({ text: event.target.value })
  }

  render() {
    const { text } = this.state

    return (
      <form onSubmit={this.submitForm}>
        <input type="text" value={text} onChange={this.updateText} />
        <button type="submit" >Add Task</button>
      </form>
    )
  }
}