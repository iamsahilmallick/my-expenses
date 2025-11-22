import { Box, styled } from '@mui/material';

export const PageLoaderWrapper = styled(Box)`
  .mainPageLoader_wrapper {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    /* ✅ Fullscreen background image + gradient */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    /* ✅ Optional dark overlay for depth */
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: #fff;
      z-index: 1;
    }

    /* Content above overlay */
    .wrapper_logoWrap,
    .loader_textWrap {
      position: relative;
      z-index: 2;
    }

    /* ✅ Logo + Spinner */
    .wrapper_logoWrap {
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: center;

      figure {
        width: 160px;
        height: auto;
        position: relative;
        line-height: 0;
        margin-left: 40px;
        @media (max-width: 899px) {
          margin-left: 30px;
          width: 120px;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .spinner-box {
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: transparent;

        @media (max-width: 899px) {
          width: 240px;
          height: 240px;
        }
      }

      /* ✅ Circle Border: black-white gradient ring */
      .circle-border {
        width: 240px;
        height: 240px;
        padding: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: linear-gradient(180deg, #000000 0%, #ffffff 100%);
        animation: spin 0.8s linear infinite;

        @media (max-width: 899px) {
          width: 180px;
          height: 180px;
        }
      }

      /* ✅ Circle Core: solid black center */
      .circle-core {
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.palette.common.black};
        border-radius: 50%;
      }
    }

    /* ✅ Text Section */
    .loader_textWrap {
      margin-top: 50px;
      text-align: center;
      max-width: 500px;
      padding: 0 16px;
    }

    .loader_title {
      font-weight: 600;
      color: ${({ theme }) => theme.palette.customColors?.color7C7C7C};
      margin-bottom: 8px;
      font-size: 32px;
      @media (max-width: 599px) {
        font-size: 24px;
      }
      &.validating {
        color: ${({ theme }) => theme.palette.primary.dark};
      }
      &.success {
        color: ${({ theme }) => theme.palette.customColors?.color7C7C7C};
      }
    }

    .loader_description {
      color: ${({ theme }) => theme.palette.text.secondary};
      line-height: 1.5;
      &.validating {
        color: ${({ theme }) => theme.palette.primary.dark};
      }
      &.success {
        color: ${({ theme }) => theme.palette.customColors?.color7C7C7C};
      }
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
