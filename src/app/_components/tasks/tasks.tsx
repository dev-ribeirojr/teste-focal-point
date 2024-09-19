'use client'
import styles from './styles.module.scss'
import { Button } from '@/components/ui'
import { ModalDeleteTask, ListTasks, ModalNewTask } from './_components'
import { useTasks } from './hooks/use-tasks'

export function Tasks() {
  const {
    isVisibleModalNewTask,
    tasksPending,
    tasksCompleted,
    taskId,
    setTaskId,
    removeTask,
    updateTaskStatus,
    setIsVisibleModalNewTask,
    addTask,
  } = useTasks()

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_tasks}>
          <ListTasks
            title="Suas tarefas de hoje"
            tasks={tasksPending}
            deleteTask={setTaskId}
            changeStatusTask={updateTaskStatus}
            status="pending"
          />
          <ListTasks
            title="Tarefas finalizadas"
            tasks={tasksCompleted}
            deleteTask={setTaskId}
            changeStatusTask={updateTaskStatus}
            status="completed"
          />
        </div>
        <Button onClick={() => setIsVisibleModalNewTask(true)}>
          Adicionar nova tarefa
        </Button>
      </div>
      <ModalNewTask
        open={isVisibleModalNewTask}
        close={() => setIsVisibleModalNewTask(false)}
        addTask={addTask}
      />
      <ModalDeleteTask
        open={!!taskId}
        deleteTask={removeTask}
        close={() => setTaskId(null)}
      />
    </>
  )
}
