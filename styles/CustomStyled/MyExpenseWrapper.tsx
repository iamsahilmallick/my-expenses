import { Box, styled } from '@mui/material';

export const MyExpenseWrapper = styled(Box)`
  .expenseWrapper {
    margin-top: 10px;
    border-radius: 16px;
  }

  .expenseRow {
    td {
      padding: 14px !important;
      font-size: 14px;
    }
  }

  .boldCell {
    font-weight: 600;
  }

  .amountCell {
    font-weight: 600;
    color: #1a6f4e;
  }

  .editBtn {
    padding: 4px 12px !important;
    font-size: 13px !important;
    border-radius: 8px !important;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .expenseWrapper {
      padding: 12px;
    }
    .expenseRow td {
      font-size: 12px !important;
      padding: 10px !important;
    }
    .editBtn {
      font-size: 11px !important;
      padding: 3px 10px !important;
    }
  }
  .actionBtn {
    height: 32px;
    padding: 0 14px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;
