import React from "react"

export class TaskList extends React.Component {
  render() {
    const { tasks, onDeleteTask } = this.props
    return (
      <div className="TaskList">
        <h1>
          <span>Tasks</span>
        </h1>
        {tasks.map(task => <Task key={task.id} task={task} onDelete={onDeleteTask} />)}
      </div>
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
        <button type="button" onClick={this.delete} />
      </div>
    )
  }
}

