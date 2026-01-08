import { ProjectRoutes } from '@/routes/createRoutes';
import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';

interface ICheckUserAuth {
  context: GetServerSidePropsContext;
  isLoginPop?: boolean;
  pageName?: string;
  extra?: Record<string, unknown>;
}

export const checkUserAuth = async ({ context }: ICheckUserAuth) => {
  const { _myExpense } = parseCookies(context);
  if (_myExpense) {
    return {
      redirect: {
        destination: `${ProjectRoutes.dashboard.home}`,
        permanent: false,
      },
    };
  }

  return { props: {} };
};
