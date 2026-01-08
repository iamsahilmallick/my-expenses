import BackdropLoader from '@/components/Commons/BackdropLoader/BackdropLoader';
import { tokenDuration } from '@/config/constants';
import { _projectToken } from '@/config/keys.constants';
import { useLogin } from '@/hooks/react-query/auth/auth.hooks';
import { ProfileQueryEnum } from '@/hooks/react-query/keys/query-keys';
import { checkUserAuth } from '@/lib/common/authUtils';
import { navigateTo } from '@/lib/common/commonUtils';
import {
  loadFromStorage,
  removeFromStorage,
  saveToStorage,
  setCookieClient,
} from '@/lib/functions/_storage.lib';
import { loginSchema, LoginSchemaType } from '@/lib/schemas/auth.schema';
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
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Checkbox, FormControlLabel, Stack, Typography, useTheme } from '@mui/material';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { queryClient } from '../_app';

const RememberKey = 'remember_me_login';

const LogIn = () => {
  const theme = useTheme();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      isRemember: false,
    },
  });

  const { mutate, isPending } = useLogin();

  const manageRememberMe = (rememberMe: boolean, data: LoginSchemaType) => {
    if (rememberMe) {
      saveToStorage(
        RememberKey,
        {
          email: data.email,
          password: data.password,
          isRemember: true,
        },
        { encrypt: true }
      );
    } else {
      removeFromStorage(RememberKey);
    }
  };
  const onSubmit = async (data: LoginSchemaType) => {
    manageRememberMe(!!data.isRemember, data);
    mutate(
      {
        email: data?.email,
        password: data?.password,
      },
      {
        onSuccess: async res => {
          if (res?.success) {
            await queryClient.refetchQueries({ queryKey: [ProfileQueryEnum.getProfile] });
            setCookieClient(_projectToken, res?.token, tokenDuration);
            navigateTo(ProjectRoutes.dashboard.home);
          }
        },
      }
    );
  };

  useEffect(() => {
    const remembered = loadFromStorage<{
      email: string;
      password: string;
      isRemember: boolean;
    }>(RememberKey);

    if (remembered?.isRemember) {
      setValue('email', remembered.email);
      setValue('password', remembered.password);
      setValue('isRemember', true);
    }
  }, [setValue]);

  return (
    <AuthWrapper
      mainMedia={assets.authImg}
      subtitle="Please fill up to login your account."
      title="Welcome Back"
    >
      {isPending && (
        <BackdropLoader open={isPending} text="Login into your account, please wait..." />
      )}
      <LoginWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={1.5} direction={'column'} mb={{ xs: '16px', md: '20px' }}>
            <Box>
              <CustomInput
                placeholder="Email address / Phone No."
                startAdornment={<EmailIcon />}
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Box>
            <Box>
              <CustomInput
                placeholder="Password"
                isPassword
                startAdornment={<LockIcon />}
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
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
              <Controller
                name="isRemember"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    label="Remember me"
                    control={
                      <Checkbox
                        {...field}
                        checked={field.value}
                        disableRipple
                        icon={<UnCheckboxIcon />}
                        checkedIcon={<CheckboxIcon />}
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
                    }
                  />
                )}
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
              type="submit"
              disabled={isPending}
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

export const getServerSideProps: GetServerSideProps = async context => {
  return checkUserAuth({
    context: context,
  });
};
