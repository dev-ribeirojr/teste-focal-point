import styles from './styles.module.scss'
import { ButtonHTMLAttributes } from 'react'

export type ButtonColorsProps = 'error' | 'primary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colors?: ButtonColorsProps
}

export function Button({ children, colors = undefined, ...rest }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[colors || '']}`} {...rest}>
      {children}
    </button>
  )
}
