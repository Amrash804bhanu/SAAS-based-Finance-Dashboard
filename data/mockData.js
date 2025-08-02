// A simple array of objects to mock spending data over a few months.
// This data will be used to display total spending and for the spending chart.
export const spendingData = [
  { month: 'Jan', amount: 1250 },
  { month: 'Feb', amount: 1400 },
  { month: 'Mar', amount: 1100 },
  { month: 'Apr', amount: 1850 },
  { month: 'May', amount: 2100 },
  { month: 'Jun', amount: 1600 },
  { month: 'Jul', amount: 1950 },
  { month: 'Aug', amount: 2200 },
  { month: 'Sep', amount: 1750 },
  { month: 'Oct', amount: 2400 },
  { month: 'Nov', amount: 2000 },
  { month: 'Dec', amount: 2500 },
]

// Mock data for transactions.
export const transactionData = [
  {
    id: 1,
    date: '2024-05-20',
    description: 'Groceries',
    amount: 150.75,
    category: 'Food',
  },
  {
    id: 2,
    date: '2024-05-19',
    description: 'Online Subscription',
    amount: 19.99,
    category: 'Subscriptions',
  },
  {
    id: 3,
    date: '2024-05-18',
    description: 'Dinner out',
    amount: 75.0,
    category: 'Food',
  },
  {
    id: 4,
    date: '2024-05-17',
    description: 'Gasoline',
    amount: 45.5,
    category: 'Transport',
  },
]
