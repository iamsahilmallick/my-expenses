import OTPCard from '@/components/Commons/OTPCard/OTPCard';
import assets from '@/resources/assets';
import { LoginWrapper } from '@/styles/CustomStyled/AuthWrapperStyled';
import AuthWrapper from '@/theme-layouts/AuthWrapper/AuthWrapper';
import { ResetState } from '@/typescripts/interfaces/common.interfaces';
import CustomButton from '@/ui/CustomButton/CustomButton';
import CustomInput from '@/ui/CustomInput/CustomInput';
import EmailIcon from '@/ui/Icons/EmailIcon';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

const ForgotPassword = () => {
  const theme = useTheme();
  const [resetState, setResetState] = useState<ResetState>({
    step: 'email',
  });

  const goNext = (e: FormEvent) => {
    e.preventDefault();

    setResetState(prev => {
      if (prev.step === 'email') return { step: 'otp' };
      if (prev.step === 'otp') return { step: 'reset' };
      return { step: 'email' };
    });
  };

  return (
    <AuthWrapper
      mainMedia={assets.authImg}
      title="Forgot Password"
      subtitle={
        resetState.step === 'email'
          ? 'Please enter your email to receive reset instructions.'
          : resetState.step === 'otp'
            ? 'Enter the verification code sent to your email.'
            : 'Set your new password below.'
      }
    >
      <LoginWrapper>
        <form>
          {resetState.step === 'email' && (
            <Stack gap={1.5} direction="column" mb={{ xs: '16px', md: '20px' }}>
              <CustomInput placeholder="Email address / Phone No." startAdornment={<EmailIcon />} />
            </Stack>
          )}

          {resetState.step === 'otp' && (
            <Stack
              gap={2}
              direction="column"
              mb={{ xs: '16px', md: '20px' }}
              alignItems="center"
              width="100%"
            >
              <OTPCard type="text" length={6} />

              <Typography sx={{ textAlign: 'right', fontSize: '14px', fontWeight: 500 }}>
                Didn’t receive?{' '}
                <span
                  style={{
                    color: theme.palette.primary.main,
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  Resend OTP
                </span>
              </Typography>
            </Stack>
          )}

          {resetState.step === 'reset' && (
            <Stack gap={2} direction="column" mb={{ xs: '16px', md: '20px' }}>
              <CustomInput placeholder="New Password" type="password" />
              <CustomInput placeholder="Confirm Password" type="password" />
            </Stack>
          )}

          <Box mb={{ xs: '20px', md: '40px' }}>
            <CustomButton
              fullWidth
              variant="contained"
              color="secondary"
              className="submit_btn"
              onClick={goNext}
            >
              {resetState.step === 'email'
                ? 'Send OTP'
                : resetState.step === 'otp'
                  ? 'Verify OTP'
                  : 'Change Password'}
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
      </LoginWrapper>
    </AuthWrapper>
  );
};

export default ForgotPassword;
