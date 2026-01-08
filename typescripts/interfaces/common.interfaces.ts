import { ResetStep } from '../types';

export type TDashoboardSidebarProps = {
  navItems?: {
    name: string;
    route: string;
    icon: React.ReactNode;
  }[];
};

export interface ICommonTableProps {
  children?: React.ReactNode;
  headList: string[];
  title?: string;
  isFilter?: boolean;
  isAdd?: boolean;
  addOnClick?: () => void;
  btnIcon?: React.ReactNode;
  page?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  isLoading?: boolean;
  skeletonRows?: number;
  isSearch?: boolean;
  searchValue?: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  isEmpty?: boolean;
  emptyText?: string;
  emptyDescription?: string;
}

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
  success: boolean;
  token: string;
}

export interface TRootResponse<T> {
  status: number;
  type: string;
  message: string;
  statusCode: number;
  success: boolean;
  token: string;
  data: T;
  pagination?: TPaginateMeta;
}

export interface TPaginateMeta {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: unknown;
  nextPage: unknown;
}

export interface TRootError {
  statusCode: number;
  message: string;
}
