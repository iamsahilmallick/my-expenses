import styled from '@emotion/styled';
import Button, { ButtonProps } from '@mui/material/Button';

const CustomButtonWrapper = styled(Button)`
  text-transform: inherit;
  padding: 19px 26px;
  line-height: 1.2;
`;

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode | React.ReactNode[] | string;
  className?: string;
  buttonType?: 'small' | 'large';
}

const CustomButton = ({ children, className, buttonType, ...others }: CustomButtonProps) => {
  return (
    <CustomButtonWrapper
      className={`${buttonType === 'small' && 'smallButton'} ${className || ''}`}
      {...others}
    >
      {children}
    </CustomButtonWrapper>
  );
};

export default CustomButton;
