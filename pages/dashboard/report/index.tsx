import SummaryCard from '@/components/Commons/SummaryCard';
import { ReportWrapper } from '@/styles/CustomStyled/ReportWrapper';
import DashboardWrapper from '@/theme-layouts/DashboardWrapper/DashboardWrapper';
import CustomButton from '@/ui/CustomButton/CustomButton';
import CustomDatePicker from '@/ui/CustomDatePicker/CustomDatePicker';
import CustomSelect from '@/ui/CustomSelect/CustomSelect';
import {
  AccountBalanceWallet,
  Download,
  FilterList,
  Payments,
  PictureAsPdf,
  Savings,
  TrendingDown,
  TrendingUp,
} from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  MenuItem,
  Typography,
} from '@mui/material';

const Report = () => {
  const categoryStats = [
    { category: 'Food & Dining', amount: 450, percentage: 32, trend: 'up' },
    { category: 'Transportation', amount: 120, percentage: 9, trend: 'down' },
    { category: 'Shopping', amount: 300, percentage: 21, trend: 'up' },
    { category: 'Utilities', amount: 150, percentage: 11, trend: 'stable' },
    { category: 'Entertainment', amount: 200, percentage: 14, trend: 'up' },
  ];

  return (
    <DashboardWrapper headerTitle="Financial Reports" backUrl="/">
      <ReportWrapper>
        <Card className="report-controls-card">
          <CardContent>
            <Box className="report-header">
              <Typography variant="h4" className="report-title">
                Financial Analysis
              </Typography>
              <Box className="report-actions">
                <Button variant="contained" startIcon={<PictureAsPdf />} className="pdf-button">
                  Generate PDF
                </Button>
                <Button variant="outlined" startIcon={<Download />} className="csv-button">
                  Download CSV
                </Button>
              </Box>
            </Box>
            <Box className="report-filters">
              <Grid container spacing={3} alignItems="center">
                <Grid size={{ xs: 12, md: 3 }}>
                  <FormControl fullWidth className="filter-select">
                    <CustomSelect initialvalue="Report Type">
                      <MenuItem value="daily">Daily</MenuItem>
                      <MenuItem value="weekly">Weekly</MenuItem>
                      <MenuItem value="monthly">Monthly</MenuItem>
                      <MenuItem value="yearly">Yearly</MenuItem>
                      <MenuItem value="custom">Custom Range</MenuItem>
                    </CustomSelect>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <CustomDatePicker placeholder="Start Date" />
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <CustomDatePicker placeholder="End Date" />
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <CustomButton
                    variant="outlined"
                    startIcon={<FilterList />}
                    fullWidth
                    className="apply-filters-button"
                  >
                    Apply Filters
                  </CustomButton>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
        <Grid container spacing={3} className="summary-cards-container">
          <Grid size={{ xs: 12, md: 3 }}>
            <SummaryCard
              title="Income"
              price={50000}
              Icon={<TrendingUp />}
              borderClass="border-success"
              iconClass="icon-success"
              amountClass="amount-positive"
              chipLabel="+12%"
              chipClass="chip-positive"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <SummaryCard
              title="Balance"
              price={15000}
              Icon={<AccountBalanceWallet />}
              borderClass="border-info"
              iconClass="icon-info"
              chipLabel="Stable"
              chipClass="chip-positive"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <SummaryCard
              title="Expenses"
              price={20000}
              Icon={<Payments />}
              borderClass="border-error"
              iconClass="icon-error"
              amountClass="amount-negative"
              chipLabel="-5%"
              chipClass="chip-negative"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <SummaryCard
              title="Savings Rate"
              price={50000}
              Icon={<Savings />}
              borderClass="border-success"
              iconClass="icon-success"
              amountClass="amount-positive"
              chipLabel="+8%"
              chipClass="chip-positive"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card className="category-card">
              <CardContent>
                <Typography variant="h5" className="section-title">
                  Top Expenses by Category
                </Typography>
                <Box className="category-list">
                  {categoryStats.map((stat, index) => (
                    <Box key={index} className="category-item">
                      <Box className="category-info">
                        <Typography variant="body1" className="category-name">
                          {stat.category}
                        </Typography>
                        <Typography variant="body2" className="category-percentage">
                          {stat.percentage}%
                        </Typography>
                      </Box>
                      <Box className="category-amount">
                        <Typography variant="body1" className="amount">
                          ${stat.amount}
                        </Typography>
                        {stat.trend === 'up' && <TrendingUp className="trend-icon up" />}
                        {stat.trend === 'down' && <TrendingDown className="trend-icon down" />}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card className="insights-card">
              <CardContent>
                <Typography variant="h5" className="section-title">
                  Financial Insights
                </Typography>
                <Box className="insights-list">
                  <Alert severity="info" className="insight-item">
                    Your food expenses are 32% of total spending. Consider meal planning to reduce
                    costs.
                  </Alert>
                  <Alert severity="success" className="insight-item">
                    Great job! Your savings rate is 25% this month.
                  </Alert>
                  <Alert severity="warning" className="insight-item">
                    Transportation costs decreased by 15% compared to last month.
                  </Alert>
                  <Alert severity="info" className="insight-item">
                    You're on track to meet your monthly budget goals.
                  </Alert>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ReportWrapper>
    </DashboardWrapper>
  );
};

export default Report;
