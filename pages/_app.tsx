import EventListeners from '@/components/Commons/EventListener/EventListener';
import SeoWrapper from '@/components/Commons/SeoWrapper/SeoWrapper';
import { checkWindow } from '@/lib/functions/_helpers.lib';
import { wrapper } from '@/redux-toolkit/store/store';
import '@/styles/global.scss';
import ProjectThemeProvider from '@/theme/ProjectThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';

function fixSSRLayout() {
  if (!checkWindow()) {
    React.useLayoutEffect = () => {
      // console.info("layout effect")
    };
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 0,
    },
  },
});

export default function CustomApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  fixSSRLayout();
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ProjectThemeProvider>
            <SeoWrapper />
            <EventListeners />
            <Toaster position="top-left" richColors />
            <Component {...pageProps} />
          </ProjectThemeProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
}
