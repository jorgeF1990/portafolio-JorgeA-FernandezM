import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Experience.module.css';

const Experience = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      tag: 'Experiencia',
      title: 'Experiencia Laboral',
      position: 'IT Support · Portfolio Investment',
      date: 'Sep 2025 – Presente',
      details: [
        'Administración de servidores Linux y entornos virtualizados con Proxmox, asegurando alta disponibilidad y rendimiento.',
        'Automatización de tareas operativas mediante scripts en Python (monitoreo, respaldos, reportes), logrando una reducción del 40% en tiempos de respuesta.',
        'Soporte y optimización de bases de datos MySQL y MongoDB, incluyendo tuning de consultas, respaldos y recuperación ante fallos.',
        'Gestión de incidencias y mantenimiento proactivo de infraestructura IT con documentación técnica detallada.',
        'Mantenimiento y actualización de páginas web y software interno de la empresa, asegurando su correcto funcionamiento y aplicando mejoras continuas.',
        'Implementación y gestión de pipelines de CI/CD para automatizar despliegues y pruebas, reduciendo los tiempos de entrega y mejorando la calidad del código.',
        'Proyecto DataBox – Sistema de Libro de Órdenes BYMA (2026): Diseño y desarrollo end-to-end de una plataforma de consumo de datos financieros en tiempo real desde BYMA. Backend en .NET 8 con 4 microservicios (KafkaConsumer, OrderBook, Reporting, ApiGateway) que consumen tópicos Kafka, persisten en PostgreSQL 16 vía Entity Framework Core, y exponen APIs REST con autenticación JWT + OAuth 2.0 contra Okta. Frontend Angular 17 standalone con Angular Material, SSE para actualización en tiempo real del libro de órdenes, y dashboard con KPIs. Infraestructura en Docker Compose para desarrollo y manifiestos Kubernetes para producción. Incluye compliance CNV y persistencia de mensajes crudos para auditoría.'
      ],
      tags: ['Linux', 'Proxmox', 'Python', 'Ansible', 'Node.js', 'MongoDB', 'MySQL', 'WordPress', 'TypeScript', 'CI/CD', 'GitLab CI', 'Render', '.NET 8', 'C#', 'Apache Kafka', 'PostgreSQL', 'Angular 17', 'Docker', 'Kubernetes', 'Okta']
    },
    en: {
      tag: 'Experience',
      title: 'Work Experience',
      position: 'IT Support · Portfolio Investment',
      date: 'Sep 2025 – Present',
      details: [
        'Administration of Linux servers and virtualized environments with Proxmox, ensuring high availability and performance.',
        'Automation of operational tasks using Python scripts (monitoring, backups, reporting), achieving a 40% reduction in response times.',
        'Support and optimization of MySQL and MongoDB databases, including query tuning, backups, and disaster recovery.',
        'Incident management and proactive maintenance of IT infrastructure with detailed technical documentation.',
        'Maintenance and updates of company websites and internal software, ensuring proper operation and implementing continuous improvements.',
        'Implementation and management of CI/CD pipelines to automate deployments and testing, reducing delivery times and improving code quality.',
        'DataBox Project – BYMA Order Book System (2026): End-to-end design and development of a real-time financial data consumption platform from BYMA. .NET 8 backend with 4 microservices (KafkaConsumer, OrderBook, Reporting, ApiGateway) consuming Kafka topics, persisting in PostgreSQL 16 via Entity Framework Core, and exposing REST APIs with JWT + OAuth 2.0 authentication against Okta. Angular 17 standalone frontend with Angular Material, SSE for real-time order book updates, and KPI dashboard. Docker Compose infrastructure for development and Kubernetes manifests for production. Includes CNV compliance and raw message persistence for auditing.'
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
              <li key={index}>{item}</li>
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