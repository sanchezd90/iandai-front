// components/atoms/LanguageSwitcher/LanguageSwitcher.tsx
"use client";

import React from 'react';
import { useLanguage } from '@/app/i18n-provider';
import { Button } from '@mui/material';

export default function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(currentLanguage === 'en' ? 'es' : 'en');
  };

  return (
    <Button onClick={toggleLanguage}>
      {currentLanguage === 'en' ? 'Switch to Spanish' : 'Switch to English'}
    </Button>
  );
}