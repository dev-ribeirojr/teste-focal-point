'use client'
import { useInput } from './hooks/use-input'
import styles from './styles.module.scss'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
}

export function Input({ label = '', error, ...rest }: InputProps) {
  const { handleFocus, isFocus } = useInput()

  return (
    <label className={styles.label}>
      {label && <p>{label}</p>}
      <input
        className={`${styles.input} ${isFocus && styles.isFocused} ${error && styles.isError}`}
        onFocus={() => handleFocus(true)}
        onBlurCapture={() => handleFocus(false)}
        {...rest}
      />
    </label>
  )
}
