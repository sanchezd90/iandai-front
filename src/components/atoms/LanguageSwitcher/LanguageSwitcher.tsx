"use client";

import React from 'react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Button } from '@mui/material';

export default function LanguageSwitcher() {
  const currentLanguage = useLanguageStore((state) => state.currentLanguage);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const toggleLanguage = () => {
    setLanguage(currentLanguage === 'en' ? 'es' : 'en');
  };

  return (
    <Button onClick={toggleLanguage}>
      {currentLanguage === 'en' ? 'Switch to Spanish' : 'Switch to English'}
    </Button>
  );
}