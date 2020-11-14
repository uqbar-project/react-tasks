const initialTasks = [
  { id: 1, text: "Armar charla de React" },
  { id: 2, text: "Pasarla a inglés o francés" },
  { id: 3, text: "No comprometerse a dar charlas en el futuro" }
]
let nextTaskId = initialTasks.length + 1

export const loadTasks = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return initialTasks
}

export const createTask = (taskDescription) => ({ id: nextTaskId++, ...taskDescription })
