import React, { createContext, useContext, ReactNode } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// ✅ Define the theme
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    secondary: '#f5f5f5',
    text: '#fff',
    background: '#121212',
    button: '#333',
  },
};

// ✅ Create Theme Context
export const ThemeContext = createContext(theme);

// ✅ Custom hook for accessing the theme
export const useTheme = () => useContext(ThemeContext);

// ✅ Define Props for the ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

// ✅ ThemeProvider Component (Ensure this is only declared once)
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};

// ✅ Ensure we only export it once
export { ThemeProvider, theme };
