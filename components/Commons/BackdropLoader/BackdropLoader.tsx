import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import React from 'react';

type BackdropLoaderProps = {
  open: boolean;
  text?: string;
};

const BackdropLoader: React.FC<BackdropLoaderProps> = ({ open, text = 'Loading...' }) => {
  return (
    <Backdrop
      open={open}
      sx={{
        color: '#fff',
        zIndex: theme => theme.zIndex.modal + 999999,
        flexDirection: 'column',
      }}
    >
      <CircularProgress color="inherit" />
      <Box mt={2}>
        <Typography variant="h6" component="div" color="inherit">
          {text}
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default BackdropLoader;
