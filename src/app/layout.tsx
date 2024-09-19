import { Header } from '@/components/ui'
import './styles/global.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Focal Point',
  description: 'Gerênciamento de tarefas',
  icons: {
    icon: '/logo-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
