import { useMutation, useQuery } from '@tanstack/react-query';
import { ProfileQueryEnum } from '../keys/query-keys';
import { profileFunc, updateProfile } from './profile.func';

// Get Profile Hook
export const useProfile = () => {
  return useQuery({
    queryKey: [ProfileQueryEnum.getProfile],
    queryFn: profileFunc,
  });
};

// update profile
export const useUpdateProfile = () =>
  useMutation({
    mutationFn: updateProfile,
    mutationKey: [ProfileQueryEnum.updateProfile],
  });
