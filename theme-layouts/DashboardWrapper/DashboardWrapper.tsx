import { sidebarMenus } from '@/components/NavItems/NavItems';
import ArrowLeftIcon from '@/ui/Icons/ArrowLeftIcon';
import { IconButton, styled, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Stack, { StackProps } from '@mui/material/Stack';
import React, { useCallback, useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

interface dashBoardProps extends StackProps {
  headerTitle: string;
  backUrl?: string;
}

const DashboardWrapper: React.FC<dashBoardProps & StackProps> = ({
  headerTitle,
  backUrl,
  ...props
}) => {
  const [getHeaderHeight, setGetHeaderHeight] = useState<number>(0);
  const theme = useTheme();

  const headerHeightCallBack = useCallback((data: number) => {
    setGetHeaderHeight(data);
  }, []);

  return (
    <DashboardWrapperStyled
      headerHeight={getHeaderHeight}
      direction="row"
      flexWrap="wrap"
      {...props}
    >
      <DashboardSidebar navItems={sidebarMenus} />
      <Box className="wrapper_rgt">
        <DashboardHeader
          headerTitle={headerTitle}
          headerHeightCallBack={headerHeightCallBack}
          backUrl={backUrl}
        />
        <Box className="dashboard_body">
          <Stack
            alignItems={'center'}
            gap={1.5}
            display={{ xs: 'flex', lg: 'none' }}
            sx={{
              marginBottom: { xs: '16px', sm: '16px', md: '20px' },
            }}
          >
            {backUrl ? (
              <IconButton
                sx={{
                  width: 36,
                  height: 36,
                  minWidth: 'auto',
                  padding: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.palette.customColors?.dark,
                  background: theme.palette.customColors?.sidebarBg,
                  borderRadius: '50%',
                  '&:hover': {
                    background: theme.palette.primary.main,
                    color: theme.palette.common.white,
                  },
                }}
              >
                <ArrowLeftIcon />
              </IconButton>
            ) : null}
            <Typography
              variant="h1"
              fontWeight={700}
              color={theme.palette.primary.main}
              fontSize={{ xs: '20px', sm: '24px', md: '28px' }}
              textTransform={'capitalize'}
            >
              {headerTitle}
            </Typography>
          </Stack>

          {props?.children}
        </Box>
      </Box>
    </DashboardWrapperStyled>
  );
};

export default DashboardWrapper;

export const DashboardWrapperStyled = styled(Stack, {
  shouldForwardProp: data => data !== 'headerHeight',
})<{ headerHeight: number }>`
  height: 100vh;
  .wrapper_rgt {
    width: calc(100% - 301px);
    flex-basis: calc(100% - 301px);
    padding-top: 82px;
    margin-left: auto;
    @media (max-width: 1499px) {
      width: calc(100% - 240px);
      flex-basis: calc(100% - 240px);
    }
    @media (max-width: 1199px) {
      width: 100%;
      flex-basis: 100%;
      padding-top: 65px;
    }
  }
  .dashboard_body {
    padding: 20px;
    border-radius: 20px;
    height: calc(100vh - 82px);
    overflow-y: auto;

    @media (max-width: 1499px) {
      padding: 16px;
    }

    @media (max-width: 1199px) {
      padding-bottom: 90px;
      height: calc(100vh - 65px);
    }
    @media (max-width: 599px) {
      padding-bottom: 80px;
      margin-top: 20px;
    }
  }
  .common_box {
    padding: 16px 20px;
    border-radius: 10px;
  }
  .topSearchWrapper {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 599px) {
      flex-wrap: wrap;
      gap: 10px;
    }
    .creatBtn {
      width: 169px;
      padding: 10px 16px;
      height: 55px;

      @media (max-width: 899px) {
        height: 48px;
        width: 120px;
        font-size: 14px;
      }
      @media (max-width: 599px) {
        width: 100%;
      }
    }
    .MuiFormControl-root {
      width: calc(100% - 189px);
      flex-grow: 1;
      @media (max-width: 899px) {
        width: calc(100% - 120px);
      }
      @media (max-width: 599px) {
        width: 100%;
      }
      .MuiInputBase-root {
        border: 1px solid ${({ theme }) => theme.palette.customColors?.color002F06};
        background: ${({ theme }) => theme.palette.customColors?.bodyBg};
        border-radius: 8px;
        padding: 10px 22px;
        height: 55px;
        box-shadow: none;

        @media (max-width: 899px) {
          height: 48px;
        }
      }
    }
  }
`;
