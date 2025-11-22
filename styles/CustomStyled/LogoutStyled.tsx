import { Box, styled } from '@mui/material';

export const LogoutStyled = styled(Box)`
  padding: 50px 0;
  text-align: center;
  max-width: 507px;
  margin: 0 auto;

  figure {
    width: 103px;
    height: 103px;
    background: ${({ theme }) => theme.palette.customColors.color7C7C7C};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    margin: 0 auto 25px auto;

    svg {
      width: 36px;
      height: 36px;
    }
  }

  h2 {
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 30px;
  }

  .MuiStack-root {
    justify-content: center;

    button,
    a {
      min-width: 199px;
    }

    button {
      border-color: ${({ theme }) => theme.palette.customColors.color7C7C7C};
    }
  }
`;
