import assets from '@/resources/assets';
import { ProjectRoutes } from '@/routes/createRoutes';
import { LoginWrapper } from '@/styles/CustomStyled/AuthWrapperStyled';
import AuthWrapper from '@/theme-layouts/AuthWrapper/AuthWrapper';
import CustomButton from '@/ui/CustomButton/CustomButton';
import CustomInput from '@/ui/CustomInput/CustomInput';
import CheckboxIcon from '@/ui/Icons/CheckboxIcon';
import EmailIcon from '@/ui/Icons/EmailIcon';
import LockIcon from '@/ui/Icons/LockIcon';
import UnCheckboxIcon from '@/ui/Icons/UnCheckboxIcon';
import { Box, Checkbox, FormControlLabel, Stack, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LogIn = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <AuthWrapper
      mainMedia={assets.authImg}
      subtitle="Please fill up to login your account."
      title="Welcome Back"
    >
      <LoginWrapper>
        <form>
          <Stack gap={1.5} direction={'column'} mb={{ xs: '16px', md: '20px' }}>
            <Box>
              <CustomInput placeholder="Email address / Phone No." startAdornment={<EmailIcon />} />
            </Box>
            <Box>
              <CustomInput placeholder="Password" isPassword startAdornment={<LockIcon />} />
            </Box>
          </Stack>
          <Stack
            flexWrap={'wrap'}
            gap={1}
            alignItems={'center'}
            justifyContent={'space-between'}
            mb={{ xs: '16px', md: '20px' }}
          >
            <Box className="checkbox_group">
              <FormControlLabel
                label="Remember me"
                control={
                  <Checkbox
                    disableRipple
                    icon={<UnCheckboxIcon />}
                    checkedIcon={<CheckboxIcon />}
                  />
                }
                sx={{
                  marginLeft: '0 !important',
                  marginRight: '0 !important',
                  gap: '10px',
                  '.MuiCheckbox-root': {
                    padding: '0 !important',
                  },
                  '.MuiFormControlLabel-label': {
                    fontWeight: 500,
                    fontSize: '13px',
                    color: theme.palette.common.black,
                  },
                }}
              />
            </Box>
            <Link className="forgot_link" href="/auth/forgot-password">
              Forgot password?
            </Link>
          </Stack>
          <Box mb={{ xs: '20px', md: '40px' }}>
            <CustomButton
              fullWidth
              variant="contained"
              color="secondary"
              className="submit_btn"
              onClick={() => router.push(ProjectRoutes.dashboard.home)}
            >
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
            Don’t have an account? <Link href={'/auth/sign-up'}>Sign Up</Link>
          </Typography>
        </form>
      </LoginWrapper>
    </AuthWrapper>
  );
};

export default LogIn;
