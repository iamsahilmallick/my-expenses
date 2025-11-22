import { Box, styled } from '@mui/material';

export const DashboardPageWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;

  .summary-cards-container {
    margin-bottom: 1rem;
  }

  /* ======================================================
     CHARTS SECTION
  ====================================================== */

  .dashboard-charts-box {
    width: 100%;
  }

  /* Card Styling */
  .chart-card {
    padding: 24px;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.25s ease;
  }

  .chart-card:hover {
    box-shadow: 0px 5px 18px rgba(0, 0, 0, 0.12);
  }

  .chart-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #222;
  }

  /* ======================================================
     LINE CHART CUSTOM CSS
  ====================================================== */

  /* Line path animation */
  .recharts-line path {
    animation: drawLine 1.3s ease forwards;
  }

  @keyframes drawLine {
    from {
      stroke-dasharray: 0 2000;
    }
    to {
      stroke-dasharray: 2000 0;
    }
  }

  /* Axis styling */
  .recharts-cartesian-axis-tick-value {
    font-size: 13px;
    fill: #555;
    font-weight: 500;
    padding: 0px;
  }

  /* Tooltip styling */
  .recharts-default-tooltip {
    border-radius: 8px !important;
    padding: 10px !important;
    background: #ffffff !important;
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
  }

  /* Grid line styling */
  .recharts-cartesian-grid-horizontal line,
  .recharts-cartesian-grid-vertical line {
    stroke: rgba(0, 0, 0, 0.05);
  }

  /* Legend styling */
  .recharts-legend-item-text {
    font-size: 13px;
    fill: #333;
    font-weight: 500;
  }

  /* ======================================================
     PIE CHART CUSTOM CSS
  ====================================================== */

  .recharts-pie-label-text {
    font-size: 13px;
    font-weight: 500;
    fill: #444;
  }

  /* Smooth hover scaling */
  .recharts-pie-sector {
    transition: all 0.3s ease;
  }

  .recharts-pie-sector:hover {
    transform: scale(1.06);
    filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.15));
  }

  @media (max-width: 600px) {
    .chart-card {
      padding: 16px;
      border-radius: 12px;
    }

    .chart-title {
      font-size: 16px;
      text-align: center;
    }

    .recharts-wrapper {
      margin-top: 8px;
    }
  }

  @media (max-width: 900px) {
    .chart-card {
      padding: 20px;
    }

    .chart-title {
      font-size: 17px;
    }
  }

  @media (min-width: 1200px) {
    .chart-card {
      padding: 28px;
    }
  }
`;
