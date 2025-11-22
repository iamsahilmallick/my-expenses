import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  styled,
  Typography,
} from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select';
import { useState } from 'react';
import { SelectArrowIcon } from '../Icons/SelectArrowIcon';

const CustomSelectWrapper = styled(Select)`
  background-color: ${({ theme }) => theme.palette.customColors?.bodyBg};
  border-radius: 5px;

  &.MuiInputBase-root {
    .MuiOutlinedInput-notchedOutline {
      display: none;
    }
    color: black;

    svg {
      margin-right: 10px;
      flex-shrink: 0;
    }

    .MuiSelect-select {
      font-size: 13px;
      font-weight: 400;
      color: ${({ theme }) => theme.palette.customColors?.dark};
      padding: 0;
      padding: 15px 16px;
      min-height: auto;

      @media (max-width: 1199px) {
        font-size: 16px;
      }

      .intValue {
        text-transform: capitalize;
        color: currentColor;
      }
    }

    .MuiIconButton-root {
      padding: 0;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .intValue {
    color: ${({ theme }) => theme.palette.secondary.light};
    font-size: 13px;
    font-weight: 400;
  }

  .MuiIconButton-root {
    svg {
      margin: 0 !important;
    }
  }
`;

const SelectWrapperOute = styled(Box)`
  @media (max-width: 599px) {
    width: 100%;
  }

  label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.primary.main}; /* UPDATED LABEL COLOR */
  }
`;

interface CustomSelectProps {
  initialvalue?: React.ReactNode | string;
  labelName?: string;
  className?: string;
  iconButton?: React.ReactNode;
}

const CustomSelect: React.FC<CustomSelectProps & SelectProps> = ({
  initialvalue,
  labelName,
  className,
  iconButton,
  ...props
}) => {
  const MenuProps = {
    PaperProps: {
      className: 'commonSelectList',
      style: {
        maxHeight: 200,
        overflowY: 'auto' as const,
      },
    },
  };

  const [value, setValue] = useState('');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setValue(event.target.value as string);
  };

  return (
    <SelectWrapperOute>
      {labelName && <InputLabel>{labelName}</InputLabel>}

      <FormControl fullWidth>
        <CustomSelectWrapper
          labelId="select-label"
          id="select-custom"
          displayEmpty
          input={<OutlinedInput />}
          value={value}
          onChange={handleChange}
          IconComponent={props => (
            <IconButton {...props}>{iconButton || <SelectArrowIcon />}</IconButton>
          )}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
          className={className}
          {...props}
        >
          <MenuItem value="" sx={{ display: 'none' }}>
            <Typography variant="caption" className="intValue">
              {initialvalue}
            </Typography>
          </MenuItem>

          {props.children}
        </CustomSelectWrapper>
      </FormControl>
    </SelectWrapperOute>
  );
};

export default CustomSelect;
