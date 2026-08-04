import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const { theme, setTheme, themes } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const navItems = [
    { id: 'home', label: { es: 'Home', en: 'Home' } },
    { id: 'services', label: { es: 'Servicios', en: 'Services' } },
    { id: 'projects', label: { es: 'Portafolio', en: 'Portfolio' } },
    { id: 'certifications', label: { es: 'Certificaciones', en: 'Certifications' } },
    { id: 'contact', label: { es: 'Contacto', en: 'Contact' } },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Orden: Modo Oscuro primero, Azul Profesional después
  const themeOptions = [
    { key: 'dark', label: { es: 'Modo Oscuro', en: 'Dark Mode' } },
    { key: 'default', label: { es: 'Azul Profesional', en: 'Professional Blue' } },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a href="#home" className={styles.logo} onClick={(e) => handleScroll(e, 'home')}>
          <span className={styles.logoIcon}>
            <i className="fas fa-code"></i>
          </span>
          <span className={styles.logoText}>
            Jorge<span className={styles.highlight}>Fernández</span>
          </span>
        </a>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  className={styles.navLink}
                >
                  {item.label[language]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.headerActions}>
          <div className={styles.themeToggleWrapper}>
            <button
              className={styles.themeToggleBtn}
              onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
              aria-label="Cambiar tema"
            >
              <i className="fas fa-paint-roller"></i>
              <span>{language === 'es' ? 'Temas' : 'Themes'}</span>
              <i className={`fas fa-chevron-down ${styles.chevron} ${isThemeDropdownOpen ? styles.chevronOpen : ''}`}></i>
            </button>
            {isThemeDropdownOpen && (
              <div className={styles.themeDropdown}>
                {themeOptions.map((option) => (
                  <button
                    key={option.key}
                    className={`${styles.themeOption} ${theme === option.key ? styles.active : ''}`}
                    onClick={() => {
                      setTheme(option.key);
                      setIsThemeDropdownOpen(false);
                    }}
                  >
                    <span className={styles.colorSwatch}>
                      <span className={styles.miniSwatch}>
                        {themes[option.key]?.swatches.map((color, idx) => (
                          <span key={idx} style={{ background: color }}></span>
                        ))}
                      </span>
                    </span>
                    <span className={styles.themeName}>{option.label[language]}</span>
                    <span className={styles.checkMark}>
                      <i className="fas fa-check"></i>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className={styles.langToggleBtn}
            onClick={toggleLanguage}
            aria-label="Cambiar idioma"
          >
            <i className="fas fa-globe"></i>
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;