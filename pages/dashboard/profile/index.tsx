import ChangePasswordDrawer from '@/components/Drawers/ChangePasswordDrawer';
import ProfileUpdateDrawer from '@/components/Drawers/ProfileUpdateDrawer';
import ProfileSkeleton from '@/components/Skeletons/ProfileSkeleton';
import useUserProfile from '@/hooks/react-query/useUserProfile';
import { MyProfileWrapper } from '@/styles/CustomStyled/MyProfileWrapper';
import DashboardWrapper from '@/theme-layouts/DashboardWrapper/DashboardWrapper';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import LinkIcon from '@mui/icons-material/Link';
import { Avatar, Box, Card, Grid, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

type DrawerType = 'changePassword' | 'updateProfile' | null;

const Profile = () => {
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);
  const { data: profileData, isPending: profilePending } = useUserProfile();
  return (
    <DashboardWrapper headerTitle="My Profile" backUrl="/">
      <MyProfileWrapper>
        {profilePending ? (
          <ProfileSkeleton />
        ) : (
          <>
            <Card className="headerCard">
              <Avatar
                src={profileData?.profilePic}
                sx={{ width: 90, height: 90, border: '3px solid white' }}
              />
              <Box ml={3} flex={1}>
                <Typography variant="h5" fontWeight={700} color="#0a2d52">
                  {profileData?.fullName}
                </Typography>

                <Typography color="text.secondary" mt={0.5}>
                  {profileData?.email}
                </Typography>
                <Box mt={1}>
                  <IconButton
                    sx={{
                      bgcolor: '#12467B',
                      color: 'white',
                      px: 2.5,
                      py: 1,
                      borderRadius: '12px',
                      '&:hover': { bgcolor: '#0a2d52' },
                    }}
                    type="button"
                    onClick={() => setActiveDrawer('changePassword')}
                  >
                    Change Password
                  </IconButton>
                </Box>
              </Box>
            </Card>

            <Card className="sectionCard">
              <Box className="sectionHeader">
                <Typography variant="h6">Personal Details</Typography>
                <IconButton type="button" onClick={() => setActiveDrawer('updateProfile')}>
                  <EditIcon />
                </IconButton>
              </Box>

              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography>
                    <strong>Name: </strong>
                    {profileData?.fullName}
                  </Typography>
                  <Typography mt={1}>
                    <strong>Phone: </strong> {profileData?.phone}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography>
                    <strong>Email: </strong> {profileData?.email}
                  </Typography>
                  <Typography mt={1}>
                    <strong>Role: </strong> {profileData?.role}
                  </Typography>
                </Grid>
              </Grid>
            </Card>

            <Card className="sectionCard">
              <Box className="sectionHeader">
                <Typography variant="h6">Social Links</Typography>
              </Box>

              <Box display="flex" flexDirection="column" gap={2}>
                {profileData?.socialLinks?.map(socialItem => {
                  return (
                    <Box className="socialCard" key={socialItem}>
                      <Box display="flex" gap={1} alignItems="center">
                        <LinkIcon color="primary" />
                        <Typography>{socialItem}</Typography>
                      </Box>
                    </Box>
                  );
                })}

                <Box className="addNewLink" onClick={() => setActiveDrawer('updateProfile')}>
                  <AddIcon /> Add New Link
                </Box>
              </Box>
            </Card>
          </>
        )}
      </MyProfileWrapper>
      {activeDrawer === 'changePassword' && (
        <ChangePasswordDrawer openDrawer toggleDrawer={() => setActiveDrawer(null)} />
      )}
      {activeDrawer === 'updateProfile' && (
        <ProfileUpdateDrawer openDrawer toggleDrawer={() => setActiveDrawer(null)} />
      )}
    </DashboardWrapper>
  );
};

export default Profile;
