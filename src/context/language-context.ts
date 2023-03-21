import React from 'react';
type ILanguage = { 
    language: "es" | "en",
    toggleLanguage: any,
};
export const LanguageContext = React.createContext<Partial<ILanguage>>({});