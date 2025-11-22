import { Box, styled, TextField } from '@mui/material';
import { DesktopTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TimeIcon from '../Icons/TimeIcon';

interface datePickerProps {
  placeholder?: string;
  className?: string;
}

const CustomTimePicker = ({ placeholder, className }: datePickerProps) => {
  return (
    <CustomDatePickerStyle className={className}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopTimePicker
          slots={{
            openPickerIcon: TimeIcon,
            textField: TextField,
          }}
          slotProps={{
            textField: {
              placeholder: placeholder,
            },
          }}
        />
      </LocalizationProvider>
    </CustomDatePickerStyle>
  );
};

export default CustomTimePicker;

export const CustomDatePickerStyle = styled(Box)`
  .MuiFormControl-root {
    background: ${({ theme }) => theme.palette.customColors?.bodyBg};
    border-radius: 5px;
    min-height: 50px;
    padding: 15px 18px;

    width: 100%;
    .MuiInputBase-root {
      /* border: 1px solid; */
      color: rgba(29, 24, 21, 1);
      padding-right: 0;
      font-size: 13px;

      .MuiInputAdornment-root {
        button {
          margin: 0;
          padding: 0;
        }
      }
      input {
        padding: 0;
      }
      fieldset {
        border: none;
      }
    }
  }
`;
