import { useState } from 'react'

interface UseModalNewTaskProps {
  close: () => void
  addTask: (title: string) => void
}

export function useModalNewTask({ addTask, close }: UseModalNewTaskProps) {
  const [title, setTitle] = useState('')
  const [isError, setIsError] = useState(false)

  function onClose() {
    close()
    setTitle('')
  }

  function createdTask() {
    if (title === '') {
      setIsError(true)

      setTimeout(() => {
        setIsError(false)
      }, 2000)
      return
    }
    addTask(title)
    onClose()
  }

  return { onClose, createdTask, isError, title, setTitle }
}
