import { Avatar, Box, Card, Grid, Skeleton } from '@mui/material';

const ProfileSkeleton = () => {
  return (
    <>
      {/* Header */}
      <Card className="headerCard">
        <Avatar sx={{ width: 90, height: 90 }}>
          <Skeleton variant="circular" width={90} height={90} />
        </Avatar>

        <Box ml={3} flex={1}>
          <Skeleton width={200} height={32} />
          <Skeleton width={260} height={22} sx={{ mt: 1 }} />
          <Skeleton width={140} height={40} sx={{ mt: 2 }} />
        </Box>
      </Card>

      {/* Personal Details */}
      <Card className="sectionCard">
        <Grid container spacing={3}>
          {[1, 2].map(i => (
            <Grid size={{ xs: 12, md: 6 }} key={i}>
              <Skeleton height={24} width="80%" />
              <Skeleton height={24} width="60%" sx={{ mt: 1 }} />
            </Grid>
          ))}
        </Grid>
      </Card>

      {/* Portfolio */}
      <Card className="sectionCard">
        <Grid container spacing={2}>
          {[1, 2, 3, 4].map(i => (
            <Grid size={{ xs: 6, md: 3 }} key={i}>
              <Skeleton variant="rectangular" height={120} />
              <Skeleton width="80%" height={18} sx={{ mt: 1 }} />
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
};

export default ProfileSkeleton;
