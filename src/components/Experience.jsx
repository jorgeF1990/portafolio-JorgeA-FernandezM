import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Experience.module.css';

const Experience = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      tag: 'Experiencia',
      title: 'Experiencia Laboral',
      position: 'DevOps Engineer Semi-Senior (SSr.) · Portfolio Investment',
      date: 'Sep 2025 – Presente',
      details: [
        {
          title: 'Arquitectura DataBox (Liderazgo Técnico):',
          text: 'Lideré la arquitectura e implementación de la plataforma de procesamiento distribuido DataBox para el consumo de datos financieros en tiempo real de BYMA.'
        },
        {
          title: 'Microservicios & Mensajería (.NET 8 + Kafka):',
          text: 'Diseñé un ecosistema de 4 microservicios en .NET 8 (KafkaConsumer, OrderBook, Reporting, ApiGateway) con YARP, consumiendo tópicos de Apache Kafka y logrando latencias de datos < 1 segundo.'
        },
        {
          title: 'Frontend en Tiempo Real (Angular 17):',
          text: 'Desarrollé el dashboard interactivo con Angular 17 (Signals), Angular Material y SSE (Server-Sent Events) para actualización en vivo del libro de órdenes.'
        },
        {
          title: 'Alta Disponibilidad y Persistencia:',
          text: 'Implementé la persistencia en PostgreSQL 16 usando Entity Framework Core, garantizando un 99.9% de disponibilidad mediante Docker y Kubernetes (con ConfigMaps, Secrets e Ingress).'
        },
        {
          title: 'Seguridad y Compliance Financiero:',
          text: 'Aseguré la plataforma con autenticación JWT + OAuth 2.0 contra Okta, implementando auditoría de acciones sensibles y persistencia de mensajes crudos para el cumplimiento normativo de la CNV.'
        },
        {
          title: 'Automatización CI/CD e Infraestructura:',
          text: 'Diseñé el sistema de mantenimiento preventivo con Ansible playbooks (parches de Windows, gestión de Firewall, limpieza de logs) y gestioné pipelines de CI/CD para despliegues automáticos en entornos Windows/Linux.'
        },
        {
          title: 'Optimización Full-Stack:',
          text: 'Optimicé consultas en SQL Server, PostgreSQL y MySQL (reduciendo tiempos de respuesta en un 50%) y desarrollé herramientas internas con React y Node.js que aumentaron la productividad del equipo en un 30%.'
        }
      ],
      tags: ['Linux', 'Proxmox', 'Python', 'Ansible', 'Node.js', 'MongoDB', 'MySQL', 'WordPress', 'TypeScript', 'CI/CD', 'GitLab CI', 'Render', '.NET 8', 'C#', 'Apache Kafka', 'PostgreSQL', 'Angular 17', 'Docker', 'Kubernetes', 'Okta']
    },
    en: {
      tag: 'Experience',
      title: 'Work Experience',
      position: 'DevOps Engineer Semi-Senior (SSr.) · Portfolio Investment',
      date: 'Sep 2025 – Present',
      details: [
        {
          title: 'DataBox Architecture (Technical Leadership):',
          text: 'Led the architecture and implementation of the DataBox distributed processing platform for real-time financial data consumption from BYMA.'
        },
        {
          title: 'Microservices & Messaging (.NET 8 + Kafka):',
          text: 'Designed an ecosystem of 4 microservices in .NET 8 (KafkaConsumer, OrderBook, Reporting, ApiGateway) with YARP, consuming Apache Kafka topics and achieving data latencies < 1 second.'
        },
        {
          title: 'Real-Time Frontend (Angular 17):',
          text: 'Developed the interactive dashboard with Angular 17 (Signals), Angular Material and SSE (Server-Sent Events) for live order book updates.'
        },
        {
          title: 'High Availability & Persistence:',
          text: 'Implemented persistence in PostgreSQL 16 using Entity Framework Core, ensuring 99.9% availability through Docker and Kubernetes (with ConfigMaps, Secrets and Ingress).'
        },
        {
          title: 'Security & Financial Compliance:',
          text: 'Secured the platform with JWT + OAuth 2.0 authentication against Okta, implementing audit trails of sensitive actions and raw message persistence for CNV regulatory compliance.'
        },
        {
          title: 'CI/CD Automation & Infrastructure:',
          text: 'Designed the preventive maintenance system with Ansible playbooks (Windows patches, Firewall management, log cleanup) and managed CI/CD pipelines for automated deployments in Windows/Linux environments.'
        },
        {
          title: 'Full-Stack Optimization:',
          text: 'Optimized SQL Server, PostgreSQL and MySQL queries (reducing response times by 50%) and developed internal tools with React and Node.js that increased team productivity by 30%.'
        }
      ],
      tags: ['Linux', 'Proxmox', 'Python', 'Ansible', 'Node.js', 'MongoDB', 'MySQL', 'WordPress', 'TypeScript', 'CI/CD', 'GitLab CI', 'Render', '.NET 8', 'C#', 'Apache Kafka', 'PostgreSQL', 'Angular 17', 'Docker', 'Kubernetes', 'Okta']
    }
  };

  const data = content[language];

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>{data.tag}</span>
        <h2>{data.title}</h2>
      </div>
      <div className={styles.expItem}>
        <div className={styles.expHeader}>
          <h3>{data.position}</h3>
          <span className={styles.date}>{data.date}</span>
        </div>
        <div className={styles.expDesc}>
          <ul>
            {data.details.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ul>
          <div className={styles.techTags}>
            {data.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;