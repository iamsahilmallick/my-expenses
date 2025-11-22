import {
  DashboardInfoCardWrapper,
  TopCardsWrapper,
} from '@/styles/CustomStyled/HomeTopCardsWrapper';
import ArrowDownSharpIcon from '@/ui/Icons/ArrowDownSharpIcon';
import ArrowUpSharpIcon from '@/ui/Icons/ArrowUpSharpIcon';
import { Box, Grid, Stack, Typography, useTheme } from '@mui/material';
import CountUp from 'react-countup';

const HomeTopCards = () => {
  const theme = useTheme();

  return (
    <TopCardsWrapper>
      <Grid container spacing={{ sm: '20px', xs: '10px' }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardInfoCardWrapper
            sx={{
              background: `linear-gradient(170.74deg, rgba(191, 255, 252, 0.5) 13.26%, rgba(151, 240, 236, 0.5) 123.57%)`,
              cursor: 'pointer',
            }}
          >
            <Stack direction={'row'} alignItems={'center'}>
              <Box className="left-box">
                <Typography color="text.primary">Monthly Incomes</Typography>
                <Typography className="count-value">
                  <CountUp start={0} end={200} duration={2} />
                </Typography>
              </Box>
              <i className="top-icon">
                <ArrowDownSharpIcon />
              </i>
            </Stack>
            <Stack
              direction={'row'}
              alignItems={'center'}
              spacing={'4px'}
              className="percent-infoStack"
            >
              <i>
                <ArrowUpSharpIcon />
              </i>
              <Typography variant="body2" fontWeight={500} color={theme.palette.secondary.dark}>
                20% this month
              </Typography>
            </Stack>
          </DashboardInfoCardWrapper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardInfoCardWrapper
            sx={{
              background: `linear-gradient(180deg, rgba(223, 237, 255, 0.5) 0%, rgba(183, 212, 249, 0.5) 118.15%)`,
            }}
          >
            <Stack direction={'row'} alignItems={'center'}>
              <Box className="left-box">
                <Typography color="text.primary">Monthly Expenses</Typography>
                <Typography className="count-value">
                  <CountUp start={0} end={12} duration={2} />
                </Typography>
              </Box>
              <i className="top-icon">
                <ArrowDownSharpIcon />
              </i>
            </Stack>
            <Stack
              direction={'row'}
              alignItems={'center'}
              spacing={'4px'}
              className="percent-infoStack"
            >
              <i>
                <ArrowDownSharpIcon />
              </i>
              <Typography variant="body2" fontWeight={500} color={theme.palette.error.main}>
                60% this month
              </Typography>
            </Stack>
          </DashboardInfoCardWrapper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardInfoCardWrapper
            sx={{
              background: `rgba(225, 221, 255, 0.5)`,
            }}
          >
            <Stack direction={'row'} alignItems={'center'}>
              <Box className="left-box">
                <Typography color="text.primary">Total Monthly Saving </Typography>
                <Typography className="count-value">
                  <CountUp start={0} end={350} duration={2} />
                </Typography>
              </Box>
              <i className="top-icon">
                <ArrowDownSharpIcon />
              </i>
            </Stack>
            <Stack
              direction={'row'}
              alignItems={'center'}
              spacing={'4px'}
              className="percent-infoStack"
            >
              <i>
                <ArrowUpSharpIcon />
              </i>
              <Typography variant="body2" fontWeight={500} color={theme.palette.secondary.dark}>
                15% this month
              </Typography>
            </Stack>
          </DashboardInfoCardWrapper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardInfoCardWrapper
            sx={{
              background: `rgba(253, 230, 255, 0.5);`,
            }}
          >
            <Stack direction={'row'} alignItems={'center'}>
              <Box className="left-box">
                <Typography color="text.primary">Payment Pending</Typography>
                <Typography className="count-value">
                  <CountUp start={0} end={200} duration={2} />
                </Typography>
              </Box>
              <i className="top-icon">
                <ArrowDownSharpIcon />
              </i>
            </Stack>
            <Stack
              direction={'row'}
              alignItems={'center'}
              spacing={'4px'}
              className="percent-infoStack"
            >
              <i>
                <ArrowUpSharpIcon />
              </i>
              <Typography variant="body2" fontWeight={500} color={theme.palette.secondary.dark}>
                2% this month
              </Typography>
            </Stack>
          </DashboardInfoCardWrapper>
        </Grid>
      </Grid>
    </TopCardsWrapper>
  );
};

export default HomeTopCards;
