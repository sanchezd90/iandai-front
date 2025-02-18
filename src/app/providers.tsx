"use client";

import React from 'react';
import { ReactQueryProvider } from './react-query-provider'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { I18nProvider } from './i18n-provider';

const theme = createTheme({});

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