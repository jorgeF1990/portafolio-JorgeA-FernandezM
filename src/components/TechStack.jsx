import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './TechStack.module.css';

const TechStack = () => {
  const { language } = useLanguage();

  const technologies = [
    // 1. Cloud & DevOps (De DataBox, Certificaciones y Actitud)
    { icon: 'fab fa-aws', name: 'AWS' },
    { icon: 'fab fa-microsoft', name: 'Azure' },
    { icon: 'fab fa-docker', name: 'Docker' },
    { icon: 'fas fa-cloud', name: 'Kubernetes' },
    { icon: 'fab fa-redhat', name: 'OpenShift' },
    { icon: 'fas fa-code-branch', name: 'CI/CD (GitLab)' },
    { icon: 'fas fa-shield-alt', name: 'SonarQube' },
    { icon: 'fas fa-cogs', name: 'Ansible' },
    { icon: 'fas fa-server', name: 'Proxmox' },
    { icon: 'fab fa-linux', name: 'Linux' },
    
    // 2. Backend & Arquitectura (DataBox, TareaSync, Inventario, Actitud, Feria)
    { icon: 'fas fa-code', name: '.NET 8' },
    { icon: 'fas fa-code', name: 'C#' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fas fa-bolt', name: 'FastAPI' },
    { icon: 'fab fa-java', name: 'Java' },
    { icon: 'fas fa-stream', name: 'Apache Kafka' },
    { icon: 'fas fa-network-wired', name: 'YARP API Gateway' },
    { icon: 'fas fa-database', name: 'Entity Framework' },
    { icon: 'fas fa-cubes', name: 'Microservicios' },
    
    // 3. Frontend (TareaSync, Seguro, Inventario, Actitud, Feria, DataBox)
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-angular', name: 'Angular 17' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fab fa-typescript', name: 'TypeScript' },
    { icon: 'fab fa-html5', name: 'HTML5' },
    { icon: 'fab fa-css3-alt', name: 'CSS3' },
    { icon: 'fab fa-bootstrap', name: 'Bootstrap' },
    { icon: 'fas fa-wind', name: 'Tailwind CSS' },
    { icon: 'fas fa-layer-group', name: 'Material-UI' },
    
    // 4. Bases de Datos (DataBox, TareaSync, Inventario, Actitud, Feria)
    { icon: 'fas fa-database', name: 'PostgreSQL' },
    { icon: 'fas fa-database', name: 'MongoDB' },
    { icon: 'fas fa-database', name: 'SQL Server' },
    { icon: 'fas fa-database', name: 'MySQL' },
    { icon: 'fas fa-fire', name: 'Firebase' },
    { icon: 'fas fa-bolt', name: 'Redis' },
    
    // 5. Testing, Seguridad & Autenticación (DataBox, TareaSync, Actitud, Feria, Inventario)
    { icon: 'fas fa-vial', name: 'Unit Testing (xUnit)' },
    { icon: 'fas fa-check-double', name: 'Integration Testing' },
    { icon: 'fas fa-shield-halved', name: 'JWT / OAuth 2.0' },
    { icon: 'fas fa-key', name: 'Okta' },
    { icon: 'fas fa-user-secret', name: 'Secret Detection' },
    
    // 6. Herramientas, CMS & Otros (Feria, Actitud, Certificaciones)
    { icon: 'fas fa-cloud-upload-alt', name: 'Cloudinary' },
    { icon: 'fab fa-paypal', name: 'PayPal SDK' },
    { icon: 'fab fa-wordpress', name: 'WordPress' },
    { icon: 'fas fa-envelope', name: 'Nodemailer' },
    { icon: 'fas fa-tasks', name: 'Scrum / Kanban' },
    { icon: 'fas fa-code-branch', name: 'Git' }
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