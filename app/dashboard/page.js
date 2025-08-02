import DashboardCard from '@/components/DashboardCard'
import SpendingChart from '@/components/SpendingChart'
import { spendingData } from '@/data/mockData'
import { DollarSign, ArrowUp, ArrowDown } from 'lucide-react'

/**
 * The main dashboard page content.
 * It displays key financial metrics and a spending chart.
 */
const DashboardPage = () => {
  // Calculate total spending from mock data
  const totalSpending = spendingData.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className='space-y-8'>
      {/* Header and Title */}
      <header className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
        <p className='text-gray-500 mt-1'>
          Welcome back! Here is a summary of your financial activity.
        </p>
      </header>

      {/* Financial Metrics Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <DashboardCard
          title='Total Credit Card Spent'
          value={`$${totalSpending.toLocaleString()}`}
          icon={DollarSign}
        />
        <DashboardCard
          title="Last Month's Spending"
          value={`$${spendingData[spendingData.length - 1].amount}`}
          icon={ArrowUp}
        />
        <DashboardCard
          title='Average Monthly Spend'
          value={`$${(totalSpending / spendingData.length).toFixed(2)}`}
          icon={ArrowDown}
        />
      </div>

      {/* Spending Chart Section */}
      <section>
        <SpendingChart data={spendingData} />
      </section>
    </div>
  )
}

export default DashboardPage
