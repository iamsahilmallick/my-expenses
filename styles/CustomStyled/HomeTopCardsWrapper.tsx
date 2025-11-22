import { Box, styled } from '@mui/material';

export const DashboardMainWrapper = styled(Box)``;

export const TopCardsWrapper = styled(Box)``;

export const DashboardInfoCardWrapper = styled(Box)`
  border-radius: 12px;
  padding: 20px;
  @media (max-width: 1399px) {
    padding: 15px;
  }
  .left-box {
    width: calc(100% - 53px);
    padding-right: 8px;
    @media (max-width: 1399px) {
      width: calc(100% - 30px);
    }
    p {
      @media (max-width: 1399px) {
        font-size: 14px;
      }
    }
    .count-value {
      font-size: 32px;
      color: ${({ theme }) => theme.palette.customColors.dark};
      @media (max-width: 1399px) {
        font-size: 28px;
      }
    }
  }
  i {
    line-height: 0;
  }
  .top-icon {
    width: 53px;
    height: auto;
    @media (max-width: 1399px) {
      width: 30px;
      svg {
        width: 30px;
        height: auto;
      }
    }
  }
  .percent-infoStack {
    background: #ffffff99;
    border: 1.5px solid ${({ theme }) => theme.palette.common.white};
    border-radius: 32px;
    padding: 8.5px 14px;
    margin-top: 12px;
    @media (max-width: 1399px) {
      padding: 5px 10px;
    }
  }
`;
