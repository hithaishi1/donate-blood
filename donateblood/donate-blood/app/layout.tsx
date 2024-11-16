import { Inter } from 'next/font/google'
import Header from './components/layout/Header'
import './globals.css'
import 'leaflet/dist/leaflet.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blood Donation Platform',
  description: 'Connect blood donors with those in need',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
