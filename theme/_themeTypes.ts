declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      dark: string;
      main: string;
      light: string;
      bodyBg: string;
      trackBg: string;
      avatarBg: string;
      darkPaperBg: string;
      lightPaperBg: string;
      tableHeaderBg: string;
      placeText: string;
      white10: string;
      white11: string;
      textSecondary: string;
      white20: string;
      white30: string;
      color002F06?: string;
      colorB5B5B5?: string;
      color7C7C7C?: string;
      colorC3C3C3?: string;
      colorE1E1E1?: string;
      color6B6B6B?: string;
      color1D1D1D?: string;
      color7FC343?: string;
      sidebarBg?: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      dark?: string;
      main?: string;
      light?: string;
      bodyBg?: string;
      trackBg?: string;
      avatarBg?: string;
      darkPaperBg?: string;
      lightPaperBg?: string;
      tableHeaderBg?: string;
    };
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    tonal: true;
  }
}

declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsVariantOverrides {
    tonal: true;
  }
}

export {};
