'use client'
import styles from './styles.module.scss'
import { FaCheck } from 'react-icons/fa6'

interface CheckboxProps {
  checked?: boolean
  onClick?: () => void
}

export function Checkbox({ checked, onClick }: CheckboxProps) {
  return (
    <button
      className={`${styles.button} ${checked && styles.checked}`}
      onClick={onClick}
    >
      {checked && <FaCheck />}
    </button>
  )
}
