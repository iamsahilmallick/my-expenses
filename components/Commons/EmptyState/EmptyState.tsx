import EmptyIcon from '@/ui/Icons/EmptyIcon';
import { Box, styled, Typography, TypographyProps } from '@mui/material';

export const EmptyStateWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100dvh - 350px);
  gap: 10px;
  text-align: center;
  padding: 24px;
  width: 100%;
  i {
    display: inline-flex;
    svg {
      width: 80px;
      height: 80px;
      opacity: 0.7;
    }
  }
  .title {
    color: black;
    font-family: 'outfit';
  }
`;

interface EmptyStateProps {
  text?: string;
  description?: string;
  textVariant?: TypographyProps['variant'];
}

const EmptyState = ({ text = 'Data', description, textVariant = 'h2' }: EmptyStateProps) => {
  return (
    <EmptyStateWrap>
      <i>
        <EmptyIcon />
      </i>
      <Box>
        <Typography variant={textVariant} className="title" fontWeight={600}>
          No {text} Found
        </Typography>
        {description && (
          <Typography variant="body2" className="desc" mt={1}>
            {description}
          </Typography>
        )}
      </Box>
    </EmptyStateWrap>
  );
};

export default EmptyState;
