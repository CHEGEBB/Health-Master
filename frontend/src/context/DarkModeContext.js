import React, { createContext, useState, useContext } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [theme, setTheme] = useState('light');

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const switchTheme = (selectedTheme) => {
        setTheme(selectedTheme);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, theme, switchTheme }}>
            {children}
        </DarkModeContext.Provider>
    );
};