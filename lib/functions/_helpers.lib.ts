import events from '@/resources/events/events';
import { TRootApResponse } from '@/typescripts/enum/HttpStatusCodeEnum';
import { AxiosError, AxiosResponse } from 'axios';
import eventEmitter from '../services/event.emitter';

export function checkWindow() {
  return typeof window !== 'undefined';
}

export function isInServer() {
  return typeof document === 'undefined';
}

export const globalSuccess = (response: AxiosResponse<TRootApResponse>) => {
  let message = 'Something went wrong (Internal Server Error 502)';
  if (response?.data?.message) {
    message = response?.data.message;
  }
  eventEmitter.emit(events.showToast, {
    message,
    options: { variant: 'success' },
  });
};

export const globalWarning = (response: AxiosResponse<TRootApResponse>) => {
  let message = 'Something went wrong (Internal Server Error 502)';
  if (response?.data?.message) {
    message = response?.data.message;
  }
  eventEmitter.emit(events.showToast, {
    message,
    options: { variant: 'warning' },
  });
};

export const globalError = (error: AxiosError<TRootApResponse>) => {
  let message = 'Something went wrong (Internal Server Error 502)';
  if (error.response?.data?.message) {
    message = error.response?.data.message;
  }
  eventEmitter.emit(events.showToast, {
    message,
    options: { variant: 'error' },
  });
};
