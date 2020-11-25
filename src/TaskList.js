import React from "react"

export class TaskList extends React.Component {
  render() {
    const { tasks } = this.props
    return (
      <div className="TaskList">
        <h1>
          <span>Tasks</span>
        </h1>
        {tasks.map(task => <Task key={task.id} task={task} />)}
      </div>
    )
  }
}

class Task extends React.Component {
  render() {
    const { task } = this.props
    return (
      <div className="Task">
        <span>{task.text}</span>
      </div>
    )
  }
}

