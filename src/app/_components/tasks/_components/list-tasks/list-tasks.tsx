'use client'
import styles from './styles.module.scss'

import { LuTrash } from 'react-icons/lu'
import { Checkbox } from '@/components/ui'
import { StatusTaskProps, TaskProps, UpdateTaskStatusProps } from '@/store'

interface ListTasksProps {
  title: string
  tasks: TaskProps[]
  deleteTask: (taskId: number) => void
  changeStatusTask: (data: UpdateTaskStatusProps) => void
  status: StatusTaskProps
}

export function ListTasks({
  title,
  tasks,
  status,
  changeStatusTask,
  deleteTask,
}: ListTasksProps) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {tasks.length === 0 && (
        <div className={styles.description}>
          {status === 'completed' && (
            <p>Você não possui tarefas finalizadas!</p>
          )}
          {status === 'pending' && (
            <p>Você não possui tarefas, adicione novas tarefas!</p>
          )}
        </div>
      )}
      {tasks.length > 0 && (
        <ul className={styles.list}>
          {tasks.map((task) => (
            <li className={styles.card} key={task.id}>
              <div className={styles.card_content}>
                <Checkbox
                  onClick={() =>
                    changeStatusTask({
                      status:
                        task.status === 'completed' ? 'pending' : 'completed',
                      taskId: task.id,
                    })
                  }
                  checked={task.status === 'completed'}
                />
                <p
                  className={`${styles.description} ${task.status === 'completed' && styles.completed}`}
                >
                  {task?.title}
                </p>
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
