import { ProjectRoutes } from '@/routes/createRoutes';
import DashboardIcon from '@/ui/Icons/DashboardIcon';
import ExpensesIcon from '@/ui/Icons/ExpensesIcon';
import IncomeIcon from '@/ui/Icons/IncomeIcon';
import MyTaskIcon from '@/ui/Icons/MyTaskIcon';
import ProfileIcon from '@/ui/Icons/ProfileIcon';
import ReportIcon from '@/ui/Icons/ReportIcon';

export const sidebarMenus: {
  name: string;
  route: string;
  icon: React.ReactNode;
}[] = [
  {
    icon: <DashboardIcon />,
    name: 'Home',
    route: `${ProjectRoutes.dashboard.home}`,
  },

  {
    icon: <ExpensesIcon />,
    name: 'My Expenses',
    route: `${ProjectRoutes.dashboard.expenses}/`,
  },
  {
    icon: <IncomeIcon />,
    name: 'My Incomes',
    route: `${ProjectRoutes.dashboard.incomes}/`,
  },
  {
    icon: <MyTaskIcon />,
    name: 'Category',
    route: `${ProjectRoutes.dashboard.category}/`,
  },
  {
    icon: <ReportIcon />,
    name: 'Reports',
    route: `${ProjectRoutes.dashboard.report}/`,
  },
  {
    icon: <ProfileIcon />,
    name: 'My Profile',
    route: `${ProjectRoutes.dashboard.profile}/`,
  },
];
