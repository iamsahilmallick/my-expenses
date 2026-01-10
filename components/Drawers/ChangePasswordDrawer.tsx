import { useChangePass } from '@/hooks/react-query/profile/profile.hooks';
import { loadFromStorage, removeFromStorage, saveToStorage } from '@/lib/functions/_storage.lib';
import { changePassSchema, ChangePassSchemaType } from '@/lib/schemas/auth.schema';
import CustomDrawer from '@/ui/CustomDrawer/CustomDrawer';
import CustomInput from '@/ui/CustomInput/CustomInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import BackdropLoader from '../Commons/BackdropLoader/BackdropLoader';

const RememberKey = 'remember_me_login';

interface DrawerProps {
  openDrawer: boolean;
  toggleDrawer: () => void;
}

const ChangePasswordDrawer = ({ openDrawer, toggleDrawer }: DrawerProps) => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    trigger,
    clearErrors,
  } = useForm<ChangePassSchemaType>({
    resolver: yupResolver(changePassSchema),
  });

  const manageRememberMe = (rememberMe: boolean, data: { password: string }) => {
    if (rememberMe) {
      saveToStorage(
        RememberKey,
        {
          password: data.password,
        },
        { encrypt: true }
      );
    } else {
      removeFromStorage(RememberKey);
    }
  };

  const { mutate, isPending } = useChangePass();

  const onSubmit = (data: ChangePassSchemaType) => {
    const payload = {
      oldPassword: data?.oldPassword,
      newPassword: data?.newPassword,
      confirmPassword: data?.confirmPassword,
    };
    mutate(payload, {
      onSuccess: res => {
        if (res?.success) {
          toggleDrawer();
          manageRememberMe(rememberMe, { password: data?.newPassword });
        }
      },
    });
  };

  useEffect(() => {
    const remembered = loadFromStorage<{
      email: string;
      password: string;
      isRemember: boolean;
    }>(RememberKey);

    if (remembered?.isRemember) {
      setRememberMe(true);
    }
  }, []);
  return (
    <CustomDrawer onClose={toggleDrawer} open={openDrawer} className="changePassword">
      {isPending && (
        <BackdropLoader open={isPending} text="Please Wait.. While changing your password" />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="innerDrawerMain">
          <Typography variant="h2">Change Password</Typography>
          <Box className="wrapper_mainFormWrapper">
            <Box className="singleFormWrap">
              <CustomInput
                placeholder="Enter Old Password"
                isPassword
                {...register('oldPassword', {
                  onChange: e => {
                    const { value } = e.target;
                    if (value.length > 0) {
                      trigger('oldPassword');
                      if (getValues('newPassword')) {
                        trigger('newPassword');
                      }
                    }
                    clearErrors('oldPassword');
                  },
                })}
                error={Boolean(errors?.oldPassword)}
                helperText={errors?.oldPassword?.message}
              />
            </Box>
            <Box className="singleFormWrap">
              <CustomInput
                placeholder="Enter New Password"
                isPassword
                {...register('newPassword', {
                  onChange: e => {
                    const { value } = e.target;
                    if (value.length > 0) {
                      trigger('newPassword');
                      if (getValues('confirmPassword')) {
                        trigger('confirmPassword');
                      }
                    }
                  },
                })}
                error={Boolean(errors?.newPassword)}
                helperText={errors?.newPassword?.message}
              />
            </Box>
            <Box className="singleFormWrap">
              <CustomInput
                placeholder="Enter Confirm New Password"
                isPassword
                {...register('confirmPassword', {
                  onChange: e => {
                    const { value } = e.target;
                    if (value.length > 0) {
                      trigger('confirmPassword');
                      if (getValues('confirmPassword')) {
                        trigger('confirmPassword');
                      }
                    }
                  },
                })}
                error={Boolean(errors?.confirmPassword)}
                helperText={errors?.confirmPassword?.message}
              />
            </Box>
          </Box>
          <Box className="btnWrapper">
            <Button
              fullWidth
              disableRipple
              variant="contained"
              color="primary"
              type="submit"
              disabled={isPending}
            >
              Change Password
            </Button>
          </Box>
        </Box>
      </form>
    </CustomDrawer>
  );
};

export default ChangePasswordDrawer;
