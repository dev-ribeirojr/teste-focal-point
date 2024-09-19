'use client'
import { Button, ButtonColorsProps } from '../button/button'
import styles from './styles.module.scss'
import { MouseEvent, ReactNode, useRef } from 'react'

export interface ButtonModalProps {
  children: ReactNode
  colors?: ButtonColorsProps
  onClick?: () => void
}

interface ModalProps {
  children?: ReactNode
  title: string
  open: boolean
  close: () => void
  buttons?: ButtonModalProps[]
}

export function Modal({
  open = false,
  title,
  children,
  buttons,
  close,
}: ModalProps) {
  const containerRef = useRef(null)

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    if (containerRef.current === e) {
      close()
    }
  }

  if (!open) return <></>

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onClick={(e) => handleClick(e)}
    >
      <div className={styles.content}>
        <div>
          <h1>{title}</h1>
        </div>
        <div>{children}</div>
        {buttons && (
          <div className={styles.footer}>
            {buttons.map((button, index) => (
              <Button
                colors={button.colors}
                key={index}
                onClick={button.onClick}
              >
                {button.children}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
