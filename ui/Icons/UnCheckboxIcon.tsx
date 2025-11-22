import { ICustomIconProps } from '@/typescripts/interfaces/common.interfaces';

export default function UnCheckboxIcon({ IconColor, IconHeight, IconWidth }: ICustomIconProps) {
  return (
    <svg
      width={IconWidth || '20'}
      height={IconHeight || '20'}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="21"
        height="21"
        rx="3.5"
        fill="white"
        stroke={IconColor || '#8E9099'}
      />
    </svg>
  );
}
