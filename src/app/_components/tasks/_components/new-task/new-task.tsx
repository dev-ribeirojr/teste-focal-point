'use client'
import styles from './styles.module.scss'
import { Modal, ButtonModalProps, Input } from '@/components/ui'

interface NewTaskProps {
  open: boolean
  close: () => void
}

export function NewTask({ open, close }: NewTaskProps) {
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
      children: <>Adicionar</>,
      onClick: () => {},
    },
  ]

  return (
    <Modal close={onClose} open={open} title="Nova tarefa" buttons={buttons}>
      <div className={styles.container}>
        <Input label="Titulo" placeholder="Digite uma tarefa" />
      </div>
    </Modal>
  )
}
