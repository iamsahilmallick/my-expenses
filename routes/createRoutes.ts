// routes.ts
export enum ROUTES_TYPE {
  landingPage = '/',
  dashboard = '/dashboard',
  auth = '/auth',
}

export const ProjectRoutes = {
  landingPage: ROUTES_TYPE.landingPage,
  login: `${ROUTES_TYPE.auth}/login`,
  register: `${ROUTES_TYPE.auth}/sign-up`,
  forgotPassword: `${ROUTES_TYPE.auth}/forgot-password`,
  dashboard: {
    home: `${ROUTES_TYPE.dashboard}`,
    expenses: `${ROUTES_TYPE.dashboard}/expenses`,
    incomes: `${ROUTES_TYPE.dashboard}/incomes`,
    category: `${ROUTES_TYPE.dashboard}/category`,
    report: `${ROUTES_TYPE.dashboard}/report`,
    profile: `${ROUTES_TYPE.dashboard}/profile`,
    settings: `${ROUTES_TYPE.dashboard}/settings`,
  },
};

export const PageNames: Record<string, string> = {
  [ProjectRoutes.landingPage]: 'Home',
  [ProjectRoutes.login]: 'Login',
  [ProjectRoutes.register]: 'Register',
  [ProjectRoutes.forgotPassword]: 'Forgot Password',
  [ProjectRoutes.dashboard.home]: 'Dashboard',
  [ProjectRoutes.dashboard.expenses]: 'Expenses',
  [ProjectRoutes.dashboard.incomes]: 'Incomes',
  [ProjectRoutes.dashboard.category]: 'Category',
  [ProjectRoutes.dashboard.report]: 'Report',
  [ProjectRoutes.dashboard.profile]: 'Profile',
  [ProjectRoutes.dashboard.settings]: 'Settings',
};
