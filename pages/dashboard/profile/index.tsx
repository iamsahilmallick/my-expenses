import ChangePasswordDrawer from '@/components/Drawers/ChangePasswordDrawer';
import ProfileSkeleton from '@/components/Skeletons/ProfileSkeleton';
import useUserProfile from '@/hooks/react-query/useUserProfile';
import { MyProfileWrapper } from '@/styles/CustomStyled/MyProfileWrapper';
import DashboardWrapper from '@/theme-layouts/DashboardWrapper/DashboardWrapper';
import AddIcon from '@mui/icons-material/Add';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LinkIcon from '@mui/icons-material/Link';
import { Avatar, Box, Card, Grid, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

const Profile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
                    onClick={() => setIsDrawerOpen(true)}
                  >
                    Change Password
                  </IconButton>
                </Box>
              </Box>
            </Card>

            <Card className="sectionCard">
              <Box className="sectionHeader">
                <Typography variant="h6">Personal Details</Typography>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Box>

              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography>
                    <strong>Name:</strong>
                    {profileData?.fullName}
                  </Typography>
                  <Typography mt={1}>
                    <strong>Phone:</strong> {profileData?.phone}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography>
                    <strong>Email:</strong> {profileData?.email}
                  </Typography>
                  <Typography mt={1}>
                    <strong>Role:</strong> {profileData?.role}
                  </Typography>
                </Grid>
              </Grid>
            </Card>

            <Card className="sectionCard">
              <Box className="sectionHeader">
                <Typography variant="h6">Social Links</Typography>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Box>

              <Box display="flex" flexDirection="column" gap={2}>
                <Box className="socialCard">
                  <Box display="flex" gap={1} alignItems="center">
                    <LinkIcon color="primary" />
                    <Typography>@simbrooklyn</Typography>
                  </Box>
                  <Box>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>

                <Box className="socialCard">
                  <Box display="flex" gap={1} alignItems="center">
                    <ColorLensIcon color="secondary" />
                    <Typography>#simbrooklyn</Typography>
                  </Box>
                  <Box>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>

                <Box className="addNewLink">
                  <AddIcon /> Add New Link
                </Box>
              </Box>
            </Card>
          </>
        )}
      </MyProfileWrapper>
      <ChangePasswordDrawer
        openDrawer={isDrawerOpen}
        toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
      />
    </DashboardWrapper>
  );
};

export default Profile;
