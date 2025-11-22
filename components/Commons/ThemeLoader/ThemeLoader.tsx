import assets from '@/resources/assets';
import { PageLoaderWrapper } from '@/styles/CustomStyled/PageLoaderWrapper';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface ThemePageProps {
  title?: string;
  description?: string;
  status?: string;
}

export default function ThemeLoader({ title, description, status }: ThemePageProps) {
  return (
    <PageLoaderWrapper>
      <Box className="mainPageLoader_wrapper">
        <Box className="wrapper_logoWrap">
          <Box className="spinner-box">
            <Box className="circle-border">
              <Box className="circle-core"></Box>
            </Box>
          </Box>
          <figure>
            <Image src={assets.webLogo} alt="logo" width={160} height={160} priority />
          </figure>
        </Box>
        {(title || description) && (
          <Box className="loader_textWrap">
            {title && (
              <Typography
                variant="h5"
                className={status ? `${status} loader_title` : 'loader_title'}
              >
                {title}
              </Typography>
            )}
            {description && (
              <Typography variant="body2" className="loader_description">
                {description}
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </PageLoaderWrapper>
  );
}
