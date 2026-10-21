import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Footer.module.css';

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      description: 'DevOps Semi-Senior y Full Stack Developer especializado en arquitecturas escalables y microservicios.',
      nav: 'Navegación',
      resources: 'Recursos',
      privacy: 'Política de Privacidad',
      terms: 'Términos',
      role: 'DevOps & Full Stack Developer'
    },
    en: {
      description: 'Semi-Senior DevOps & Full Stack Developer specialized in scalable architectures and microservices.',
      nav: 'Navigation',
      resources: 'Resources',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      role: 'DevOps & Full Stack Developer'
    }
  };

  const data = content[language];

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
  };

  const handlePreventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>
              <i className="fas fa-code"></i>
            </span>
            <span className={styles.logoText}>
              Jorge<span className={styles.highlight}>Fernández</span>
            </span>
          </div>
          <p>{data.description}</p>
          <div className={styles.footerSocial}>
            <a href="https://github.com/jorgeF1990" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://gitlab.com/jorgeafm" target="_blank" rel="noopener noreferrer" aria-label="GitLab">
              <i className="fab fa-gitlab"></i>
            </a>
            <a href="https://www.linkedin.com/in/jorge-fern%C3%A1ndez-montaner-50115412b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:jorgesf29b@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className={styles.footerCol}>
          <h4>{data.nav}</h4>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={(e) => handleScroll(e, item.id)}>
                  {item.label[language]}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>{data.resources}</h4>
          <ul>
            <li><a href="https://github.com/jorgeF1990" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://gitlab.com/jorgeafm" target="_blank" rel="noopener noreferrer">GitLab</a></li>
            <li><a href="https://www.linkedin.com/in/jorge-fern%C3%A1ndez-montaner-50115412b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:jorgesf29b@gmail.com">Email</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>&copy; 2026 Jorge Fernández · {data.role}</span>
        <div className={styles.footerLegal}>
          <a href="#!" onClick={handlePreventDefault}>{data.privacy}</a>
          <a href="#!" onClick={handlePreventDefault}>{data.terms}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;