import { Box, styled } from '@mui/material';

export const MyCategoryWrapper = styled(Box)`
  .incomeWrapper {
    margin-top: 10px;
    border-radius: 16px;
  }

  .incomeRow {
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
    .incomeWrapper {
      padding: 12px;
    }
    .incomeRow td {
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
