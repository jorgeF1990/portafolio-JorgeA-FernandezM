import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './TechStack.module.css';

const TechStack = () => {
  const { language } = useLanguage();

  const technologies = [
    { icon: 'fab fa-java', name: 'Java' },
    { icon: 'fas fa-code', name: 'C#' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fab fa-typescript', name: 'TypeScript' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-angular', name: 'Angular' },
    { icon: 'fas fa-database', name: 'MongoDB' },
    { icon: 'fas fa-database', name: 'MySQL' },
    { icon: 'fas fa-database', name: 'PostgreSQL' },
    { icon: 'fas fa-fire', name: 'Firebase' },
    { icon: 'fas fa-code-branch', name: 'Git' },
    { icon: 'fab fa-gitlab', name: 'GitLab CI' },
    { icon: 'fab fa-linux', name: 'Linux' },
    { icon: 'fab fa-docker', name: 'Docker' },
    { icon: 'fas fa-cloud', name: 'Kubernetes' },
    { icon: 'fas fa-stream', name: 'Kafka' },
    { icon: 'fas fa-palette', name: 'Bootstrap / Bulma' },
    { icon: 'fas fa-tasks', name: 'Scrum / Kanban' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fas fa-cogs', name: 'Ansible' },
    { icon: 'fab fa-wordpress', name: 'WordPress' },
  ];

  return (
    <section className={styles.techStack} id="tech">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>
          {language === 'es' ? 'Tecnologías' : 'Technologies'}
        </span>
        <h2>{language === 'es' ? 'Tech Stack' : 'Tech Stack'}</h2>
      </div>
      <div className={styles.skillsGrid}>
        {technologies.map((tech, index) => (
          <span key={index} className={styles.skillItem}>
            <i className={tech.icon}></i> {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechStack;