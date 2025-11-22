import ChangePasswordDrawer from '@/components/Drawers/ChangePasswordDrawer';
import assets from '@/resources/assets';
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
  return (
    <DashboardWrapper headerTitle="My Profile" backUrl="/">
      <MyProfileWrapper>
        <Card className="headerCard">
          <Avatar src="" sx={{ width: 90, height: 90, border: '3px solid white' }} />
          <Box ml={3} flex={1}>
            <Typography variant="h5" fontWeight={700} color="#0a2d52">
              Sahil Mallick
            </Typography>

            <Typography color="text.secondary" mt={0.5}>
              sahilmallick@yopmail.com
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
                <strong>Name:</strong> John Medhurst
              </Typography>
              <Typography mt={1}>
                <strong>Phone:</strong> 1223456789254
              </Typography>
              <Typography mt={1}>
                <strong>Availability:</strong> Part time
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography>
                <strong>Email:</strong> johnmedhurst@gmail.com
              </Typography>
              <Typography mt={1}>
                <strong>Address:</strong> 70525 Koelpin Ways, Rolandostad 56861
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
        <Card className="sectionCard">
          <Box className="sectionHeader">
            <Typography variant="h6">Portfolio</Typography>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Box>

          <Grid container spacing={2}>
            {[1, 2, 3, 4].map(item => (
              <Grid size={{ xs: 6, md: 3 }} key={item}>
                <img className="portfolioImage" src={`${assets.authImg}`} alt="porfolioimg" />
                <Typography textAlign="center" mt={1} fontSize={13} color="text.secondary">
                  portfolio.jpg (1MB)
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Card>
      </MyProfileWrapper>
      <ChangePasswordDrawer
        openDrawer={isDrawerOpen}
        toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
      />
    </DashboardWrapper>
  );
};

export default Profile;
