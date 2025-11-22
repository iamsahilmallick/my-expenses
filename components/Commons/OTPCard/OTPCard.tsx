import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import OtpInput from 'react-otp-input';

interface OTPCardProps {
  length?: number;
  onComplete?: (otp: string) => void;
  title?: string;
  type?: 'text' | 'number';
}

const OTPCard = ({ length = 6, onComplete, title, type = 'text' }: OTPCardProps) => {
  const [otp, setOtp] = useState('');

  const handleChange = (value: string) => {
    setOtp(value);
    if (value.length === length && onComplete) {
      onComplete(value);
    }
  };

  return (
    <Box textAlign="center">
      {title && (
        <Typography mb={2} fontSize={16} fontWeight={600}>
          {title}
        </Typography>
      )}

      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={length}
        inputType={type} // HERE — CAN BE "text" OR "number"
        renderSeparator={<span style={{ width: '8px' }}></span>}
        renderInput={props => (
          <input
            {...props}
            style={{
              width: '48px',
              height: '48px',
              fontSize: '20px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              textAlign: 'center',
              outline: 'none',
            }}
          />
        )}
      />
    </Box>
  );
};

export default OTPCard;
