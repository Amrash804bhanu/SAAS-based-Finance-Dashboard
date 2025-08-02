'use client'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

/**
 * A reusable component to display a line chart of spending over time.
 * It uses the `recharts` library for a professional and responsive chart.
 * @param {Object[]} data - An array of objects with `month` and `amount`.
 */
const SpendingChart = ({ data }) => {
  return (
    <div className='w-full h-80 bg-white p-6 rounded-xl shadow-lg'>
      <h2 className='text-xl font-bold text-gray-800 mb-4'>
        Spending Over Time
      </h2>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray='3 3' stroke='#f1f5f9' />
          <XAxis dataKey='month' className='text-sm text-gray-500' />
          <YAxis className='text-sm text-gray-500' />
          <Tooltip
            contentStyle={{
              borderRadius: '8px',
              border: 'none',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Line
            type='monotone'
            dataKey='amount'
            stroke='#8884d8'
            strokeWidth={2}
            dot={{ fill: '#8884d8', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SpendingChart
