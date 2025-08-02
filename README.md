A modern, responsive finance dashboard built with Next.js 14, Tailwind CSS, and Recharts. This project provides a clean and functional foundation for a personal or business finance management application.

Key Features
Responsive UI: A sleek, mobile-first design built with Tailwind CSS.

Static Sidebar Navigation: A fixed sidebar that provides seamless navigation between different sections of the dashboard.

Dynamic Page Content: The main content area dynamically updates based on the selected navigation link.

Data Visualization: Includes a professional-looking line chart to showcase spending trends over time using recharts.

Mock Data: Uses a simple mock data file (data/mockData.js) to power the dashboard components and charts, making it easy to replace with a real API later.

Getting Started
To run this project on your local machine, follow these simple steps.

Prerequisites
Make sure you have Node.js (version 18 or higher) and npm installed.

1. Clone the repository
git clone https://github.com/your-username/finance-dashboard.git
cd finance-dashboard

2. Install Dependencies
Install all the necessary packages by running the following command in your terminal:

npm install

3. Run the Development Server
Start the application in development mode:

npm run dev

Open your web browser and navigate to http://localhost:3000 to see the dashboard. The page will automatically reload as you make changes.

Project Structure
A high-level overview of the project's file and folder structure:

/your-nextjs-project
├── app/                  # Next.js App Router for pages and layouts
│   ├── dashboard/        # Main dashboard page
│   ├── transactions/     # Placeholder for transactions page
│   ├── ...               # Other navigation pages
│   └── layout.js         # Root layout with Sidebar and main content
├── components/           # Reusable React components
│   ├── Sidebar.jsx
│   ├── DashboardCard.jsx
│   └── SpendingChart.jsx
├── data/                 # Mock data for charts and components
│   └── mockData.js
└── tailwind.config.js    # Tailwind CSS configuration

Technologies Used
Next.js: The React framework for production.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

Recharts: A composable charting library built with React and D3.

Lucide React: A beautiful, customizable icon library.

Future Improvements
API Integration: Replace the mock data with a real backend API to fetch and manage financial data.

Authentication: Add user login, signup, and session management.

New Features: Implement more features like transaction filtering, budget tracking, and account management.

Advanced Charts: Add different chart types, such as bar charts or pie charts, to visualize data in new ways.
