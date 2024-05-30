import React, { createContext, useState, useContext } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [theme, setTheme] = useState('light');
    const [bodyColor, setBodyColor] = useState('#ffffff'); // Default background color

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        // Toggle body background color
        setBodyColor(prevColor => prevColor === '#ffffff' ? '#000000' : '#ffffff');
    };

    const switchTheme = (selectedTheme) => {
        setTheme(selectedTheme);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, theme, switchTheme }}>
            <div style={{ backgroundColor: bodyColor }}>{children}</div>
        </DarkModeContext.Provider>
    );
};
