import { ImageAccept } from '@/config/constants';
import { useAppSelector } from '@/hooks/commons/useReduxHook';
import { ProfileQueryEnum } from '@/hooks/react-query/keys/query-keys';
import { useUpdateProfile } from '@/hooks/react-query/profile/profile.hooks';
import { profileSchema, ProfileSchemaType } from '@/lib/schemas/auth.schema';
import { queryClient } from '@/pages/_app';
import CustomDrawer from '@/ui/CustomDrawer/CustomDrawer';
import CustomInput from '@/ui/CustomInput/CustomInput';
import { yupResolver } from '@hookform/resolvers/yup';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import BackdropLoader from '../Commons/BackdropLoader/BackdropLoader';
import CommonErrorText from '../Commons/CommonErrorText/CommonErrorText';

interface DrawerProps {
  openDrawer: boolean;
  toggleDrawer: () => void;
}

type SocialLinkState = {
  value: string;
  error?: string;
};

const ProfileUpdateDrawer = ({ openDrawer, toggleDrawer }: DrawerProps) => {
  const [socialLinks, setSocialLinks] = useState<SocialLinkState[]>([]);
  const [preview, setPreview] = useState<string | null>(null);
  const { userProfile } = useAppSelector(state => state.auth);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProfileSchemaType>({
    resolver: yupResolver(profileSchema),
  });

  const { mutate, isPending } = useUpdateProfile();

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!ImageAccept.includes(file.type)) {
      toast.error('Only JPG, JPEG, or PNG images are allowed');
      e.target.value = '';
      return;
    }
    setValue('profilePic', file, { shouldValidate: true });
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
    e.target.value = '';
  };

  const handleAddSocialLink = () => {
    setSocialLinks(prev => [...prev, { value: '' }]);
  };

  const handleRemoveSocialLink = (index: number) => {
    setSocialLinks(prev => prev.filter((_, i) => i !== index));
  };

  const handleSocialLinkChange = (index: number, value: string) => {
    setSocialLinks(prev =>
      prev.map((item, i) => (i === index ? { value, error: undefined } : item))
    );
  };

  const onSubmit = (data: ProfileSchemaType) => {
    const validatedLinks = socialLinks.map(item => {
      if (item.value && !isValidUrl(item.value)) {
        return { ...item, error: 'Invalid URL' };
      }
      return { ...item, error: undefined };
    });

    const hasError = validatedLinks.some(item => item.error);

    setSocialLinks(validatedLinks);

    if (hasError) {
      toast.error('Please fix invalid social links');
      return;
    }

    const formData = new FormData();

    formData.append('fullName', data.fullName);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    if (data.profilePic instanceof File) {
      formData.append('profilePic', data.profilePic);
    }
    socialLinks.forEach((item, index) => {
      if (item.value.trim()) {
        formData.append(`socialLinks[${index}]`, item.value);
      }
    });

    mutate(formData, {
      onSuccess: async res => {
        if (res?.success) {
          await queryClient.refetchQueries({ queryKey: [ProfileQueryEnum.getProfile] });
          toggleDrawer();
        }
      },
    });
  };

  useEffect(() => {
    if (userProfile) {
      setValue('email', userProfile?.email || '');
      setValue('phone', userProfile?.phone || '');
      setValue('fullName', userProfile?.fullName || '');
      setValue('profilePic', userProfile?.profilePic || '');
      if (Array.isArray(userProfile.socialLinks)) {
        setSocialLinks(userProfile.socialLinks.map(link => ({ value: link })));
      }
    }
  }, [userProfile]);

  return (
    <CustomDrawer onClose={toggleDrawer} open={openDrawer} className="profileUpdate">
      {isPending && (
        <BackdropLoader open={isPending} text="Please Wait.. While updating your profile" />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="innerDrawerMain">
          <Typography variant="h2">Update Profile</Typography>
          <Box className="wrapper_mainFormWrapper">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1.5,
                mb: 3,
              }}
            >
              <Avatar
                src={preview || userProfile?.profilePic || undefined}
                sx={{
                  width: 110,
                  height: 110,
                  cursor: 'pointer',
                  border: '3px solid #12467B',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                  transition: '0.3s',
                  '&:hover': {
                    opacity: 0.85,
                  },
                }}
              />

              <input
                hidden
                id="profilePic"
                type="file"
                accept={ImageAccept.join(',')}
                onChange={handleImageChange}
              />

              <label htmlFor="profilePic">
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#12467B',
                    cursor: 'pointer',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Change Profile Photo
                </Typography>
              </label>

              <CommonErrorText message={errors?.profilePic?.message} />
            </Box>
            <Box className="singleFormWrap">
              <CustomInput
                placeholder="Enter full name"
                {...register('fullName')}
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
              />
            </Box>
            <Box className="singleFormWrap">
              <CustomInput
                placeholder="Enter email"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Box>
            <Box className="singleFormWrap">
              <CustomInput
                placeholder="Enter phone number"
                {...register('phone')}
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 1.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#333',
                  }}
                >
                  Social Links
                </Typography>
                <IconButton
                  onClick={handleAddSocialLink}
                  sx={{
                    color: '#12467B',
                    padding: 0.5,
                    '&:hover': {
                      backgroundColor: 'rgba(18, 70, 123, 0.1)',
                    },
                  }}
                >
                  <AddCircleOutlineIcon fontSize="small" />
                </IconButton>
              </Box>

              {socialLinks.length === 0 && (
                <Typography
                  sx={{
                    fontSize: 13,
                    color: '#999',
                    fontStyle: 'italic',
                    mb: 2,
                  }}
                >
                  No social links added yet. Click + to add one.
                </Typography>
              )}

              {socialLinks.map((link, index) => (
                <Box
                  key={index}
                  className="singleFormWrap"
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <CustomInput
                      placeholder="e.g., https://twitter.com/username"
                      value={link.value}
                      onChange={e => handleSocialLinkChange(index, e.target.value)}
                      error={!!link.error}
                      helperText={link.error}
                    />
                  </Box>
                  <IconButton
                    onClick={() => handleRemoveSocialLink(index)}
                    sx={{
                      color: '#d32f2f',
                      padding: 1,
                      mt: 0.5,
                      '&:hover': {
                        backgroundColor: 'rgba(211, 47, 47, 0.1)',
                      },
                    }}
                  >
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              ))}
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
              Update Profile
            </Button>
          </Box>
        </Box>
      </form>
    </CustomDrawer>
  );
};

export default ProfileUpdateDrawer;
