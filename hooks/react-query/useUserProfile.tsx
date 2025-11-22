import { useQuery } from '@tanstack/react-query';
import { parseCookies } from 'nookies';
import { getProfile } from './auth/auth.func';
import { ProfileQueryEnum } from './keys/query-keys';

const useUserProfile = () => {
  const cookies = parseCookies();
  const token = cookies[process.env.NEXT_PUBLIC_APP_TOKEN_NAME!];

  const profileDetails = useQuery({
    queryKey: [ProfileQueryEnum.getProfile],
    queryFn: getProfile,
    enabled: !!token,
  });

  return { ...profileDetails };
};

export default useUserProfile;
