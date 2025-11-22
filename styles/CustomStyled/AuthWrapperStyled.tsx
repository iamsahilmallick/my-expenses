import { Box, Stack, styled } from '@mui/material';

export const AuthWrapperStyled = styled(Stack)`
  padding: 20px;
  padding-right: 0;
  overflow: hidden;
  height: 100dvh;
  background: linear-gradient(
    90deg,
    rgba(192, 203, 204, 1) 0%,
    rgba(213, 232, 220, 1) 48%,
    rgba(225, 230, 226, 1) 50%,
    rgba(245, 244, 228, 1) 100%
  );
  @media (max-width: 899px) {
    padding: 20px;
    padding-right: 20px;
    overflow: auto;
  }

  .left_box {
    position: relative;
    width: 50%;
    height: calc(100dvh - 30px);
    @media (max-width: 899px) {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100dvh;
    }
    .main_media {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 30px;
      @media (max-width: 899px) {
        border-radius: 0;
      }
    }
  }

  .right_box {
    width: 50%;
    height: calc(100dvh - 40px);
    overflow: auto;

    padding: 0 20px;

    @media (max-width: 899px) {
      width: 100%;
      background: linear-gradient(
        90deg,
        rgba(192, 203, 204, 1) 0%,
        rgba(213, 232, 220, 1) 48%,
        rgba(225, 230, 226, 1) 50%,
        rgba(245, 244, 228, 1) 100%
      );
      z-index: 1;
      height: auto;
      border-radius: 15px;
    }
    .right_wrapper {
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .submit_btn {
      font-size: 16px;
      /* padding-top: 11px;
      padding-bottom: 11px; */
    }
    .right_box_content {
      padding: 20px 0;
      width: 100%;
      max-width: 530px;
      @media (max-width: 899px) {
        max-width: 100%;
      }
      .logo_stack {
        .auth_link {
          figure {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            overflow: hidden;
            background: #f0f0f0; // fallback color
            display: flex;
            align-items: center;
            justify-content: center;

            img {
              width: 80%;
              height: 80%;
              object-fit: cover; // Ensures perfect fill
              object-position: center; // Centers the image
              display: block;
            }
          }
        }
      }

      .auth_middle {
        .title {
          text-align: center;
          text-transform: capitalize;
          font-weight: 700;
          font-size: 36px;
          margin-bottom: 10px;
          @media (max-width: 599px) {
            font-size: 28px;
          }
        }

        .subtitle {
          font-weight: 400;
          color: ${({ theme }) => theme.palette.customColors?.color1D1D1D};
          text-align: center;
          margin-bottom: 25px;
        }
      }
    }
  }
`;

export const SignUpWrapper = styled(Box)``;

export const OTPVerifyWrapper = styled(Box)`
  .otp_input_box {
    > div {
      display: flex;
      gap: 25px;
    }
    input {
      width: 25% !important;
      border-radius: 9px;
      background-color: ${({ theme }) => theme.palette.common.white};
      border: 1px solid ${({ theme }) => theme.palette.customColors?.color1D1D1D};
      box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.04);
      font-size: 16px;
      font-weight: 400;
      padding: 20px;
      &::placeholder {
        color: ${({ theme }) => theme.palette.customColors?.placeText} !important;
        opacity: 1;
        -webkit-text-fill-color: ${({ theme }) => theme.palette.customColors?.placeText} !important;
      }

      &::-ms-input-placeholder {
        color: ${({ theme }) => theme.palette.customColors?.placeText} !important;
        opacity: 1;
        -webkit-text-fill-color: ${({ theme }) => theme.palette.customColors?.placeText} !important;
      }
    }
  }
`;

export const AuthStatCardStyled = styled(Stack)`
  max-width: 350px;
  gap: 15px;
  background: linear-gradient(
    95.59deg,
    rgba(255, 255, 255, 0.42) 1.02%,
    rgba(255, 255, 255, 0.7) 96.73%
  );
  backdrop-filter: blur(20px);
  border-radius: 28px;
  padding: 14px;
  padding-right: 30px;
  &:before {
    content: '';
    inset: 0;
    position: absolute;
    border-radius: 28px;

    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)
      border-box border-box;
    pointer-events: none;
    border: 1px solid transparent;
    mask:
      linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%) padding-box,
      linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    mask-composite: exclude;
  }

  .left_icon {
    width: 90px;
    height: 81px;
    position: relative;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    .MuiTypography-root {
      font-weight: 700;
      font-size: 24px;
      color: ${({ theme }) => theme.palette.primary.light};
    }
    &:before {
      content: '';
      inset: 0;
      position: absolute;
      border-radius: 20px;

      background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)
        border-box border-box;
      pointer-events: none;
      border: 1px solid transparent;
      mask:
        linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%) padding-box,
        linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
      mask-composite: exclude;
    }
  }

  .rght_text_box {
    .heading {
      color: ${({ theme }) => theme.palette.primary.main};
      font-weight: 700;
      font-size: 20px;
    }
    .subtext {
      color: ${({ theme }) => theme.palette.primary.main};
      font-weight: 500;
      font-size: 15px;
    }
  }
`;

export const LoginWrapper = styled(Box)`
  .forgot_link {
    font-weight: 600;
    font-size: 16px;
    color: ${({ theme }) => theme.palette.customColors?.color1D1D1D};
  }
  .checkbox_group {
    .MuiFormControlLabel-label {
      font-size: 14px;
      color: ${({ theme }) => theme.palette.common.black};
    }
  }
  .forgot_link {
    font-size: 14px;
    color: ${({ theme }) => theme.palette.common.black};
  }
`;
