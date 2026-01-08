import SummaryCard from '@/components/Commons/SummaryCard';
import { useMonthlyStats } from '@/hooks/react-query/stats/stats.hook';
import { DashboardPageWrapper } from '@/styles/CustomStyled/DashboardPageWrapper';
import DashboardWrapper from '@/theme-layouts/DashboardWrapper/DashboardWrapper';

import { AccountBalanceWallet, Payments, Savings, TrendingUp } from '@mui/icons-material';

import { Box, Card, Grid, Typography } from '@mui/material';

// 📌 Recharts Imports
import {
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const monthlyData = [
  { month: 'Jan', income: 50000, expenses: 20000 },
  { month: 'Feb', income: 52000, expenses: 22000 },
  { month: 'Mar', income: 48000, expenses: 25000 },
  { month: 'Apr', income: 51000, expenses: 23000 },
  { month: 'May', income: 55000, expenses: 26000 },
  { month: 'Jun', income: 60000, expenses: 30000 },
  { month: 'Jul', income: 62000, expenses: 31000 },
  { month: 'Aug', income: 58000, expenses: 29000 },
  { month: 'Sep', income: 61000, expenses: 32000 },
  { month: 'Oct', income: 63000, expenses: 34000 },
  { month: 'Nov', income: 65000, expenses: 35000 },
  { month: 'Dec', income: 67000, expenses: 36000 },
];

// 📌 Mock Data - Category Wise Expenses
const categoryData = [
  { name: 'Food', value: 4000 },
  { name: 'Transport', value: 2500 },
  { name: 'Shopping', value: 6000 },
  { name: 'Bills', value: 3500 },
  { name: 'Others', value: 2000 },
];

const pieColors = ['#4CAF50', '#FF9800', '#03A9F4', '#E91E63', '#9C27B0'];

const DashboardHome = () => {
  const { data: monthlyStats, isPending: statsPending } = useMonthlyStats();

  return (
    <DashboardWrapper headerTitle="Dashboard" backUrl="/">
      <DashboardPageWrapper>
        <Box className="dashboard-welcome-box">
          <Grid container spacing={3} className="summary-cards-container">
            <Grid size={{ xs: 12, md: 3 }}>
              <SummaryCard
                title="Expense"
                price={monthlyStats?.totalExpense || 0}
                Icon={<TrendingUp />}
                borderClass="border-success"
                iconClass="icon-success"
                amountClass="amount-positive"
                chipClass="chip-positive"
                loading={statsPending}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <SummaryCard
                title="Income"
                price={monthlyStats?.totalIncome || 0}
                Icon={<AccountBalanceWallet />}
                borderClass="border-info"
                iconClass="icon-info"
                chipClass="chip-positive"
                loading={statsPending}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <SummaryCard
                title="Total Saving"
                price={monthlyStats?.totalSaving || 0}
                Icon={<Payments />}
                borderClass="border-error"
                iconClass="icon-error"
                amountClass="amount-negative"
                chipClass="chip-negative"
                loading={statsPending}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <SummaryCard
                title="Annual Saving"
                price={monthlyStats?.annualSaving || 0}
                Icon={<Savings />}
                borderClass="border-success"
                iconClass="icon-success"
                amountClass="amount-positive"
                chipClass="chip-positive"
                loading={statsPending}
              />
            </Grid>
          </Grid>
        </Box>

        <Box className="dashboard-charts-box" mt={4}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Card className="chart-card">
                <Typography className="chart-title" variant="h6" mb={2}>
                  Monthly Income vs Expenses
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={monthlyData}
                    margin={{ top: 10, right: 20, bottom: 30, left: 0 }}
                  >
                    <XAxis dataKey="month" interval={1} angle={-35} textAnchor="end" height={60} />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Line type="monotone" dataKey="income" stroke="#4CAF50" strokeWidth={3} />
                    <Line type="monotone" dataKey="expenses" stroke="#F44336" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card className="chart-card">
                <Typography className="chart-title" variant="h6" mb={2}>
                  Category-wise Expenses
                </Typography>

                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      label
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={index} fill={pieColors[index % pieColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </DashboardPageWrapper>
    </DashboardWrapper>
  );
};

export default DashboardHome;
