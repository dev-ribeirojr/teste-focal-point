'use client'
import styles from './styles.module.scss'
import { Modal, ButtonModalProps } from '@/components/ui'

interface ModalDeleteTaskProps {
  open: boolean
  close: () => void
  deleteTask: () => void
}

export function ModalDeleteTask({
  open,
  close,
  deleteTask,
}: ModalDeleteTaskProps) {
  function onClose() {
    close()
  }

  const buttons: ButtonModalProps[] = [
    {
      children: <>Cancelar</>,
      colors: 'primary',
      onClick: onClose,
    },
    {
      children: <>Deletar</>,
      colors: 'error',
      onClick: deleteTask,
    },
  ]

  return (
    <Modal close={onClose} open={open} title="Deletar tarefa" buttons={buttons}>
      <div className={styles.container}>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>
      </div>
    </Modal>
  )
}
