import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './TechStack.module.css';

const TechStack = () => {
  const { language } = useLanguage();

  const technologies = [
    // Cloud & DevOps (Nuevas Certificaciones y Pipeline)
    { icon: 'fab fa-aws', name: 'AWS' },
    { icon: 'fab fa-microsoft', name: 'Azure' },
    { icon: 'fab fa-docker', name: 'Docker' },
    { icon: 'fas fa-cloud', name: 'Kubernetes' },
    { icon: 'fab fa-redhat', name: 'OpenShift' },
    { icon: 'fas fa-code-branch', name: 'CI/CD (GitLab)' },
    { icon: 'fas fa-shield-alt', name: 'SonarQube' },
    { icon: 'fas fa-cogs', name: 'Ansible' },
    
    // Backend & Arquitectura
    { icon: 'fas fa-code', name: '.NET 8' },
    { icon: 'fas fa-code', name: 'C#' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fas fa-stream', name: 'Apache Kafka' },
    { icon: 'fas fa-network-wired', name: 'YARP API Gateway' },
    { icon: 'fas fa-database', name: 'Entity Framework' },
    
    // Testing & Seguridad
    { icon: 'fas fa-vial', name: 'xUnit (Unit Testing)' },
    { icon: 'fas fa-check-double', name: 'Integration Testing' },
    { icon: 'fas fa-shield-halved', name: 'Okta (OAuth 2.0)' },
    
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
    
    // Otros Lenguajes & Herramientas
    { icon: 'fab fa-java', name: 'Java' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fab fa-linux', name: 'Linux' },
    { icon: 'fas fa-server', name: 'Proxmox' },
    { icon: 'fas fa-fire', name: 'Firebase' },
    { icon: 'fab fa-wordpress', name: 'WordPress' },
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
          <span key={index} className={styles.skillItem} style={{ '--i': index + 1 }}>
            <i className={tech.icon}></i> {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechStack;