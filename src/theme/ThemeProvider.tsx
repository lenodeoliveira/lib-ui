import React, { useMemo, useState, createContext, useContext } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { BaseTheme } from './baseTheme';
import type { ThemeDefinition } from './type';

const ThemeContext = createContext<{
    theme: ThemeDefinition;
    setTheme: React.Dispatch<React.SetStateAction<ThemeDefinition>>;
} | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(BaseTheme);
    const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

    return (
        <ThemeContext.Provider value={value}>
            <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context.theme;
};