import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './TechStack.module.css';

const TechStack = () => {
  const { language } = useLanguage();

  const technologies = [
    // Backend & Arquitectura
    { icon: 'fas fa-code', name: '.NET 8' },
    { icon: 'fas fa-code', name: 'C#' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fas fa-stream', name: 'Apache Kafka' },
    { icon: 'fas fa-network-wired', name: 'YARP' },
    { icon: 'fas fa-database', name: 'Entity Framework' },
    { icon: 'fas fa-cubes', name: 'Microservicios' },
    
    // Frontend
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-angular', name: 'Angular 17' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fab fa-typescript', name: 'TypeScript' },
    
    // Bases de Datos
    { icon: 'fas fa-database', name: 'PostgreSQL' },
    { icon: 'fas fa-database', name: 'MongoDB' },
    { icon: 'fas fa-database', name: 'SQL Server' },
    { icon: 'fas fa-database', name: 'MySQL' },
    
    // DevOps, Cloud & Infraestructura
    { icon: 'fab fa-docker', name: 'Docker' },
    { icon: 'fas fa-cloud', name: 'Kubernetes' },
    { icon: 'fab fa-gitlab', name: 'GitLab CI/CD' },
    { icon: 'fas fa-cogs', name: 'Ansible' },
    { icon: 'fab fa-linux', name: 'Linux' },
    { icon: 'fas fa-server', name: 'Proxmox' },
    { icon: 'fas fa-code-branch', name: 'Git' },
    
    // Seguridad & Testing
    { icon: 'fas fa-shield-halved', name: 'Okta (OAuth 2.0)' },
    { icon: 'fas fa-vial', name: 'xUnit' },
    { icon: 'fas fa-file-code', name: 'Serilog' },
    { icon: 'fas fa-bolt', name: 'SSE' },
    
    // Otros Lenguajes & Herramientas
    { icon: 'fab fa-java', name: 'Java' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fas fa-fire', name: 'Firebase' },
    { icon: 'fab fa-wordpress', name: 'WordPress' },
    { icon: 'fas fa-palette', name: 'Bootstrap / Bulma' },
    { icon: 'fas fa-tasks', name: 'Scrum / Kanban' }
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