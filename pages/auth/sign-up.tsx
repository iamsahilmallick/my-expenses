import assets from '@/resources/assets';
import AuthWrapper from '@/theme-layouts/AuthWrapper/AuthWrapper';
import CustomButton from '@/ui/CustomButton/CustomButton';
import CustomInput from '@/ui/CustomInput/CustomInput';
import EmailIcon from '@/ui/Icons/EmailIcon';
import LockIcon from '@/ui/Icons/LockIcon';
import UserIcon from '@/ui/Icons/UserIcon';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import Link from 'next/link';

const SignUp = () => {
  const theme = useTheme();
  return (
    <AuthWrapper
      mainMedia={assets.authImg}
      subtitle="Please fill up to login your account."
      title="Welcome Back"
    >
      <form>
        <Stack gap={1.5} direction={'column'} mb={{ xs: '16px', md: '20px' }}>
          <Box className="cmn_input">
            <CustomInput placeholder="Full Name" startAdornment={<UserIcon />} />
          </Box>
          <Box className="cmn_input">
            <CustomInput placeholder="Email address" startAdornment={<EmailIcon />} />
          </Box>
          <Box className="cmn_input">
            <CustomInput placeholder="Password" isPassword startAdornment={<LockIcon />} />
          </Box>
          <Box className="cmn_input">
            <CustomInput placeholder="Mobile Number" startAdornment={<LockIcon />} />
          </Box>
        </Stack>
        <Box mb={{ xs: '20px', md: '40px' }}>
          <CustomButton fullWidth variant="contained" color="secondary" className="submit_btn">
            Login
          </CustomButton>
        </Box>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 500,
            textAlign: 'center',
            color: theme.palette.common.black,
            a: {
              color: theme.palette.common.black,
              fontWeight: 600,
            },
          }}
        >
          Don’t have an account? <Link href={'/auth/login'}>Sign In</Link>
        </Typography>
      </form>
    </AuthWrapper>
  );
};

export default SignUp;
