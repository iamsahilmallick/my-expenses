import { toast } from 'sonner';
import { useAppSelector } from './useReduxHook';

export default function useRequireLogin(): (message?: string) => boolean {
  const { isLoggedIn } = useAppSelector(state => state.auth);
  const requireLogin = (message: string = 'Please login to continue'): boolean => {
    if (!isLoggedIn) {
      toast.info(message);
      return false;
    }
    return true;
  };

  return requireLogin;
}
