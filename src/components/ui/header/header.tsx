import styles from './styles.module.scss'
import Image from 'next/image'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.content_logo}>
          <Image
            src="/logo.svg"
            alt="Logo marca da Focal Point"
            height={36}
            width={150}
          />
        </div>
        <h1>Bem-vindo de volta, Marcus</h1>
        <p>Segunda, 01 de dezembro de 2025</p>
      </div>
    </header>
  )
}
