import { ResetStep } from '../types';

export type TDashoboardSidebarProps = {
  navItems?: {
    name: string;
    route: string;
    icon: React.ReactNode;
  }[];
};

export interface ICustomIconProps {
  IconColor?: string;
  IconWidth?: string;
  IconHeight?: string;
  fill?: boolean;
}

export interface ResetState {
  step: ResetStep;
}

export interface TCommonRoot {
  status: number;
  type: string;
  message: string;
  data?: unknown;
  statusCode: number;
}

export interface TRootResponse<T> {
  success: boolean;
  status: number;
  message: string;
  data: T;
  pagination?: TPaginateMeta;
}

export interface TPaginateMeta {
  page: number;
  size: number;
  totalRecords: number;
  totalPages: number;
}

export interface TRootError {
  statusCode: number;
  message: string;
}
