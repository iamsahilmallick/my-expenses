import { AxiosError } from 'axios';

export interface ApiError {
  message?: string;
  status?: number;
  code?: string;
}

export const handleApiError = (error: unknown): ApiError => {
  const axiosError = error as AxiosError<ApiError>;
  return {
    message: axiosError.response?.data?.message || 'An unexpected error occurred.',
    status: axiosError.response?.status,
    code: axiosError?.response?.data?.code,
  };
};
