import { useAppDispatch, useAppSelector } from '@/hooks/commons/useReduxHook';
import { _truncatedFirstName } from '@/lib/common/commonUtils';
import { setLogoutModal } from '@/redux-toolkit/slices/globalSlice';
import assets from '@/resources/assets';
import { ProjectRoutes } from '@/routes/createRoutes';
import { AvatarMenu, DashboardHeaderStyled } from '@/styles/CustomStyled/DashboardHeaderStyled';
import ArrowLeftIcon from '@/ui/Icons/ArrowLeftIcon';
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
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

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
  const router = useRouter();
  const dispatch = useAppDispatch();
  const headerRef = useRef<HTMLDivElement>(null);
  const avatarBlockRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(0);
  const [avatarMenuWidth, setAvatarMenuWidth] = useState<number | undefined>(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { userProfile } = useAppSelector(state => state.auth);
  const { logoutModal } = useAppSelector(state => state.global);
  const handelLogoutModal = () => {
    handleClose();
    dispatch(setLogoutModal(!logoutModal));
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
            <Button
              type="button"
              className="notificationButton"
              onClick={() => {
                toast.info('Under Development');
              }}
            >
              <NotiIcon />
            </Button>
            <Button
              id="basic-button"
              aria-controls={Boolean(anchorEl) ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
              onClick={handleClick}
              className="avatar_btn"
              disableRipple
            >
              <Typography component="i" className="avatar_image">
                <Image
                  src={userProfile?.profilePic ? userProfile?.profilePic : assets?.nouser}
                  alt="avatar image"
                  width={100}
                  height={100}
                  priority
                />
              </Typography>
              <Typography>{_truncatedFirstName(userProfile?.fullName)}</Typography>
            </Button>
            <AvatarMenu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              avatarMenuWidth={avatarMenuWidth}
            >
              <MenuItem
                onClick={() => {
                  router.push(ProjectRoutes.dashboard.profile);
                  handleClose();
                }}
              >
                My Profile{' '}
              </MenuItem>
              <MenuItem onClick={handelLogoutModal}>Logout</MenuItem>
            </AvatarMenu>
          </Box>
        </Stack>
      </Stack>
    </DashboardHeaderStyled>
  );
};

export default DashboardHeader;
