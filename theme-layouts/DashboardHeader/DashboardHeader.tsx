import assets from '@/resources/assets';
import { AvatarMenu, DashboardHeaderStyled } from '@/styles/CustomStyled/DashboardHeaderStyled';
import { LogoutStyled } from '@/styles/CustomStyled/LogoutStyled';
import CustomDrawer from '@/ui/CustomDrawer/CustomDrawer';
import ArrowLeftIcon from '@/ui/Icons/ArrowLeftIcon';
import LogoutIcon from '@/ui/Icons/LogoutIcon';
import NotiIcon from '@/ui/Icons/NotiIcon';
import {
  Box,
  BoxProps,
  Button,
  IconButton,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

interface headerProps extends BoxProps {
  headerHeightCallBack: (data: number) => void;
  headerTitle: string;
  backUrl?: string;
}
const DashboardHeader: React.FC<headerProps & BoxProps> = ({
  headerHeightCallBack,
  headerTitle,
  backUrl,
  ...props
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const avatarBlockRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(0);
  const [avatarMenuWidth, setAvatarMenuWidth] = useState<number | undefined>(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [logoutModalOpen, setLogOutModalOpen] = useState(false);

  const handelLogoutModal = () => {
    setLogOutModalOpen(!logoutModalOpen);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const theme = useTheme();
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (avatarBlockRef.current) {
      setAvatarMenuWidth(avatarBlockRef.current?.clientWidth);
      const adjustWidth = () => {
        setAvatarMenuWidth(avatarBlockRef.current?.clientWidth);
      };

      window.addEventListener('resize', adjustWidth);

      return () => {
        window.removeEventListener('resize', adjustWidth);
      };
    }
  }, [avatarBlockRef.current]);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current?.clientHeight);
      const adjustHeight = () => {
        setHeaderHeight(headerRef.current?.clientHeight);
      };

      window.addEventListener('resize', adjustHeight);

      return () => {
        window.removeEventListener('resize', adjustHeight);
      };
    }
  }, [headerRef.current]);

  useEffect(() => {
    if (headerHeight) {
      headerHeightCallBack(headerHeight);
    }
  }, [headerHeight]);

  return (
    <DashboardHeaderStyled ref={headerRef} {...props}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box className="mobileLogo">
          <Link href={'/'}>
            <Image src={assets.webLogo} width={140} height={25} alt="dash_logo" />
          </Link>
        </Box>

        <Box className="header_title">
          {backUrl ? (
            <IconButton
              LinkComponent={Link}
              href={backUrl}
              sx={{
                width: 36,
                height: 36,
                minWidth: 'auto',
                padding: 0,
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.customColors?.dark,
                background: theme.palette.customColors?.color7FC343,
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
          <Typography variant="h1" textTransform={'capitalize'}>
            {headerTitle}
          </Typography>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          className="header_options"
          ref={avatarBlockRef}
        >
          <Box className="avatar_block">
            <Button type="button" className="notificationButton">
              <NotiIcon />
            </Button>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              className="avatar_btn"
              disableRipple
            >
              <Typography component="i" className="avatar_image">
                <Image src={assets?.nouser} alt="avatar image" width={100} height={100} />
              </Typography>
              <Typography>Angel Rosser</Typography>
            </Button>
            <AvatarMenu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              avatarMenuWidth={avatarMenuWidth}
            >
              <MenuItem onClick={handleClose}>My Profile </MenuItem>
              <MenuItem onClick={handelLogoutModal}>Logout</MenuItem>
            </AvatarMenu>
          </Box>
        </Stack>
      </Stack>

      <CustomDrawer open={logoutModalOpen} onClose={handelLogoutModal}>
        <LogoutStyled>
          <figure>
            <LogoutIcon />
          </figure>
          <Typography variant="h2">Do You Want To Logout?</Typography>
          <Typography variant="body1">
            Vitae risus convallis aliquam lacus mattis et vel phare tra. Purus consequat tempor dui
            quis sed sapien quisque a feugiat quam.
          </Typography>
          <Stack direction={'row'} alignItems={'center'} gap={'12px'}>
            <Button variant="outlined" color="primary" onClick={handelLogoutModal}>
              No
            </Button>
            <Button variant="contained" color="primary" LinkComponent={Link} href="/auth/login/">
              Yes
            </Button>
          </Stack>
        </LogoutStyled>
      </CustomDrawer>
    </DashboardHeaderStyled>
  );
};

export default DashboardHeader;
