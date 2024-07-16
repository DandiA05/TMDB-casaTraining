import '@assets/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import Container from '@components/organisms/Container'

const inter = DM_Sans({ subsets: ['latin'] })
export const viewport: Viewport = {
  themeColor: '#0000',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  userScalable: true,
}

export const metadata: Metadata = {
  title: {
    default: 'Home | Nonton Yuk',
    template: '%s | Nonton Yuk',
  },
  description: 'Yuk Nonton Bareng Aku dengan Nonton Yuk',
  manifest: '/manifest.json',
  icons: [{ url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>{children}</Container>
      </body>
    </html>
  )
}
