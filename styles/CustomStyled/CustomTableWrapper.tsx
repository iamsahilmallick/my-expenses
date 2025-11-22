import { Box, styled } from '@mui/material';

export const CustomTableWrapper = styled(Box)`
  background: ${({ theme }) => theme.palette.common.white};
  border-radius: 13px;
  box-shadow: 0px 31px 34px -11px #0000000d;
  .MuiTableContainer-root {
  }

  table {
    thead {
      tr {
        th {
          font-weight: 400;
          font-size: 14px;
          color: ${({ theme }) => theme.palette.customColors.textSecondary};
          border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
          padding: 18.5px 16px;
          white-space: nowrap;
        }
      }
    }
    tbody {
      tr {
        td {
          border: 0;
          font-weight: 400;
          font-size: 14px;
          color: ${({ theme }) => theme.palette.secondary.main};
          padding: 18.5px 16px;
          white-space: nowrap;
        }
      }
    }
  }
  .editBtn {
    max-width: 79px;
    height: 32px;
    padding: 10px;
    width: 100%;
  }

  .pagination_stack {
    padding: 30px 16px;

    @media (max-width: 599px) {
      flex-direction: column;
      padding: 20px 16px;
      gap: 10px;
    }
    .MuiPagination-ul {
      button {
        border-radius: 8px;
        font-weight: 400;
        font-size: 14px;
        border: 1px solid ${({ theme }) => theme.palette.grey[200]};
        transition: all 0.3s ease;
        &.Mui-selected {
          background: ${({ theme }) => theme.palette.primary.light};
          color: ${({ theme }) => theme.palette.common.white};
          border: 1px solid ${({ theme }) => theme.palette.primary.light};
          transition: all 0.3s ease;
        }
      }
    }

    .MuiPaginationItem-previousNext {
      display: none;
    }

    .pagination_right {
      p {
        font-weight: 400;
        font-size: 14px;
        color: ${({ theme }) => theme.palette.secondary.main};
      }
    }

    .arrow_btns_stack {
      gap: 5px;
      button {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        padding: 5px;
        min-width: auto;
      }
    }
  }
  .search_wrapper {
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
    display: flex;

    .tableTitle {
      font-weight: 600;
      font-size: 18px;
      color: ${({ theme }) => theme.palette.secondary.main};
    }

    .search_group {
      display: flex;
      align-items: center;
      gap: 12px;

      @media (max-width: 599px) {
        width: 100%;
        margin-top: 10px;
        justify-content: space-between;
      }

      .search_input {
        max-width: 280px;
        width: 100%;

        input {
          font-size: 14px;
          padding: 8px 12px !important;
        }
      }

      .filter_btn {
        min-width: 40px !important;
        width: 40px !important;
        height: 40px !important;
        border-radius: 8px;
        display: flex;
        border: 1px solid black;
        align-items: center;
        justify-content: center;
        padding: 0;

        svg {
          font-size: 20px;
        }
      }
    }

    @media (max-width: 599px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
`;
