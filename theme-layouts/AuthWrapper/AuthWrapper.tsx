import assets from '@/resources/assets';
import { AuthWrapperStyled } from '@/styles/CustomStyled/AuthWrapperStyled';
import { Box, Stack, StackProps, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type TAuthWrapperProps = Pick<StackProps, 'children'> & {
  leftComponent?: React.ReactNode;
  title: string;
  subtitle: string;
  mainMedia: string;
  className?: string;
};

const AuthWrapper: React.FC<TAuthWrapperProps> = ({
  leftComponent,
  mainMedia,
  subtitle,
  title,
  children,
  className,
}) => {
  const pathName = usePathname();
  return (
    <AuthWrapperStyled
      className={className}
      alignItems={'center'}
      flexWrap={{ xs: 'wrap', md: 'nowrap' }}
    >
      <Box className="left_box">
        <Image className="main_media" src={mainMedia} alt="main media" width={940} height={940} />
        {leftComponent}
      </Box>
      <Box className="right_box">
        <Box className="right_wrapper">
          <Box className="right_box_content">
            <Stack className="logo_stack" justifyContent={'center'}>
              <Link href={'/'} className="auth_link">
                <figure>
                  <Image src={assets.webLogo} alt="auth logo" width={260} height={47} priority />
                </figure>
              </Link>
            </Stack>
            <Box className="auth_middle">
              <Typography variant="h1" className="title">
                {title}
              </Typography>
              <Typography className="subtitle">{subtitle}</Typography>
              <Box className="auth_box">{children}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </AuthWrapperStyled>
  );
};

export default AuthWrapper;
