import styles from './styles.module.scss'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colors?: 'error' | 'primary'
}

export function Button({ children, colors = undefined, ...rest }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[colors || '']}`} {...rest}>
      {children}
    </button>
  )
}
