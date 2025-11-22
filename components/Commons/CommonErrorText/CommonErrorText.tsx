import { Typography } from '@mui/material';

const CommonErrorText = ({ message = '' }: { message?: string }) => {
  if (!message) return null;
  return (
    <Typography sx={{ color: 'red', padding: '5px 10px', fontSize: '14px' }}>{message}</Typography>
  );
};

export default CommonErrorText;
