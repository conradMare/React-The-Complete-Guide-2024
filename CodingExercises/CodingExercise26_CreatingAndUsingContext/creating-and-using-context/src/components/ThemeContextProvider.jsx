import { createContext, useState } from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
});

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            return prevTheme === 'light' ? 'dark' : 'light';
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}