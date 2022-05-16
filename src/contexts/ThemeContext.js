import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    

    const [theme, setTheme] = useState({
        isLightTheme: true,
        light: { color: 'hsl(218, 23%, 16%)', ui: '#ddd', bg: '#eee' },
        dark: { color: '#ddd', ui: 'hsl(222, 19%, 14%)', bg: '#555'}
    })

    function toggleTheme() {
        let isLightTheme = theme.isLightTheme;
        setTheme(prevTheme => ({
            ...prevTheme,
            isLightTheme: !isLightTheme
            
        })
        )
    }

  return (
    <ThemeContext.Provider value={{...theme, toggleTheme: toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;