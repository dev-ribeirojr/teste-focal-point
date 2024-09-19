'use client'
import { ListTasks } from './_components'
import styles from './styles.module.scss'

type StatusTaskProps = 'completed' | 'pending'

export interface TaskProps {
  id: number
  status: StatusTaskProps
  deleted: boolean
  title: string
  created_at: Date
}

export function Tasks() {
  const tasks: TaskProps[] = [
    {
      id: 1,
      status: 'pending',
      deleted: false,
      title: 'Lavar a louça',
      created_at: new Date(),
    },
    {
      id: 2,
      status: 'pending',
      deleted: false,
      title: 'Lavar a louça',
      created_at: new Date(),
    },
    {
      id: 3,
      status: 'pending',
      deleted: false,
      title: 'Lavar a louça',
      created_at: new Date(),
    },
    {
      id: 4,
      status: 'completed',
      deleted: false,
      title: 'Lavar a louça',
      created_at: new Date(),
    },
    {
      id: 5,
      status: 'completed',
      deleted: false,
      title: 'Lavar a louça',
      created_at: new Date(),
    },
    {
      id: 6,
      status: 'completed',
      deleted: false,
      title: 'Lavar a louça',
      created_at: new Date(),
    },
  ]

  const tasksPending = tasks.filter((item) => item.status === 'pending')
  const tasksCompleted = tasks.filter((item) => item.status === 'completed')

  function deleteTask(taskId: number) {
    console.log(taskId)
  }

  function changeStatusTask(taskId: number) {
    console.log(taskId)
  }

  return (
    <div className={styles.container}>
      <ListTasks
        title="Suas tarefas de hoje"
        tasks={tasksPending}
        deleteTask={deleteTask}
        changeStatusTask={changeStatusTask}
      />
      <ListTasks
        title="Tarefas finalizadas"
        tasks={tasksCompleted}
        deleteTask={deleteTask}
        changeStatusTask={changeStatusTask}
      />
    </div>
  )
}
