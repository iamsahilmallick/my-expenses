import { ProjectName } from '@/config/constants';
import { PageNames } from '@/routes/createRoutes';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

interface SeoWrapperProps {
  title?: string;
  description?: string;
}

const SeoWrapper = ({ title, description }: SeoWrapperProps) => {
  const pathname = usePathname();

  const resolvedTitle = title || `${PageNames[pathname]} | ${ProjectName}` || `${ProjectName}`;
  const resolvedDescription =
    description ||
    `${resolvedTitle} - Manage your finances, track expenses, incomes, categories and reports.`;

  return (
    <Head>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default SeoWrapper;
