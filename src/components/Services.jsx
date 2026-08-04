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
      desc: 'Soluciones personalizadas para cada necesidad',
      items: [
        {
          id: 'web',
          icon: 'fa-solid fa-laptop-code',
          title: 'Desarrollo Web',
          description: 'Aplicaciones web modernas, responsivas y escalables con las últimas tecnologías.',
          details: 'Creo aplicaciones web a medida utilizando React, Angular, Node.js y otras tecnologías modernas. Me enfoco en la experiencia de usuario, rendimiento y escalabilidad.',
          technologies: ['React', 'Angular', 'Node.js', 'TypeScript', 'Tailwind CSS']
        },
        {
          id: 'backend',
          icon: 'fa-solid fa-server',
          title: 'Backend & APIs',
          description: 'Arquitecturas robustas, APIs RESTful y microservicios con Node.js, Java y más.',
          details: 'Diseño e implemento APIs RESTful, microservicios y arquitecturas backend escalables con Node.js, Java, Python y bases de datos SQL/NoSQL.',
          technologies: ['Node.js', 'Java', 'Python', 'MongoDB', 'MySQL', 'PostgreSQL']
        },
        {
          id: 'data',
          icon: 'fa-solid fa-database',
          title: 'Gestión de Datos',
          description: 'Diseño y optimización de bases de datos SQL y NoSQL para alto rendimiento.',
          details: 'Optimizo y diseño bases de datos relacionales y no relacionales para garantizar alto rendimiento, integridad de datos y escalabilidad.',
          technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase']
        },
        {
          id: 'consulting',
          icon: 'fa-solid fa-rocket',
          title: 'Consultoría IT',
          description: 'Asesoramiento en arquitectura, automatización y mejores prácticas de desarrollo.',
          details: 'Asesoro a equipos en arquitectura de software, automatización de procesos, integración continua y mejores prácticas de desarrollo ágil.',
          technologies: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'Scrum', 'Kanban']
        }
      ]
    },
    en: {
      tag: 'What I do',
      title: 'Services',
      desc: 'Custom solutions for every need',
      items: [
        {
          id: 'web',
          icon: 'fa-solid fa-laptop-code',
          title: 'Web Development',
          description: 'Modern, responsive and scalable web applications with the latest technologies.',
          details: 'I build custom web applications using React, Angular, Node.js and other modern technologies. Focused on user experience, performance and scalability.',
          technologies: ['React', 'Angular', 'Node.js', 'TypeScript', 'Tailwind CSS']
        },
        {
          id: 'backend',
          icon: 'fa-solid fa-server',
          title: 'Backend & APIs',
          description: 'Robust architectures, RESTful APIs and microservices with Node.js, Java and more.',
          details: 'I design and implement RESTful APIs, microservices and scalable backend architectures with Node.js, Java, Python and SQL/NoSQL databases.',
          technologies: ['Node.js', 'Java', 'Python', 'MongoDB', 'MySQL', 'PostgreSQL']
        },
        {
          id: 'data',
          icon: 'fa-solid fa-database',
          title: 'Data Management',
          description: 'Design and optimization of SQL and NoSQL databases for high performance.',
          details: 'I optimize and design relational and non-relational databases to ensure high performance, data integrity and scalability.',
          technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase']
        },
        {
          id: 'consulting',
          icon: 'fa-solid fa-rocket',
          title: 'IT Consulting',
          description: 'Consulting in architecture, automation and development best practices.',
          details: 'I advise teams on software architecture, process automation, continuous integration and agile development best practices.',
          technologies: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'Scrum', 'Kanban']
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