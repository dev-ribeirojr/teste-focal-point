import { useTaskStore } from '@/store'
import { useEffect, useState } from 'react'

export function useTasks() {
  const {
    state: { tasks },
    actions: { createTask, getTasks, deleteTask, updateTaskStatus },
  } = useTaskStore()
  const [isVisibleModalNewTask, setIsVisibleModalNewTask] = useState(false)
  const [taskId, setTaskId] = useState<number | null>(null)

  useEffect(() => {
    getTasks()
    return () => getTasks()
  }, [getTasks])

  const tasksPending = tasks.filter(
    (item) => item.status === 'pending' && !item.deleted,
  )
  const tasksCompleted = tasks.filter(
    (item) => item.status === 'completed' && !item.deleted,
  )

  function addTask(title: string) {
    createTask(title)
    setIsVisibleModalNewTask(false)
  }
  function removeTask() {
    deleteTask(taskId as number)
    setTaskId(null)
  }

  return {
    tasksPending,
    tasksCompleted,
    isVisibleModalNewTask,
    taskId,
    setIsVisibleModalNewTask,
    updateTaskStatus,
    removeTask,
    setTaskId,
    addTask,
  }
}
