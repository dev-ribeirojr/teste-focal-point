import { create } from 'zustand'
import { TaskProps, UpdateTaskStatusProps } from './types'

interface UseStoreProps {
  state: {
    tasks: TaskProps[]
  }
  actions: {
    createTask: (title: string) => void
    deleteTask: (taskId: number) => void
    updateTaskStatus: ({ taskId, status }: UpdateTaskStatusProps) => void
    getTasks: () => void
  }
}

const update = (tasks: TaskProps[]) => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
  return { state: { tasks } }
}

const useTaskStore = create<UseStoreProps>((set) => ({
  state: {
    tasks: [],
  },
  actions: {
    createTask: (title: string) => {
      const newTask: TaskProps = {
        id: Date.now(),
        status: 'pending',
        deleted: false,
        title,
        created_at: new Date(),
      }
      set((state) => {
        const updatedTasks = [...state.state.tasks, newTask]
        return update(updatedTasks)
      })
    },
    deleteTask: (taskId: number) => {
      set((state) => {
        const updatedTasks = state.state.tasks.map((task) =>
          task.id === taskId ? { ...task, deleted: true } : task,
        )
        return update(updatedTasks)
      })
    },
    updateTaskStatus: ({ taskId, status }: UpdateTaskStatusProps) => {
      set((state) => {
        const updatedTasks = state.state.tasks.map((task) =>
          task.id === taskId ? { ...task, status } : task,
        )
        return update(updatedTasks)
      })
    },
    getTasks: () => {
      const storedTasks = localStorage.getItem('tasks')
      if (storedTasks) {
        set({ state: { tasks: JSON.parse(storedTasks) } })
      }
    },
  },
}))

export { useTaskStore }
