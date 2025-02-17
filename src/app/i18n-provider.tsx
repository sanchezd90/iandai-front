"use client";

import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/i18n';
import { useLanguageStore } from '@/store/useLanguageStore';

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {  
  useLanguageStore((state) => state.currentLanguage);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}