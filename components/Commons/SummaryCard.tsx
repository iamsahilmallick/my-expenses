import { Box, Card, CardContent, Chip, styled, Typography } from '@mui/material';

export const SummaryCardWrapper = styled(Box)`
  .summary-card {
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
  }

  .border-success {
    border-left: 4px solid ${({ theme }) => theme.palette.success.main};
  }
  .border-error {
    border-left: 4px solid ${({ theme }) => theme.palette.error.main};
  }
  .border-info {
    border-left: 4px solid ${({ theme }) => theme.palette.info.main};
  }
  .border-warning {
    border-left: 4px solid ${({ theme }) => theme.palette.warning.main};
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  .card-title {
    font-weight: 600;
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  .icon-success {
    color: ${({ theme }) => theme.palette.success.main};
  }
  .icon-error {
    color: ${({ theme }) => theme.palette.error.main};
  }
  .icon-info {
    color: ${({ theme }) => theme.palette.info.main};
  }
  .icon-warning {
    color: ${({ theme }) => theme.palette.warning.main};
  }

  .card-icon {
    font-size: 2rem;
    opacity: 0.7;
  }

  .amount-positive {
    color: ${({ theme }) => theme.palette.success.main};
    font-weight: 700;
  }

  .amount-negative {
    color: ${({ theme }) => theme.palette.error.main};
    font-weight: 700;
  }

  .chip-positive {
    background-color: ${({ theme }) => theme.palette.success.light};
    color: ${({ theme }) => theme.palette.success.dark};
    font-weight: 600;
  }

  .chip-negative {
    background-color: ${({ theme }) => theme.palette.error.light};
    color: ${({ theme }) => theme.palette.error.dark};
    font-weight: 600;
  }
`;

interface SummaryCardProps {
  price?: number;
  title?: string;
  Icon?: React.ReactNode;
  borderClass?: string;
  iconClass?: string;
  amountClass?: string;
  chipLabel?: string;
  chipClass?: string;
}

const SummaryCard = ({
  title,
  price,
  Icon,
  borderClass,
  amountClass,
  chipLabel,
  chipClass,
  iconClass,
}: SummaryCardProps) => {
  return (
    <SummaryCardWrapper>
      <Card className={`summary-card ${borderClass}`}>
        <CardContent>
          <Box className="card-header">
            <Typography variant="h6" className="card-title">
              {title}
            </Typography>
            <span className={`card-icon ${iconClass}`}>{Icon}</span>
          </Box>

          <Typography variant="h4" className={`card-amount ${amountClass}`}>
            {price}
          </Typography>

          <Chip size="small" label={chipLabel} className={chipClass} />
        </CardContent>
      </Card>
    </SummaryCardWrapper>
  );
};

export default SummaryCard;
