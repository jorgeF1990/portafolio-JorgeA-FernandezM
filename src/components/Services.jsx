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
      desc: 'Soluciones end-to-end: desarrollo, arquitectura, DevOps y cloud',
      items: [
        {
          id: 'web',
          icon: 'fa-solid fa-laptop-code',
          title: 'Desarrollo Full Stack',
          description: 'Aplicaciones web modernas, responsivas y escalables de punta a punta.',
          details: 'Desarrollo aplicaciones completas utilizando React, Angular 17, Node.js y .NET 8. Me enfoco en la experiencia de usuario, el rendimiento y la integración de APIs RESTful, bases de datos SQL/NoSQL y servicios de terceros (Cloudinary, PayPal, Nodemailer).',
          technologies: ['React', 'Angular 17', '.NET 8', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Material-UI']
        },
        {
          id: 'backend',
          icon: 'fa-solid fa-server',
          title: 'Backend & Microservicios',
          description: 'Arquitecturas robustas, APIs RESTful, eventos en tiempo real y microservicios.',
          details: 'Diseño e implemento APIs RESTful, microservicios y arquitecturas backend escalables con .NET 8, Node.js, Python y FastAPI. Experto en mensajería asíncrona (Apache Kafka), API Gateways (YARP) y comunicación en tiempo real (SSE).',
          technologies: ['.NET 8', 'C#', 'Node.js', 'Python', 'FastAPI', 'Apache Kafka', 'YARP', 'SSE']
        },
        {
          id: 'devops',
          icon: 'fa-solid fa-infinity',
          title: 'DevOps & Cloud',
          description: 'Automatización de despliegues, CI/CD y orquestación de contenedores.',
          details: 'Implemento pipelines de CI/CD (GitLab CI) con análisis estático (SonarQube), detección de secretos y pruebas automatizadas (unitarias/integración). Gestiono contenedores con Docker y OpenShift/Kubernetes, y despliego infraestructura y aplicaciones en Azure, AWS, Vercel y Render.',
          technologies: ['Docker', 'Kubernetes', 'OpenShift', 'Azure', 'AWS', 'Vercel', 'Render', 'GitLab CI/CD', 'SonarQube', 'Ansible']
        },
        {
          id: 'data',
          icon: 'fa-solid fa-database',
          title: 'Gestión de Datos',
          description: 'Diseño y optimización de bases de datos SQL y NoSQL para alto rendimiento.',
          details: 'Optimizo y diseño bases de datos relacionales y no relacionales (PostgreSQL, MongoDB, SQL Server, MySQL, Firebase, Redis) para garantizar alto rendimiento, integridad de datos y escalabilidad en entornos de alta concurrencia.',
          technologies: ['PostgreSQL', 'MongoDB', 'SQL Server', 'MySQL', 'Redis', 'Firebase', 'Entity Framework']
        }
      ]
    },
    en: {
      tag: 'What I do',
      title: 'Services',
      desc: 'End-to-end solutions: development, architecture, DevOps and cloud',
      items: [
        {
          id: 'web',
          icon: 'fa-solid fa-laptop-code',
          title: 'Full Stack Development',
          description: 'Modern, responsive and scalable web applications from start to finish.',
          details: 'I build complete applications using React, Angular 17, Node.js, and .NET 8. I focus on user experience, performance, and integration with RESTful APIs, SQL/NoSQL databases, and third-party services (Cloudinary, PayPal, Nodemailer).',
          technologies: ['React', 'Angular 17', '.NET 8', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Material-UI']
        },
        {
          id: 'backend',
          icon: 'fa-solid fa-server',
          title: 'Backend & Microservices',
          description: 'Robust architectures, RESTful APIs, real-time events and microservices.',
          details: 'I design and implement RESTful APIs, microservices, and scalable backend architectures with .NET 8, Node.js, Python, and FastAPI. Expert in asynchronous messaging (Apache Kafka), API Gateways (YARP), and real-time communication (SSE).',
          technologies: ['.NET 8', 'C#', 'Node.js', 'Python', 'FastAPI', 'Apache Kafka', 'YARP', 'SSE']
        },
        {
          id: 'devops',
          icon: 'fa-solid fa-infinity',
          title: 'DevOps & Cloud',
          description: 'Deployment automation, CI/CD and container orchestration.',
          details: 'I implement CI/CD pipelines (GitLab CI) with static analysis (SonarQube), secret detection, and automated testing (unit/integration). I manage containers with Docker and OpenShift/Kubernetes, and deploy infrastructure and applications on Azure, AWS, Vercel, and Render.',
          technologies: ['Docker', 'Kubernetes', 'OpenShift', 'Azure', 'AWS', 'Vercel', 'Render', 'GitLab CI/CD', 'SonarQube', 'Ansible']
        },
        {
          id: 'data',
          icon: 'fa-solid fa-database',
          title: 'Data Management',
          description: 'Design and optimization of SQL and NoSQL databases for high performance.',
          details: 'I optimize and design relational and non-relational databases (PostgreSQL, MongoDB, SQL Server, MySQL, Firebase, Redis) to ensure high performance, data integrity, and scalability in high-concurrency environments.',
          technologies: ['PostgreSQL', 'MongoDB', 'SQL Server', 'MySQL', 'Redis', 'Firebase', 'Entity Framework']
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