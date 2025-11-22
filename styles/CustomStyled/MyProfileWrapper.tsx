import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const MyProfileWrapper = styled(Box)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  * {
    transition: all 0.2s ease;
  }

  .headerCard {
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 14px;
    background: linear-gradient(130deg, #eaf2ff, #ffffff);
    box-shadow: 0 3px 10px rgba(0, 50, 120, 0.1);
    border: 1px solid #e4eaf2;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 60, 140, 0.15);
    }
    .MuiAvatar-root {
      width: 90px;
      height: 90px;

      @media (max-width: 600px) {
        width: 65px;
        height: 65px;
      }
    }

    button {
      font-size: 11px;
      padding: 6px 14px;
      border-radius: 8px;

      @media (max-width: 600px) {
        padding: 5px 10px;
        font-size: 10px;
      }
    }

    @media (max-width: 600px) {
      padding: 14px;
      flex-direction: column;
      gap: 10px;
      text-align: center;
    }
  }

  /* ---------- SECTION CARD ---------- */
  .sectionCard {
    padding: 18px;
    border-radius: 14px;
    background: #ffffffee;
    backdrop-filter: blur(6px);
    border: 1px solid #ececec;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

    &:hover {
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
    }

    @media (max-width: 600px) {
      padding: 14px;
      border-radius: 10px;
    }
  }

  /* ---------- SECTION HEADER ---------- */
  .sectionHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;

    h6 {
      font-size: 17px;
      font-weight: 700;
      color: #0a2d52;

      @media (max-width: 600px) {
        font-size: 15px;
      }
    }

    button {
      background: #f3f7ff;
      border-radius: 8px;

      &:hover {
        background: #e1ebff;
      }

      svg {
        font-size: 18px;

        @media (max-width: 600px) {
          font-size: 16px;
        }
      }
    }
  }

  /* ---------- SOCIAL CARD ---------- */
  .socialCard {
    padding: 12px 14px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fafcff;
    border: 1px solid #e9edf3;

    @media (max-width: 600px) {
      padding: 10px 12px;
      border-radius: 10px;
    }

    &:hover {
      background: #eef3ff;
      transform: translateY(-1px);
    }

    svg {
      font-size: 19px;

      @media (max-width: 600px) {
        font-size: 16px;
      }
    }

    p,
    span,
    div {
      font-size: 14px;

      @media (max-width: 600px) {
        font-size: 13px;
      }
    }
  }

  /* ---------- PORTFOLIO IMAGES ---------- */
  .portfolioImage {
    width: 100%;
    height: 120px;
    border-radius: 12px;
    object-fit: cover;
    cursor: pointer;
    border: 1px solid #e5e8ec;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

    @media (max-width: 900px) {
      height: 110px;
    }

    @media (max-width: 600px) {
      height: 95px;
      border-radius: 10px;
    }

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
      border-color: #b9ccff;
    }
  }

  /* ---------- ADD NEW LINK ---------- */
  .addNewLink {
    margin-top: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #0a4fa3;
    gap: 6px;
    font-size: 14px;

    @media (max-width: 600px) {
      font-size: 13px;
      gap: 4px;
    }

    &:hover {
      color: #002f6c;
      transform: translateX(3px);
    }

    svg {
      font-size: 18px;

      @media (max-width: 600px) {
        font-size: 16px;
      }
    }
  }
`;
