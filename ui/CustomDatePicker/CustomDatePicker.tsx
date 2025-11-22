import { Box, styled, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DatePickerIcon from '../Icons/DatePickerIcon';

interface datePickerProps {
  placeholder?: string;
  className?: string;
}

const CustomDatePicker = ({ placeholder, className }: datePickerProps) => {
  return (
    <CustomDatePickerStyle className={className}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          slots={{
            openPickerIcon: DatePickerIcon,
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

export default CustomDatePicker;

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
      @media (max-width: 1199px) {
        font-size: 16px;
      }
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
