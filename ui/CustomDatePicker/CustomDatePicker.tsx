import { Box, styled, TextField, TextFieldProps } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { Control, FieldValues, Path } from 'react-hook-form';
import DatePickerIcon from '../Icons/DatePickerIcon';

interface CustomDatePickerProps<T extends FieldValues> {
  name?: Path<T>;
  control?: Control<T>;
  placeholder?: string;
  className?: string;
  value?: Dayjs | null;
  onChange?: (date: Dayjs | null) => void;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  textFieldProps?: Partial<TextFieldProps>;
}

const CustomDatePicker = <T extends FieldValues>({
  placeholder,
  className,
  value,
  onChange,
  error,
  helperText,
  disabled,
  minDate,
  maxDate,
  textFieldProps,
}: CustomDatePickerProps<T>) => {
  return (
    <CustomDatePickerStyle className={className}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          value={value || null}
          onChange={onChange}
          disabled={disabled}
          minDate={minDate}
          maxDate={maxDate}
          slots={{
            openPickerIcon: DatePickerIcon,
            textField: TextField,
          }}
          slotProps={{
            textField: {
              placeholder: placeholder,
              error: error,
              helperText: helperText,
              ...textFieldProps,
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
      color: black;
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
