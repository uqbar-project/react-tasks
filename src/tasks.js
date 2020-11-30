let tasks = [
  { id: 1, text: "Organizar charla de React" },
  { id: 2, text: "Preparar ejemplos" },
  { id: 3, text: "Aprender a hablar francés" }
]
let nextTaskId = tasks.length + 1

export const loadTasks = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return tasks
}

export const createTask = (taskDescription) => {
  const newTask = ({ id: nextTaskId++, ...taskDescription })
  tasks.push(newTask)
  return newTask
}

export const deleteTask = (taskId) => {
  tasks = tasks.filter(({ id }) => taskId !== id)
}
