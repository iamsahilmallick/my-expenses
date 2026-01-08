import BackdropLoader from '@/components/Commons/BackdropLoader/BackdropLoader';
import OTPCard from '@/components/Commons/OTPCard/OTPCard';
import { useResendOTP, useSignUp, useVerifyOTP } from '@/hooks/react-query/auth/auth.hooks';
import { checkUserAuth } from '@/lib/common/authUtils';
import { decryptValue, encryptValue } from '@/lib/functions/_storage.lib';
import { signUpSchema, SignUpSchemaType } from '@/lib/schemas/auth.schema';
import assets from '@/resources/assets';
import { ProjectRoutes } from '@/routes/createRoutes';
import AuthWrapper from '@/theme-layouts/AuthWrapper/AuthWrapper';
import CustomButton from '@/ui/CustomButton/CustomButton';
import CustomInput from '@/ui/CustomInput/CustomInput';
import EmailIcon from '@/ui/Icons/EmailIcon';
import LockIcon from '@/ui/Icons/LockIcon';
import UserIcon from '@/ui/Icons/UserIcon';
import { yupResolver } from '@hookform/resolvers/yup';
import { PhoneIphone } from '@mui/icons-material';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

enum AuthStep {
  SignUP = 'SIGN_UP',
  OtpVerify = 'OTP_VERIFY',
}
const SignUp = () => {
  const theme = useTheme();
  const router = useRouter();
  const [authStep, setAuthStep] = useState<AuthStep>(AuthStep.SignUP);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [otp, setOtp] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpSchemaType>({
    resolver: yupResolver(signUpSchema),
  });

  const { mutate, isPending } = useSignUp();
  const { mutate: verifyOtp, isPending: isVerifying } = useVerifyOTP();
  const { mutate: resendOtp, isPending: isResending } = useResendOTP();

  const onSubmit = async (data: SignUpSchemaType) => {
    mutate(
      {
        email: data?.email,
        password: data?.password,
        fullName: data?.fullName,
        phone: data?.phone,
      },
      {
        onSuccess: res => {
          if (res?.success) {
            const encryptedEmail = encryptValue(data.email);
            setUserEmail(data.email);
            reset();
            setAuthStep(AuthStep.OtpVerify);
            router.replace({
              pathname: router.pathname,
              query: {
                step: 'otp',
                e: encryptedEmail,
              },
            });
          }
        },
      }
    );
  };
  const handleOtpVerify = () => {
    if (!userEmail || !otp) return;

    verifyOtp(
      {
        email: userEmail,
        otp,
      },
      {
        onSuccess: res => {
          if (res?.success) {
            router.push(ProjectRoutes.login);
          }
        },
      }
    );
  };
  const handleResendOTP = () => {
    if (!userEmail) return;

    resendOtp({
      email: userEmail,
    });
  };

  useEffect(() => {
    const { step, e } = router.query;

    if (step === 'otp' && typeof e === 'string') {
      const decryptedEmail = decryptValue(e) as string | null;

      if (decryptedEmail) {
        setUserEmail(decryptedEmail);
        setAuthStep(AuthStep.OtpVerify);
      }
    }
  }, [router.query]);

  return (
    <AuthWrapper
      mainMedia={assets.authImg}
      subtitle="Please fill up to signup your account."
      title="Welcome Back"
    >
      {isPending && (
        <BackdropLoader open={isPending} text="Creating your account, please wait..." />
      )}
      {authStep === AuthStep.SignUP && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={1.5} direction={'column'} mb={{ xs: '16px', md: '20px' }}>
            <Box className="cmn_input">
              <CustomInput
                placeholder="Full Name"
                startAdornment={<UserIcon />}
                {...register('fullName')}
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
              />
            </Box>
            <Box className="cmn_input">
              <CustomInput
                placeholder="Email address"
                startAdornment={<EmailIcon />}
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Box>
            <Box className="cmn_input">
              <CustomInput
                placeholder="Mobile Number"
                startAdornment={<PhoneIphone sx={{ color: 'black' }} />}
                {...register('phone')}
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            </Box>
            <Box className="cmn_input">
              <CustomInput
                placeholder="Password"
                startAdornment={<LockIcon />}
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
                isPassword
              />
            </Box>
          </Stack>
          <Box mb={{ xs: '20px', md: '40px' }}>
            <CustomButton
              fullWidth
              variant="contained"
              color="secondary"
              className="submit_btn"
              type="submit"
              disabled={isPending}
            >
              Sign Up
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
            Don’t have an account? <Link href={`${ProjectRoutes.login}`}>Sign In</Link>
          </Typography>
        </form>
      )}

      {authStep === AuthStep.OtpVerify && (
        <Box className="otp-verify">
          <Stack
            gap={2}
            direction="column"
            mb={{ xs: '16px', md: '20px' }}
            alignItems="center"
            width="100%"
          >
            <OTPCard type="text" length={4} onComplete={otp => setOtp(otp)} />

            <Typography sx={{ textAlign: 'right', fontSize: '14px', fontWeight: 500 }}>
              Didn’t receive?{' '}
              <span
                style={{
                  color: theme.palette.primary.main,
                  cursor: 'pointer',
                  fontWeight: 600,
                  opacity: isResending ? 0.6 : 1,
                }}
                onClick={handleResendOTP}
              >
                {isResending ? 'Resending...' : 'Resend OTP'}
              </span>
            </Typography>
          </Stack>
          <Box
            mb={{ xs: '20px', md: '40px' }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {' '}
            <CustomButton
              variant="contained"
              color="secondary"
              className="submit_btn"
              type="button"
              onClick={handleOtpVerify}
              disabled={isVerifying || otp.length !== 4}
            >
              Verify OTP
            </CustomButton>
          </Box>
        </Box>
      )}
    </AuthWrapper>
  );
};

export default SignUp;

export const getServerSideProps: GetServerSideProps = async context => {
  return checkUserAuth({
    context: context,
  });
};
