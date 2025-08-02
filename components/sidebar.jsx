'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Wallet,
  CreditCard,
  PiggyBank,
  Receipt,
  Settings,
} from 'lucide-react'

// Sidebar navigation links with icons from lucide-react.
const navLinks = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Transactions', href: '/transactions', icon: Receipt },
  { name: 'Accounts', href: '/accounts', icon: Wallet },
  { name: 'Budgets', href: '/budgets', icon: PiggyBank },
  { name: 'Cards', href: '/cards', icon: CreditCard },
  { name: 'Settings', href: '/settings', icon: Settings },
]

/**
 * The main sidebar component for the dashboard.
 * It is fixed on the left and handles navigation with active link highlighting.
 */
const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className='fixed left-0 top-0 w-64 h-full bg-gray-900 text-white p-6 flex flex-col shadow-2xl z-50'>
      {/* App Logo/Title */}
      <div className='flex items-center gap-3 mb-12'>
        <span className='text-2xl font-extrabold tracking-tight text-indigo-400'>
          <CreditCard size={32} />
        </span>
        <h1 className='text-xl font-bold'>FinanceFlow</h1>
      </div>

      {/* Navigation Menu */}
      <nav className='flex-1'>
        <ul className='space-y-4'>
          {navLinks.map((link) => {
            // Determine if the current link is active
            const isActive = pathname.startsWith(link.href)
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-4 p-3 rounded-lg text-lg font-medium transition-colors duration-200 ${isActive ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-400 hover:bg-gray-800'}`}
                >
                  <link.icon size={20} />
                  <span>{link.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer or User Info can go here */}
      <div className='mt-auto pt-6 border-t border-gray-700'>
        <p className='text-sm text-gray-500'>© 2024 FinanceFlow</p>
      </div>
    </aside>
  )
}

export default Sidebar
