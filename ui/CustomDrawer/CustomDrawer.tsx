import { CustomDrawerWrapper } from '@/styles/CustomStyled/CustomDrawerWrapper';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import CloseIcon from '../Icons/CloseIcon';

interface drawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function CustomDrawer({ open, onClose, children, className }: drawerProps) {
  const mobile = useMediaQuery('(max-width:899px)');
  console.log('className', className);
  return (
    <CustomDrawerWrapper
      open={open}
      onClose={onClose}
      anchor={mobile ? 'bottom' : 'right'}
      slotProps={{
        paper: {
          className: className,
        },
      }}
    >
      <Box className="mainDrawerWrapper">
        <IconButton disableRipple onClick={onClose} className="closeBtn">
          <CloseIcon />
        </IconButton>
        <Box className="innerAllInfoDrawer">
          <Box className="innerDrawerWrap">{children}</Box>
        </Box>
      </Box>
    </CustomDrawerWrapper>
  );
}
