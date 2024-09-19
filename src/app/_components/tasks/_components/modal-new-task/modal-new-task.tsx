'use client'
import { useModalNewTask } from './hooks/use-modal-new-task'
import styles from './styles.module.scss'
import { Modal, ButtonModalProps, Input } from '@/components/ui'

interface ModalNewTaskProps {
  open: boolean
  close: () => void
  addTask: (title: string) => void
}

export function ModalNewTask({ open, close, addTask }: ModalNewTaskProps) {
  const { isError, title, setTitle, createdTask, onClose } = useModalNewTask({
    close,
    addTask,
  })

  const buttons: ButtonModalProps[] = [
    {
      children: <>Cancelar</>,
      colors: 'primary',
      onClick: onClose,
    },
    {
      children: <>Adicionar</>,
      onClick: createdTask,
    },
  ]

  return (
    <Modal close={onClose} open={open} title="Nova tarefa" buttons={buttons}>
      <div className={styles.container}>
        <Input
          label="Titulo"
          placeholder="Digite uma tarefa"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          error={isError}
        />
      </div>
    </Modal>
  )
}
