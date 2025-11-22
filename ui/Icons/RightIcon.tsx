import { ICustomIconProps } from '@/typescripts/interfaces/common.interfaces';

const RightIcon = ({ IconColor, IconHeight, IconWidth }: ICustomIconProps) => {
  return (
    <svg
      width={IconWidth || '20'}
      height={IconHeight || '20'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 5L12.5 10L7.5 15"
        stroke={IconColor || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightIcon;
