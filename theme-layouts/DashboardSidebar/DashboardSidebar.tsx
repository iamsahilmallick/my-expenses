import { useAppDispatch, useAppSelector } from '@/hooks/commons/useReduxHook';
import { setLogoutModal } from '@/redux-toolkit/slices/globalSlice';
import assets from '@/resources/assets';
import { TDashoboardSidebarProps } from '@/typescripts/interfaces/common.interfaces';
import LogoutIcon from '@/ui/Icons/LogoutIcon';

import { List, ListItem, ListItemButton, Stack, styled, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const DashboardSidebar: React.FC<TDashoboardSidebarProps> = ({ navItems }) => {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const { logoutModal } = useAppSelector(state => state.global);

  const handelLogoutModal = () => {
    dispatch(setLogoutModal(!logoutModal));
  };
  return (
    <DashboardSidebarWrapper>
      <Stack
        className="logo_div"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href={'/'} className="logo_link">
          <figure>
            <Image src={assets.webLogo} width={40} height={40} alt="dash_logo" priority />
          </figure>
          <Typography className="logo_text">Dashboard</Typography>
        </Link>
        {/* <Button className="collapse_btn">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button> */}
      </Stack>
      <Box className="sidebar_btm">
        <List>
          {navItems?.map((navItem, index) => {
            return (
              <ListItem key={index}>
                <Link href={navItem.route} className={navItem.route === pathName ? 'active' : ''}>
                  <i>{navItem.icon}</i>
                  <Typography className="font-inherit">{navItem.name}</Typography>
                </Link>
              </ListItem>
            );
          })}
          <ListItem>
            <ListItemButton className="logout_btn" onClick={handelLogoutModal}>
              <i>
                <LogoutIcon />
              </i>
              <Typography>Logout</Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </DashboardSidebarWrapper>
  );
};

export default DashboardSidebar;

export const DashboardSidebarWrapper = styled(Box)`
  width: 301px;
  background: linear-gradient(180deg, #6d9faa 0%, #8fd5c7 50%, #c4efc4 100%);
  border-right: 1px solid rgba(255, 255, 255, 0.085);
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh;
  display: flex;
  flex-direction: column;

  @media (max-width: 1499px) {
    width: 240px;
  }

  @media (max-width: 1199px) {
    width: 100%;
    top: inherit;
    bottom: 20px;
    z-index: 999;
    height: auto;
    padding: 0 16px;
    background: transparent;
  }

  @media (max-width: 599px) {
    padding: 0 10px;
  }

  .logo_div {
    padding: 24px 20px;
    background: rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    position: relative;
    flex-shrink: 0;

    @media (max-width: 1499px) {
      padding: 16px 10px;
    }

    @media (max-width: 1199px) {
      display: none;
    }

    .logo_link {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    figure {
      width: 36px;
      height: 36px;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 8px;
      padding: 4px;
      flex-shrink: 0;
    }

    .logo_text {
      font-size: 20px;
      font-weight: 700;
      color: #060606;
      white-space: nowrap;
      transition: all 0.3s ease;
    }

    .collapse_btn {
      min-width: 32px;
      width: 32px;
      height: 32px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.15);
      color: #ffffff;
      padding: 0;
      flex-shrink: 0;

      &:hover {
        background: rgba(255, 255, 255, 0.25);
      }

      svg {
        transition: transform 0.3s ease;
      }
    }
  }

  .sidebar_btm {
    flex: 1;
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    background: transparent;
    overflow: hidden;

    @media (max-width: 1499px) {
      padding: 16px 10px;
    }

    @media (max-width: 1199px) {
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 4px;

      @media (max-width: 1199px) {
        flex-direction: row;
        gap: 6px;
        justify-content: center;
        padding: 6px;
        background: linear-gradient(180deg, #134e5e 0%, #71b280 100%);
        border-radius: 70px;
        width: auto;
      }

      @media (max-width: 390px) {
        gap: 2px;
      }

      li {
        @media (max-width: 1199px) {
          width: auto;
        }

        a {
          gap: 12px;
          display: flex;
          align-items: center;
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          background-color: transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: #0b0b0c;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          border: 1px solid transparent;

          @media (max-width: 1499px) {
            font-size: 14px;
            padding: 12px 8px;
            border-radius: 10px;

            svg {
              width: 18px;
              height: auto;
            }
          }

          @media (max-width: 1199px) {
            font-size: 0;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
          }

          @media (max-width: 599px) {
            width: 40px;
            height: 40px;
            color: ${({ theme }) => theme.palette.common.white};
          }

          @media (max-width: 410px) {
            width: 34px;
            height: 34px;
            color: ${({ theme }) => theme.palette.common.white};
          }

          p {
            color: inherit;
            font-size: 16px;
            font-weight: 400;

            @media (max-width: 1499px) {
              font-size: 14px;
            }
            @media (max-width: 1199px) {
              font-size: 0;
              display: none;
            }
          }

          &.active {
            background: ${({ theme }) => theme.palette.customColors.main};
            color: ${({ theme }) => theme.palette.common.white};
          }

          &:hover {
            background: ${({ theme }) => theme.palette.customColors.dark};
            border-color: ${({ theme }) => theme.palette.customColors.light};
            color: ${({ theme }) => theme.palette.common.white};
          }
        }

        .logout_btn {
          gap: 8px;
          display: flex;
          align-items: center;
          width: 100%;
          overflow: hidden;
          padding: 18px 16px;
          border-radius: 12px;
          background-color: transparent;
          transition: all 0.3s ease-in-out 0s;
          color: ${({ theme }) => theme.palette.common.black};
          font-size: 16px;
          font-weight: 400;

          @media (max-width: 1499px) {
            font-size: 14px;
            padding: 12px 8px;
            border-radius: 10px;

            svg {
              width: 18px;
              height: auto;
            }
          }

          @media (max-width: 1199px) {
            font-size: 0;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
          }

          @media (max-width: 599px) {
            width: 40px;
            height: 40px;
            color: #101011;
          }

          @media (max-width: 410px) {
            width: 34px;
            height: 34px;
          }

          p {
            color: inherit;
            font-size: 16px;
            font-weight: 400;

            @media (max-width: 1499px) {
              font-size: 14px;
            }

            @media (max-width: 1199px) {
              font-size: 0;
              display: none;
            }
          }

          &:hover {
            background-color: ${({ theme }) => theme.palette.primary.main};
            color: ${({ theme }) => theme.palette.common.white};
          }
        }
      }
    }
  }
`;
