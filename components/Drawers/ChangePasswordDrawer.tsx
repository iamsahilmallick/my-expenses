import CustomDrawer from '@/ui/CustomDrawer/CustomDrawer';
import CustomInput from '@/ui/CustomInput/CustomInput';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

interface DrawerProps {
  openDrawer: boolean;
  toggleDrawer: () => void;
}

const ChangePasswordDrawer = ({ openDrawer, toggleDrawer }: DrawerProps) => {
  return (
    <CustomDrawer onClose={toggleDrawer} open={openDrawer} className="changePassword">
      <Box className="innerDrawerMain">
        <Typography variant="h2">Change Password</Typography>
        <Box className="wrapper_mainFormWrapper">
          <Box className="singleFormWrap">
            <CustomInput placeholder="Enter Current Password" isPassword />
          </Box>
          <Box className="singleFormWrap">
            <CustomInput placeholder="Enter New Password" isPassword />
          </Box>
        </Box>
        <Box className="btnWrapper">
          <Button fullWidth disableRipple variant="contained" color="primary" LinkComponent={Link}>
            Change Password
          </Button>
        </Box>
      </Box>
    </CustomDrawer>
  );
};

export default ChangePasswordDrawer;
