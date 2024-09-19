type StatusTaskProps = 'completed' | 'pending'

interface TaskProps {
  id: number
  status: StatusTaskProps
  deleted: boolean
  title: string
  created_at: Date
}

interface UpdateTaskStatusProps {
  taskId: number
  status: StatusTaskProps
}

export type { TaskProps, StatusTaskProps, UpdateTaskStatusProps }
