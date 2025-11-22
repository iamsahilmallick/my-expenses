import { Box, Menu, styled } from '@mui/material';

export const DashboardHeaderStyled = styled(Box)`
  position: fixed;
  z-index: 99;
  right: 0;
  top: 0;
  width: calc(100% - 301px);
  padding: 13px 20px;
  border-bottom: 1px solid transparent;
  background: linear-gradient(180deg, #c4dbe0 0%, #e3edeb 50%, #eef1ee 100%);
  @media (max-width: 1499px) {
    width: calc(100% - 240px);
    padding: 8px 16px;
  }

  @media (max-width: 1199px) {
    width: 100%;
  }
  .header_title {
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: 1199px) {
      margin: 0 auto 0 0;
      gap: 8px;
      display: none;
    }
    h1 {
      font-weight: 700;
      font-size: 28px;
      color: #111111;
      @media (max-width: 1499px) {
        font-size: 24px;
      }
      @media (max-width: 1199px) {
        font-size: 20px;
      }

      @media (max-width: 599px) {
        font-size: 18px;
      }
    }
  }
  .notification_icon {
    width: 47px;
    height: 42px;
    border-radius: 5px;
    min-width: auto;
    padding: 0;
    margin-right: 12px;
    .is_active {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      &::after {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 100%;
        position: absolute;
        right: 0;
        top: 1px;
        z-index: 1;
      }
    }
  }
  .avatar_block {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    .notificationButton {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background: ${({ theme }) => theme.palette.customColors?.color7FC343};
      color: ${({ theme }) => theme.palette.customColors?.color7FC343};
      border: 1px solid ${({ theme }) => theme.palette.customColors?.color7FC343};
      transition: all 0.3s ease-in-out;

      @media (max-width: 1199px) {
        width: 48px;
        height: 48px;
      }
      &:hover {
        background: ${({ theme }) => theme.palette.primary.main};
        color: ${({ theme }) => theme.palette.common?.white};
        &::before {
          background: ${({ theme }) => theme.palette.common?.white};
        }
      }
      &::before {
        position: absolute;
        content: '';
        border-radius: 50%;
        width: 7px;
        height: 7px;
        background: ${({ theme }) => theme.palette.common?.black};
        top: 16px;
        right: 18px;
        transition: all 0.3s ease-in-out;

        @media (max-width: 1199px) {
          top: 14px;
          right: 16px;
        }
      }
    }
  }
  .avatar_btn {
    padding: 6px 22px 6px 6px;
    border-radius: 70px;
    background: ${({ theme }) => theme.palette.customColors?.color7FC343};
    transition: all 0.3s ease-in-out;
    @media (max-width: 599px) {
      padding: 6px;
    }
    border: 1px solid ${({ theme }) => theme.palette.customColors?.color7FC343};
    &:hover {
      background: ${({ theme }) => theme.palette.primary.main};
      p {
        color: ${({ theme }) => theme.palette.common?.white};
      }
    }
    i {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 43px;
      height: 43px;
      border-radius: 100%;
      overflow: hidden;
      margin-right: 11px;

      @media (max-width: 1199px) {
        width: 36px;
        height: 36px;
      }
      @media (max-width: 599px) {
        margin-right: 0;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    p {
      font-weight: 400;
      font-size: 16px;
      color: ${({ theme }) => theme.palette.customColors?.color7FC343};
      line-height: 1.2;
      text-transform: capitalize;
      transition: all 0.3s ease-in-out;
      @media (max-width: 1499px) {
        font-size: 14px;
      }
      @media (max-width: 1199px) {
        font-size: 13px;
      }
      @media (max-width: 599px) {
        display: none;
      }
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 12px;
    }
  }
  .mobileLogo {
    display: none;
    line-height: 0;
    font-size: 0;
    @media (max-width: 1199px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 10px 0 0;
    }

    @media (max-width: 899px) {
      img {
        max-width: 60px;
      }
    }

    @media (max-width: 599px) {
      margin: 4px 4px 0 0;
      img {
        max-width: 60px;
      }
    }
    a {
      line-height: 0;
      font-size: 0;
      text-decoration: none;
    }
  }
`;

export const AvatarMenu = styled(Menu, {
  shouldForwardProp: data => data !== 'avatarMenuWidth',
})<{ avatarMenuWidth: number | undefined }>`
  .MuiPaper-root {
    width: 200px;
    box-shadow: 0px 3px 28px -6px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    ul {
      padding: 17px 17px;
      li {
        font-weight: 400;
        font-size: 15px;
        line-height: 1.5;
        text-transform: capitalize !important;

        padding: 9px 0;
        &:first-child {
          padding-top: 0px;
        }
        &:last-child {
          padding-bottom: 0px;
        }
        &:hover {
          background-color: transparent;
        }
      }
    }
  }
`;
