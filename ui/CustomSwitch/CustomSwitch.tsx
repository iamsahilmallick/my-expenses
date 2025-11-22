import { Box, styled, Switch } from '@mui/material';
import { useState } from 'react';

const CustomSwitch = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <CustomSwitchWrap>
      <Switch
        checked={checked}
        onChange={handleChange}
        className={checked === true ? 'checked' : ''}
      />
    </CustomSwitchWrap>
  );
};

export default CustomSwitch;

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
      background: ${({ theme }) => theme.palette.primary.light};
      opacity: 1;
    }
  }
`;
