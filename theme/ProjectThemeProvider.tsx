import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useMemo } from 'react';
import CommonStyling from './_commonStyle';
import { ThemeStyleOptions } from './_projectTheme';

const ProjectThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useMemo(() => {
    return createTheme(ThemeStyleOptions('light'));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => CommonStyling(theme)} />
      {children}
    </ThemeProvider>
  );
};

export default ProjectThemeProvider;
