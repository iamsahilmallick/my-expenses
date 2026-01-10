import SummaryCard from '@/components/Commons/SummaryCard';
import { ProjectCurrency } from '@/config/constants';
import { useMonthlyStats, useTopCategory } from '@/hooks/react-query/stats/stats.hook';
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
  Skeleton,
  Typography,
} from '@mui/material';

const Report = () => {
  const { data: monthlyStats, isPending: statsPending } = useMonthlyStats();
  const { data: topCategoryWise, isPending: topCategoryPending } = useTopCategory();

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
              title="Wallet Balance"
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
              title="Monthly Expense"
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
              title="Monthly Income"
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
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card className="category-card">
              <CardContent>
                <Typography variant="h5" className="section-title">
                  Top Expenses by Category
                </Typography>
                <Box className="category-list">
                  {topCategoryPending ? (
                    Array.from({ length: 5 }).map((_, index) => (
                      <Box key={index} className="category-item">
                        <Box className="category-info">
                          <Skeleton variant="text" width={120} height={24} />
                        </Box>
                        <Box className="category-amount">
                          <Skeleton variant="text" width={80} height={24} />
                        </Box>
                      </Box>
                    ))
                  ) : topCategoryWise && topCategoryWise?.length > 0 ? (
                    topCategoryWise?.map((stat, index) => (
                      <Box key={index} className="category-item">
                        <Box className="category-info">
                          <Typography variant="body1" className="category-name">
                            {stat.categoryTitle}
                          </Typography>
                        </Box>
                        <Box className="category-amount">
                          <Typography variant="body1" className="amount">
                            {ProjectCurrency.INR}
                            {stat.totalAmount}
                          </Typography>
                          {stat.type === 'expense' && <TrendingUp className="trend-icon up" />}
                          {stat.type === 'income' && <TrendingDown className="trend-icon down" />}
                        </Box>
                      </Box>
                    ))
                  ) : (
                    <Alert severity="info" className="no-data-alert">
                      No category data found for the selected period.
                    </Alert>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card className="insights-card">
              <CardContent>
                <Typography variant="h5" className="section-title">
                  Why This App is Useful
                </Typography>
                <Box className="insights-list">
                  <Alert severity="info" className="insight-item">
                    Track your expenses and income easily in one place.
                  </Alert>
                  <Alert severity="success" className="insight-item">
                    Understand your spending habits and make smarter financial decisions.
                  </Alert>
                  <Alert severity="warning" className="insight-item">
                    Plan your monthly budget and stay on top of your savings goals.
                  </Alert>
                  <Alert severity="info" className="insight-item">
                    Get insights into top spending categories and where to save.
                  </Alert>
                  <Alert severity="info" className="insight-item">
                    Helps you build better financial habits over time.
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
