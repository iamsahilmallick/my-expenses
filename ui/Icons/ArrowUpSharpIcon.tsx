import { ICustomIconProps } from '@/typescripts/interfaces/common.interfaces';

export default function ArrowUpSharpIcon({ IconWidth, IconHeight, IconColor }: ICustomIconProps) {
  return (
    <svg
      width={IconWidth || '16'}
      height={IconHeight || '16'}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33594 8.00065L8.0026 3.33398M8.0026 3.33398L12.6693 8.00065M8.0026 3.33398V12.6673"
        stroke={IconColor || '#325CFF'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
