import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, IconButton, Stack } from '@mui/material';

interface StatusBadgeProps {
  status: string;
  onApprove?: () => void;
  onReject?: () => void;
  showActions?: boolean;
}

const STATUS_MAP: Record<string, { color: string; bg: string }> = {
  received: { color: '#1b5e20', bg: '#c8e6c9' },
  failed: { color: '#b71c1c', bg: '#ffcdd2' },
  upcoming: { color: '#b26a00', bg: '#fff3cd' },

  active: { color: '#1b5e20', bg: '#c8e6c9' },
  inactive: { color: '#616161', bg: '#eeeeee' },
  pending: { color: '#b26a00', bg: '#fff3cd' },
  approved: { color: '#1b5e20', bg: '#c8e6c9' },
  rejected: { color: '#b71c1c', bg: '#ffcdd2' },
};

const StatusBadge = ({ status, onApprove, onReject, showActions = false }: StatusBadgeProps) => {
  const key = status?.toLowerCase();
  const styles = STATUS_MAP[key] || {
    color: '#333',
    bg: '#e0e0e0',
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.5}
      sx={{
        bgcolor: styles.bg,
        px: 1,
        py: 0.4,
        borderRadius: '10px',
        width: 'fit-content',
      }}
    >
      <Box
        sx={{
          fontSize: '12px',
          fontWeight: 600,
          textTransform: 'capitalize',
          color: styles.color,
          lineHeight: 1,
        }}
      >
        {status}
      </Box>

      {showActions && (
        <Stack direction="row" spacing={0.3}>
          <IconButton size="small" sx={{ p: 0.3 }} color="success" onClick={onApprove}>
            <CheckCircleIcon fontSize="small" />
          </IconButton>

          <IconButton size="small" sx={{ p: 0.3 }} color="error" onClick={onReject}>
            <CancelIcon fontSize="small" />
          </IconButton>
        </Stack>
      )}
    </Stack>
  );
};

export default StatusBadge;
