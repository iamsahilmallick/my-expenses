import { useMutation, useQuery } from '@tanstack/react-query';
import { ProfileQueryEnum } from '../keys/query-keys';
import { getProfile, loginFunc, updateProfile } from './auth.func';

// Social Login
export const useSocialSignUp = () =>
  useMutation({
    mutationFn: loginFunc,
    mutationKey: [ProfileQueryEnum.login],
  });

// Get Profile Hook
export const useProfile = () => {
  return useQuery({
    queryKey: [ProfileQueryEnum.getProfile],
    queryFn: getProfile,
  });
};

// update profile
export const useUpdateProfile = () =>
  useMutation({
    mutationFn: updateProfile,
    mutationKey: [ProfileQueryEnum.updateProfile],
  });
