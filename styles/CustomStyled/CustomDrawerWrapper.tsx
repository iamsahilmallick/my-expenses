import { Drawer, styled } from '@mui/material';

export const CustomDrawerWrapper = styled(Drawer)`
  .MuiDrawer-paper {
    max-width: 757px;
    background: transparent;
    box-shadow: none;
    opacity: 1;

    @media (max-width: 899px) {
      width: 100%;
    }
  }

  .innerDrawerMain,
  .innerDrawerWrap {
    max-height: calc(100svh - 80px);
    overflow-y: auto;

    /* Hide scrollbar */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }

    @media (max-width: 899px) {
      max-height: calc(65svh - 20px);
      overflow-y: auto;
      padding: 6px;
    }
  }

  .mainDrawerWrapper {
    position: relative;
    padding-left: 68px;
    height: 100%;
    @media (max-width: 899px) {
      padding-top: 50px;
      padding-left: 0;
    }

    .closeBtn {
      position: absolute;
      top: 20px;
      left: 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: ${({ theme }) => theme.palette.common.white};
      color: ${({ theme }) => theme.palette.primary.main};
      transition: all 0.3s ease-in-out;

      @media (max-width: 899px) {
        width: 36px;
        height: 36px;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
      }
      &:hover {
        background: ${({ theme }) => theme.palette.primary.main};
        color: ${({ theme }) => theme.palette.common.white};
      }
    }

    .innerAllInfoDrawer {
      position: relative;
      background: ${({ theme }) => theme.palette.common.white};
      border-radius: 30px 0px 0px 30px;
      height: 100%;
      padding: 40px;

      @media (max-width: 899px) {
        max-height: 65vh;
        border-radius: 10px 10px 0px 0px;
        overflow-y: auto;
        padding: 10px;
      }

      h2 {
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.palette.primary.main};

        @media (max-width: 899px) {
          font-size: 20px;
        }
      }
    }
  }

  .wrapper_mainFormWrapper {
    position: relative;
    margin: 30px 0 20px;
    @media (max-width: 899px) {
      margin: 16px 0;
    }

    .singleFormWrap {
      &:not(:last-child) {
        margin-bottom: 11px;
      }
    }
  }
  .addExpense {
    width: 550px !important;
    @media (max-width: 899px) {
      width: 100% !important;
    }
  }
  .changePassword {
    width: 550px !important;
    @media (max-width: 899px) {
      width: 100% !important;
    }
  }
  .profileUpdate {
    width: 550px !important;
    @media (max-width: 899px) {
      width: 100% !important;
    }
  }
`;
