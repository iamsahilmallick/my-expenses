import { _projectToken } from '@/config/keys.constants';
import { getCookieVal } from '@/lib/common/commonUtils';
import { setProfileData } from '@/redux-toolkit/slices/authSlice';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useAppDispatch } from '../commons/useReduxHook';
import { ProfileQueryEnum } from './keys/query-keys';
import { profileFunc } from './profile/profile.func';

const useUserProfile = () => {
  const dispatch = useAppDispatch();
  const token = getCookieVal(_projectToken);

  const profileDetails = useQuery({
    queryKey: [ProfileQueryEnum.getProfile],
    queryFn: profileFunc,
    enabled: !!token,
  });

  useEffect(() => {
    if (profileDetails.data) {
      dispatch(setProfileData(profileDetails?.data));
    }
  }, [
    profileDetails.isSuccess,
    profileDetails.isError,
    profileDetails?.data,
    profileDetails.error,
    dispatch,
  ]);

  return { ...profileDetails };
};

export default useUserProfile;
