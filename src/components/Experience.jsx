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
        'Administración de servidores Linux y entornos virtualizados con Proxmox.',
        'Automatización de tareas operativas mediante scripts en Python (monitoreo, respaldos, reportes).',
        'Soporte y optimización de bases de datos MySQL y MongoDB.',
        'Gestión de incidencias y mantenimiento de infraestructura IT.',
        'Desarrollo interno: Implementación de un sistema de tareas productivo con frontend moderno (vistas: lista, Kanban y calendario), backend en Node.js y base de datos MongoDB. Actualmente en uso por el equipo.'
      ],
      tags: ['Linux', 'Proxmox', 'Python', 'Ansible', 'Node.js', 'MongoDB', 'MySQL', 'WordPress', 'TypeScript']
    },
    en: {
      tag: 'Experience',
      title: 'Work Experience',
      position: 'IT Support · Portfolio Investment',
      date: 'Sep 2025 – Present',
      details: [
        'Administration of Linux servers and virtualized environments with Proxmox.',
        'Automation of operational tasks using Python scripts (monitoring, backups, reporting).',
        'Support and optimization of MySQL and MongoDB databases.',
        'Incident management and IT infrastructure maintenance.',
        'Internal development: Implementation of a productive task system with a modern frontend (list, Kanban and calendar views), Node.js backend and MongoDB database. Currently in use by the team.'
      ],
      tags: ['Linux', 'Proxmox', 'Python', 'Ansible', 'Node.js', 'MongoDB', 'MySQL', 'WordPress', 'TypeScript']
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