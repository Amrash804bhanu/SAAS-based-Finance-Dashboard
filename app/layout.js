import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Finance Dashboard',
  description: 'A modern finance dashboard built with Next.js and Tailwind CSS',
}

/**
 * The main root layout for the entire application.
 * It wraps the application with a sidebar and a main content area.
 * @param {React.ReactNode} children - The page content to be rendered.
 */
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-gray-100 antialiased`}>
        <div className='flex min-h-screen'>
          <Sidebar />
          <main className='flex-1 p-8 ml-64 transition-all duration-300'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
