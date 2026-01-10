import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { StandardTextFieldProps } from '@mui/material/TextField';
import React, { forwardRef, useCallback, useState } from 'react';
import EyeOffIcon from '../Icons/EyeOffIcon';
import EyeOnIcon from '../Icons/EyeOnIcon';

export const CustomInputWrap = styled(TextField)`
  .MuiInputBase-root {
    background: ${({ theme }) => theme.palette.customColors?.bodyBg};
    border-radius: 13px;
    min-height: 50px;
    padding: 12px 18px;

    .MuiInputBase-input {
      font-size: 13px;
      color: ${({ theme }) => theme.palette.customColors?.dark};
      padding: 0;
      @media (max-width: 899px) {
        font-size: 16px;
      }
      &::placeholder {
        text-transform: capitalize;
        color: ${({ theme }) => theme.palette.customColors?.color1D1D1D} !important;
        opacity: 1;
        -webkit-text-fill-color: ${({ theme }) =>
          theme.palette.customColors?.color1D1D1D} !important;
      }

      &::-ms-input-placeholder {
        text-transform: capitalize;
        color: ${({ theme }) => theme.palette.customColors?.color1D1D1D} !important;
        opacity: 1;
        -webkit-text-fill-color: ${({ theme }) =>
          theme.palette.customColors?.color1D1D1D} !important;
      }
    }

    .MuiInputAdornment-positionEnd {
      margin-left: 8px;
      .MuiIconButton-root {
        padding: 0;
      }
    }

    .MuiInputAdornment-positionStart {
      margin-right: 8px;
    }
  }

  fieldset {
    display: none;
  }
`;

type InputFieldCommonProps = StandardTextFieldProps & {
  isPassword?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

const CustomInput = forwardRef<HTMLInputElement, InputFieldCommonProps>(
  ({ isPassword = false, startAdornment, endAdornment, ...others }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = useCallback(() => {
      setShowPassword(prev => !prev);
    }, []);

    const handleMouseDownPassword = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    }, []);

    return (
      <CustomInputWrap
        fullWidth
        variant={others.variant ?? 'outlined'}
        type={isPassword ? (showPassword ? 'text' : 'password') : others?.type}
        slotProps={{
          input: {
            inputRef: ref,
            startAdornment: startAdornment && (
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            ),
            endAdornment: isPassword ? (
              <InputAdornment position="end" className="password-icon">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  disableRipple
                >
                  {showPassword ? <EyeOnIcon /> : <EyeOffIcon />}
                </IconButton>
              </InputAdornment>
            ) : (
              endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>
            ),
          },
        }}
        {...others}
      />
    );
  }
);

export default CustomInput;
