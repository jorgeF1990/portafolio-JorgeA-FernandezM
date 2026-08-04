import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Cambiar 'default' por 'dark' para que el modo oscuro sea el principal
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    // Si no hay tema guardado, usar 'dark' como predeterminado
    return saved || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Solo 2 temas
  const themes = {
    default: {
      name: 'Azul Profesional',
      nameEn: 'Professional Blue',
      swatches: ['#2563eb', '#0ea5e9', '#8b5cf6', '#f0f4f8']
    },
    dark: {
      name: 'Modo Oscuro',
      nameEn: 'Dark Mode',
      swatches: ['#60a5fa', '#38bdf8', '#a78bfa', '#0f172a']
    }
  };

  const value = {
    theme,
    setTheme,
    themes
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};