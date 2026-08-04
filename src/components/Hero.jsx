import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Hero.module.css';

const Hero = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      tag: 'Full Stack Developer · Systems Analyst',
      title: 'Jorge Fernández',
      description: 'Estudiante avanzado de Análisis de Sistemas con amplia experiencia en el desarrollo Full Stack. Especializado en la creación de aplicaciones web y móviles escalables.',
      btnPortfolio: 'Ver portafolio',
      btnContact: 'Contactar',
      badge: 'Full Stack · Frontend + Backend',
      stats: [
        { number: '3+', label: 'Años de experiencia' },
        { number: '5', label: 'Proyectos' },
        { number: '10+', label: 'APIs' },
      ]
    },
    en: {
      tag: 'Full Stack Developer · Systems Analyst',
      title: 'Jorge Fernández',
      description: 'Advanced Systems Analysis student with extensive experience in Full Stack development. Specialized in building scalable web and mobile applications.',
      btnPortfolio: 'View portfolio',
      btnContact: 'Contact',
      badge: 'Full Stack · Frontend + Backend',
      stats: [
        { number: '3+', label: 'Years experience' },
        { number: '5', label: 'Projects' },
        { number: '10+', label: 'APIs' },
      ]
    }
  };

  const data = content[language];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <span className={styles.heroTag}>{data.tag}</span>
        <h1>{data.title}</h1>
        <p className={styles.heroDescription}>{data.description}</p>
        <div className={styles.heroActions}>
          <a
            href="#projects"
            className={styles.btnPrimary}
            onClick={(e) => handleScroll(e, 'projects')}
          >
            <i className="fas fa-folder-open"></i> {data.btnPortfolio}
          </a>
          <a
            href="#contact"
            className={styles.btnSecondary}
            onClick={(e) => handleScroll(e, 'contact')}
          >
            <i className="fas fa-envelope"></i> {data.btnContact}
          </a>
        </div>
        <div className={styles.heroSocial}>
          <a href="https://github.com/jorgeF1990" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/jorge-fern%C3%A1ndez-montaner-50115412b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:jorgesfb29@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.heroBadgeLarge}>
          <i className="fas fa-code"></i>
          <span>Full Stack</span>
        </div>
        <div className={styles.heroStats}>
          {data.stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;