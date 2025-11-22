import useEventEmitter from '@/hooks/commons/useEventEmitter';
import { useAppDispatch } from '@/hooks/commons/useReduxHook';
import useUserProfile from '@/hooks/react-query/useUserProfile';
import { setLogout } from '@/redux-toolkit/slices/authSlice';
import events from '@/resources/events/events';
import { useCallback } from 'react';
import { toast } from 'sonner';

export default function EventListeners() {
  const dispatch = useAppDispatch();
  useUserProfile();

  const handleLogout = useCallback(() => {
    toast('Session expired, you have been logged out.', {
      position: 'top-center',
    });
    dispatch(setLogout());
  }, []);

  const showNotifications = useCallback(
    (data: { message: string; options: { variant: string } }) => {
      if (data?.options?.variant === 'error') {
        toast.error(data.message);
      }

      if (data?.options?.variant === 'success') {
        toast.success(data.message);
      }

      if (data?.options?.variant === 'warning') {
        toast.error(data.message);
      }
    },
    []
  );

  useEventEmitter(events.showToast, showNotifications);
  useEventEmitter(events.logoutCurrentUser, handleLogout);
  return null;
}
