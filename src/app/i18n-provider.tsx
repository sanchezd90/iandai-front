"use client";

import React, { createContext, useState, useContext } from 'react';
import i18n from '@/i18n/i18n';
import { I18nextProvider } from 'react-i18next';

const LanguageContext = createContext({
  currentLanguage: 'en',  
  setLanguage: (lang: string) => {
    void lang
  },
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </LanguageContext.Provider>
  );
}