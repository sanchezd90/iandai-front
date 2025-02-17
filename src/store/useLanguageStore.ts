import { create } from 'zustand';
import i18n from '@/i18n/i18n';

interface LanguageState {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  currentLanguage: 'en',
  setLanguage: (lang) => {
    i18n.changeLanguage(lang).catch((err) => console.error('Language change error:', err));
    set({ currentLanguage: lang });
  },
}));