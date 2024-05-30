import React, { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [theme, setTheme] = useState('light');

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        // Update body background color based on dark mode state
        document.body.style.backgroundColor = isDarkMode ? '#000000' : '#ffffff';
        // Update html background color based on dark mode state
        document.documentElement.style.backgroundColor = isDarkMode ? '#000000' : '#ffffff';
    }, [isDarkMode]);

    const switchTheme = (selectedTheme) => {
        setTheme(selectedTheme);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, theme, switchTheme }}>
            {children}
        </DarkModeContext.Provider>
    );
};
