import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Services.module.css';

const Services = () => {
  const { language } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);

  const content = {
    es: {
      tag: 'Lo que hago',
      title: 'Servicios',
      desc: 'Soluciones end-to-end, desde el desarrollo hasta el despliegue en la nube',
      items: [
        {
          id: 'web',
          icon: 'fa-solid fa-laptop-code',
          title: 'Desarrollo Full Stack',
          description: 'Aplicaciones web modernas, responsivas y escalables con las últimas tecnologías.',
          details: 'Creo aplicaciones web a medida (frontend y backend) utilizando React, Angular, Node.js y .NET 8. Me enfoco en la experiencia de usuario, la seguridad (JWT/OAuth) y la integración con APIs en tiempo real.',
          technologies: ['React', 'Angular 17', '.NET 8', 'Node.js', 'TypeScript', 'Tailwind CSS']
        },
        {
          id: 'backend',
          icon: 'fa-solid fa-server',
          title: 'Microservicios & APIs',
          description: 'Arquitecturas robustas, eventos en tiempo real y microservicios escalables.',
          details: 'Diseño e implemento arquitecturas basadas en microservicios utilizando .NET 8, Apache Kafka y YARP API Gateway. Experto en mensajería asíncrona y comunicación en tiempo real mediante SSE.',
          technologies: ['Microservicios', '.NET 8', 'Apache Kafka', 'YARP', 'Node.js', 'Python', 'SSE']
        },
        {
          id: 'devops',
          icon: 'fa-solid fa-infinity', // Icono de DevOps
          title: 'DevOps & Cloud',
          description: 'Automatización de despliegues, CI/CD y orquestación de contenedores.',
          details: 'Implemento pipelines de CI/CD automatizados (GitLab CI) con análisis estático (SonarQube) y pruebas de calidad. Gestiono contenedores con Docker y OpenShift/Kubernetes, y despliego infraestructura en Azure y AWS.',
          technologies: ['Docker', 'Kubernetes', 'OpenShift', 'Azure', 'AWS', 'GitLab CI/CD', 'SonarQube', 'Ansible']
        },
        {
          id: 'data',
          icon: 'fa-solid fa-database',
          title: 'Gestión de Datos',
          description: 'Diseño y optimización de bases de datos SQL y NoSQL para alto rendimiento.',
          details: 'Optimizo y diseño bases de datos relacionales y no relacionales (PostgreSQL, MongoDB, SQL Server) para garantizar alto rendimiento, integridad de datos y escalabilidad en entornos de alta concurrencia.',
          technologies: ['PostgreSQL', 'MongoDB', 'SQL Server', 'MySQL', 'Entity Framework', 'Redis']
        }
      ]
    },
    en: {
      tag: 'What I do',
      title: 'Services',
      desc: 'End-to-end solutions, from development to cloud deployment',
      items: [
        {
          id: 'web',
          icon: 'fa-solid fa-laptop-code',
          title: 'Full Stack Development',
          description: 'Modern, responsive and scalable web applications with the latest technologies.',
          details: 'I build custom web applications (frontend and backend) using React, Angular, Node.js, and .NET 8. I focus on user experience, security (JWT/OAuth), and integration with real-time APIs.',
          technologies: ['React', 'Angular 17', '.NET 8', 'Node.js', 'TypeScript', 'Tailwind CSS']
        },
        {
          id: 'backend',
          icon: 'fa-solid fa-server',
          title: 'Microservices & APIs',
          description: 'Robust architectures, real-time events and scalable microservices.',
          details: 'I design and implement microservices-based architectures using .NET 8, Apache Kafka, and YARP API Gateway. Expert in asynchronous messaging and real-time communication via SSE.',
          technologies: ['Microservices', '.NET 8', 'Apache Kafka', 'YARP', 'Node.js', 'Python', 'SSE']
        },
        {
          id: 'devops',
          icon: 'fa-solid fa-infinity',
          title: 'DevOps & Cloud',
          description: 'Deployment automation, CI/CD and container orchestration.',
          details: 'I implement automated CI/CD pipelines (GitLab CI) with static analysis (SonarQube) and quality testing. I manage containers with Docker and OpenShift/Kubernetes, and deploy infrastructure on Azure and AWS.',
          technologies: ['Docker', 'Kubernetes', 'OpenShift', 'Azure', 'AWS', 'GitLab CI/CD', 'SonarQube', 'Ansible']
        },
        {
          id: 'data',
          icon: 'fa-solid fa-database',
          title: 'Data Management',
          description: 'Design and optimization of SQL and NoSQL databases for high performance.',
          details: 'I optimize and design relational and non-relational databases (PostgreSQL, MongoDB, SQL Server) to ensure high performance, data integrity, and scalability in high-concurrency environments.',
          technologies: ['PostgreSQL', 'MongoDB', 'SQL Server', 'MySQL', 'Entity Framework', 'Redis']
        }
      ]
    }
  };

  const data = content[language];

  const handleLearnMore = (serviceId) => {
    const service = data.items.find(item => item.id === serviceId);
    if (service) {
      setSelectedService(service);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className={styles.services} id="services">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>{data.tag}</span>
          <h2>{data.title}</h2>
          <p className={styles.sectionDesc}>{data.desc}</p>
        </div>
        <div className={styles.servicesGrid}>
          {data.items.map((item) => (
            <div key={item.id} className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <i className={item.icon}></i>
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <button
                className={styles.serviceLink}
                onClick={() => handleLearnMore(item.id)}
              >
                <span>{language === 'es' ? 'Saber más' : 'Learn more'}</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal de Servicio */}
      {selectedService && (
        <div className={styles.serviceModalOverlay} onClick={closeModal}>
          <div className={styles.serviceModalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.serviceModalClose} onClick={closeModal}>&times;</button>
            <div className={styles.serviceModalIcon}>
              <i className={selectedService.icon}></i>
            </div>
            <h3>{selectedService.title}</h3>
            <p className={styles.serviceModalDescription}>{selectedService.details}</p>
            <div className={styles.serviceModalTechs}>
              <span className={styles.serviceModalTechLabel}>
                {language === 'es' ? 'Tecnologías' : 'Technologies'}
              </span>
              <div className={styles.serviceModalTechTags}>
                {selectedService.technologies.map((tech, idx) => (
                  <span key={idx} className={styles.serviceModalTechTag}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;