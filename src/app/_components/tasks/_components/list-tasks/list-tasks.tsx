'use client'
import styles from './styles.module.scss'

import { TaskProps } from '../../tasks'
import { LuTrash } from 'react-icons/lu'
import { Checkbox } from '@/components/ui'

interface ListTasksProps {
  title: string
  tasks: TaskProps[]
  deleteTask: (taskId: number) => void
  changeStatusTask: (taskId: number) => void
}

export function ListTasks({
  title,
  tasks,
  changeStatusTask,
  deleteTask,
}: ListTasksProps) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {tasks.length === 0 && (
        <div className={styles.card}>
          <p>Você não possui tarefas, adicione novas tarefas!</p>
        </div>
      )}
      {tasks.length > 0 && (
        <ul className={styles.list}>
          {tasks.map((task) => (
            <li className={styles.card} key={task.id}>
              <div className={styles.card_content}>
                <Checkbox
                  onClick={() => changeStatusTask(task.id)}
                  checked={task.status === 'completed'}
                />
                <p>{task?.title}</p>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className={styles.button_delete}
              >
                <LuTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
