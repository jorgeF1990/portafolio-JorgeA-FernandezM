import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Education.module.css';

const Education = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      tag: 'Formación',
      title: 'Educación',
      items: [
        { degree: 'Professional Full-Stack Developer', institution: 'UTN (Arg) · 2025' },
        { degree: 'Systems Analysis', institution: 'ORT (Arg) · 50%' }
      ]
    },
    en: {
      tag: 'Education',
      title: 'Education',
      items: [
        { degree: 'Professional Full-Stack Developer', institution: 'UTN (Arg) · 2025' },
        { degree: 'Systems Analysis', institution: 'ORT (Arg) · 50%' }
      ]
    }
  };

  const data = content[language];

  return (
    <section className={styles.education} id="education">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>{data.tag}</span>
        <h2>{data.title}</h2>
      </div>
      <div className={styles.educationBox}>
        {data.items.map((item, index) => (
          <div key={index} className={styles.eduItem}>
            <strong>{item.degree}</strong> <span className={styles.eduMeta}>— {item.institution}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;