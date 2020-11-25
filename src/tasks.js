let tasks = [
  { id: 1, text: "Armar charla de React" },
  { id: 2, text: "Pasarla a inglés o francés" },
  { id: 3, text: "No comprometerse a dar charlas en el futuro" }
]
let nextTaskId = tasks.length + 1

export const loadTasks = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return [...tasks]
}

export const createTask = (taskDescription) => {
  const newTask = ({ id: nextTaskId++, ...taskDescription })
  tasks.push(newTask)
  return newTask
}

export const deleteTask = (taskId) => {
  tasks = tasks.filter(({ id }) => taskId !== id)
}
