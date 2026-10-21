import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Certifications.module.css';

const Certifications = () => {
  const { language } = useLanguage();

  const certifications = [
    {
      icon: 'fas fa-award',
      name: 'Professional Full-Stack Developer',
      meta: ['UTN · 2025', '195 hs', 'Blockchain'],
      link: 'https://validator.centrodeelearning.com/validator/bd92d852-2d12-4756-93f6-6caa075293e6'
    },
    {
      icon: 'fas fa-database',
      name: 'Bases de Datos',
      meta: ['UTN · 2025', '96 hs', 'Excelente'],
      link: 'https://validator.centrodeelearning.com/validator/4f8c5abd-8045-46d5-9138-3c4eb12b18ad'
    },
    {
      icon: 'fab fa-node-js',
      name: 'Desarrollo con NodeJS',
      meta: ['UTN · 2025', '45 hs', 'Excelente'],
      link: 'https://validator.centrodeelearning.com/validator/bd875d48-9186-4635-ac5a-836fb234d6fa'
    },
    {
      icon: 'fab fa-react',
      name: 'Desarrollo en React JS',
      meta: ['UTN · 2025', '105 hs', 'Excelente'],
      link: 'https://validator.centrodeelearning.com/validator/4ba9cf10-ed2b-4c66-b137-50c434a423e9'
    },
    {
      icon: 'fab fa-angular',
      name: 'Desarrollo con Angular',
      meta: ['UTN · 2025', '45 hs', 'Excelente'],
      link: 'https://validator.centrodeelearning.com/validator/b5e6fa81-ccdf-479f-84a7-abe643b0682f'
    },
    {
      icon: 'fab fa-java',
      name: 'Java Programming',
      meta: ['2025', 'Politécnico'],
      link: 'https://politecnicodecolombia.edu.co/contable/app/certificados/pages/certificado.php?Id=wmgrkRa6XBMvZpGjeJzK'
    },
    {
      icon: 'fab fa-python',
      name: 'Python',
      meta: ['8 horas', '2025'],
      link: 'https://drive.google.com/file/d/1o36sXga8S98vdVv28yqdiA8AySWcTnoC/view?usp=sharing'
    },
    {
      icon: 'fas fa-brain',
      name: 'Claude 101',
      meta: ['Anthropic Education · 2026', 'Certificación'],
      link: 'https://verify.skilljar.com/c/vwahg9ju2584'
    }
  ];

  const content = {
    es: {
      tag: 'Certificaciones',
      title: 'Certificaciones'
    },
    en: {
      tag: 'Certifications',
      title: 'Certifications'
    }
  };

  const data = content[language];

  return (
    <section className={styles.certifications} id="certifications">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>{data.tag}</span>
        <h2>{data.title}</h2>
      </div>
      <div className={styles.certGrid}>
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.certItem}
          >
            <i className={cert.icon}></i>
            <div className={styles.certInfo}>
              <div className={styles.certName}>{cert.name}</div>
              <div className={styles.certMeta}>
                {cert.meta.map((item, idx) => (
                  <span key={idx} className={styles.badge}>{item}</span>
                ))}
              </div>
            </div>
            <i className="fas fa-external-link-alt" style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}></i>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;