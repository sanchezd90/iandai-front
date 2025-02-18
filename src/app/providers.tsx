"use client";

import React from 'react';
import { ReactQueryProvider } from './react-query-provider'; 
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { I18nProvider } from './i18n-provider';
import theme from './theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
            <I18nProvider>  
            {children}
            </I18nProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}