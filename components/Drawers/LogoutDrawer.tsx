import { useAppDispatch, useAppSelector } from '@/hooks/commons/useReduxHook';
import { setLogout } from '@/redux-toolkit/slices/authSlice';
import { setLogoutModal } from '@/redux-toolkit/slices/globalSlice';
import { LogoutStyled } from '@/styles/CustomStyled/LogoutStyled';
import CustomDrawer from '@/ui/CustomDrawer/CustomDrawer';
import LogoutIcon from '@/ui/Icons/LogoutIcon';
import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { toast } from 'sonner';
import BackdropLoader from '../Commons/BackdropLoader/BackdropLoader';

const LogoutDrawer = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { logoutModal } = useAppSelector(state => state.global);
  const handleClose = () => {
    dispatch(setLogoutModal(!logoutModal));
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      dispatch(setLogout());
      toast.success('Logged out successfully');
      dispatch(setLogoutModal(false));
    } catch {
      toast.error('Failed to logout');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <CustomDrawer open={logoutModal} onClose={handleClose}>
      {isLoading && <BackdropLoader open={isLoading} text="Logging out..." />}
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
          <Button variant="outlined" color="primary" onClick={handleClose}>
            No
          </Button>
          <Button variant="contained" color="primary" type="button" onClick={handleLogout}>
            Yes
          </Button>
        </Stack>
      </LogoutStyled>
    </CustomDrawer>
  );
};

export default LogoutDrawer;
