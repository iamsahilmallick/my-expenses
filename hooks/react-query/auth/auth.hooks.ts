import { useMutation } from '@tanstack/react-query';
import { ProfileQueryEnum } from '../keys/query-keys';
import { loginFunc, resendOtpFunc, signUpFunc, verifyOtpFunc } from './auth.func';

// Login
export const useLogin = () =>
  useMutation({
    mutationFn: loginFunc,
    mutationKey: [ProfileQueryEnum.login],
  });

// Register
export const useSignUp = () =>
  useMutation({
    mutationFn: signUpFunc,
    mutationKey: [ProfileQueryEnum.register],
  });

export const useResendOTP = () =>
  useMutation({
    mutationFn: resendOtpFunc,
    mutationKey: [ProfileQueryEnum.resendOTp],
  });

export const useVerifyOTP = () =>
  useMutation({
    mutationFn: verifyOtpFunc,
    mutationKey: [ProfileQueryEnum.verifyOTp],
  });
