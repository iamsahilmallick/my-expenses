import { Box, styled, Switch, SwitchProps } from '@mui/material';
import { useState } from 'react';

interface CommonSwitchProps extends Omit<SwitchProps, 'onChange'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const CommonSwitch = ({
  checked,
  defaultChecked = false,
  onChange,
  disabled,
  ...props
}: CommonSwitchProps) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isControlled = typeof checked === 'boolean';
  const value = isControlled ? checked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;

    if (!isControlled) {
      setInternalChecked(newValue);
    }

    onChange?.(newValue);
  };

  return (
    <CustomSwitchWrap>
      <Switch
        checked={value}
        onChange={handleChange}
        disabled={disabled}
        disableRipple
        {...props}
      />
    </CustomSwitchWrap>
  );
};

export default CommonSwitch;

export const CustomSwitchWrap = styled(Box)`
  .MuiSwitch-root {
    width: 43px;
    height: 19px;
    padding: 0;
    border-radius: 50px;

    .MuiSwitch-switchBase {
      padding: 0;
      top: 2px;
      left: 2px;
      &.Mui-checked {
        transform: translateX(25px);
        & + .MuiSwitch-track {
          background: ${({ theme }) => theme.palette.primary.light};
          opacity: 1;
        }
      }
    }

    .MuiSwitch-thumb {
      width: 15px;
      height: 15px;
      box-shadow: none;
      background: ${({ theme }) => theme.palette.common.white};
    }

    .MuiSwitch-track {
      background: #a5ada7; /* <-- unchecked color */
      opacity: 1;
    }
  }
`;
