import { globalError, globalSuccess, globalWarning } from '@/lib/functions/_helpers.lib';
import eventEmitter from '@/lib/services/event.emitter';
import events from '@/resources/events/events';
import { TRootApResponse } from '@/typescripts/enum/HttpStatusCodeEnum';
import { NetworkRoot } from '@/typescripts/enum/common.enum';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { parseCookies } from 'nookies';
import { baseUrlApi, successEndpoints } from './endpoints';

let isAlreadyHandlingUnauthorized = false;
let isAlreadyHandlingNetworkError = false;

const axiosInstance = axios.create({
  baseURL: baseUrlApi,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(config => {
  const cookies = parseCookies();
  const token = cookies[process.env.NEXT_PUBLIC_APP_TOKEN_NAME!];
  if (token && !!config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse<TRootApResponse>) => {
    if (successEndpoints.includes(res.config.url as string)) {
      const statusCode = [200, 201];
      if (!statusCode.includes(res?.data?.status)) {
        globalWarning(res);
      } else {
        globalSuccess(res);
      }
    }
    return res;
  },
  async (error: AxiosError<TRootApResponse>) => {
    const status = error.response?.status;
    const networkStatus = error?.code === NetworkRoot.ERR_NETWORK;
    const invalidTokenStatuses = [401];
    if (status && invalidTokenStatuses.includes(status)) {
      if (!isAlreadyHandlingUnauthorized) {
        isAlreadyHandlingUnauthorized = true;
        eventEmitter.emit(events.logoutCurrentUser);
        setTimeout(() => {
          isAlreadyHandlingUnauthorized = false;
        }, 2000);
      }
    }
    if (networkStatus) {
      if (!isAlreadyHandlingNetworkError) {
        isAlreadyHandlingNetworkError = true;
        globalError(error);
        setTimeout(() => {
          isAlreadyHandlingNetworkError = false;
        }, 2000);
      }
      return;
    }
    if (status !== 401) {
      globalError(error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
