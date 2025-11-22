import { Box, styled } from '@mui/material';

export const ReportWrapper = styled(Box)`
  padding: 24px;
  background-color: #f8f9fa;
  min-height: 100vh;

  .report-controls-card {
    margin-bottom: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .report-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 16px;
  }

  .report-title {
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .report-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  /* Smooth, slightly smaller buttons */
  .pdf-button,
  .csv-button,
  .apply-filters-button {
    border-radius: 10px;
    font-size: 0.875rem;
    padding: 6px 16px;
    height: 44px;
    text-transform: none;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
    transition: all 0.25s ease-in-out;
  }

  .pdf-button {
    background-color: #d32f2f;
    color: #fff;
    &:hover {
      background-color: #b71c1c;
      transform: translateY(-2px);
      box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
    }
  }

  .csv-button {
    border: 1px solid #1976d2;
    color: #1976d2;
    &:hover {
      background-color: rgba(25, 118, 210, 0.1);
      transform: translateY(-2px);
      color: black;
      box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
    }
  }

  .apply-filters-button {
    border: 1px solid #1976d2;
    color: #1976d2;
    &:hover {
      background-color: rgba(25, 118, 210, 0.1);
      transform: translateY(-2px);
      color: black;
      box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
    }
  }

  .report-filters {
    padding: 16px 0;
  }

  .filter-select .MuiOutlinedInput-root,
  .date-input .MuiOutlinedInput-root {
    border-radius: 8px;
  }

  .summary-cards-container {
    margin-bottom: 24px;
  }

  .transaction-card {
    margin-bottom: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .section-title {
    font-weight: 600;
    margin-bottom: 24px;
    color: #1976d2;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .table-container {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .table-head {
    background-color: #1976d2;
  }
  .table-header {
    font-weight: 600;
    color: #fff;
    font-size: 1rem;
  }
  .table-row {
    transition: background-color 0.2s ease;
  }
  .table-row:hover {
    background-color: #f0f0f0;
  }
  .table-cell {
    border-bottom: 1px solid #e0e0e0;
  }

  .category-chip {
    background-color: #f5f5f5;
    color: #424242;
    font-weight: 500;
  }

  .amount-text {
    font-weight: 600;
  }
  .amount-text.income-amount {
    color: #2e7d32;
  }
  .amount-text.expense-amount {
    color: #d32f2f;
  }

  .date-cell {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .date-icon {
    color: #6b6b6b;
    font-size: 1rem;
  }

  .income-chip {
    background-color: #c8e6c9;
    color: #2e7d32;
    font-weight: 600;
  }
  .expense-chip {
    background-color: #ffcdd2;
    color: #d32f2f;
    font-weight: 600;
  }

  .category-card,
  .insights-card {
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    height: 100%;
  }

  .category-list,
  .insights-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .category-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-radius: 8px;
    background-color: #fafafa;
    transition: background-color 0.2s ease;
  }
  .category-item:hover {
    background-color: #f5f5f5;
  }

  .category-info {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .category-name {
    font-weight: 500;
    min-width: 120px;
  }
  .category-percentage {
    color: #6b6b6b;
    font-weight: 600;
  }
  .category-amount {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .amount {
    font-weight: 600;
  }

  .trend-icon {
    font-size: 1.2rem;
  }
  .trend-icon.up {
    color: #2e7d32;
  }
  .trend-icon.down {
    color: #d32f2f;
  }

  .insight-item {
    border-radius: 8px;
    font-weight: 500;
  }

  .report-footer {
    margin-top: 24px;
    border-radius: 12px;
    background-color: #f5f5f5;
    text-align: center;
  }
  .footer-text {
    color: #6b6b6b;
    font-weight: 500;
  }

  /* Responsive breakpoints */
  @media (max-width: 960px) {
    padding: 16px;
    .report-header {
      flex-direction: column;
      align-items: flex-start;
    }
    .report-actions {
      width: 100%;
      justify-content: flex-start;
    }
    .card-amount {
      font-size: 1.75rem;
    }
    .category-info {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
  }

  @media (max-width: 600px) {
    padding: 8px;
    .report-title {
      font-size: 1.75rem;
    }
    .card-amount {
      font-size: 1.5rem;
    }
    .report-actions {
      flex-direction: column;
    }
  }
`;
