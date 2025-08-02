import { LucideIcon } from 'lucide-react'

/**
 * A reusable card component to display key financial metrics.
 * @param {string} title - The title of the card.
 * @param {string} value - The main value to display.
 * @param {LucideIcon} icon - An icon component from lucide-react.
 */
const DashboardCard = ({ title, value, icon: Icon }) => {
  return (
    <div className='bg-white p-6 rounded-xl shadow-lg flex items-center gap-4 transition-all duration-300 hover:scale-[1.02]'>
      <div className='p-3 bg-indigo-100 text-indigo-600 rounded-full'>
        <Icon size={24} />
      </div>
      <div>
        <h3 className='text-gray-500 font-medium text-sm'>{title}</h3>
        <p className='text-2xl font-bold text-gray-900 mt-1'>{value}</p>
      </div>
    </div>
  )
}

export default DashboardCard
