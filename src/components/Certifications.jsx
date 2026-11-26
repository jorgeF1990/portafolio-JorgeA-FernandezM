import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Certifications.module.css';

const Certifications = () => {
  const { language } = useLanguage();

  const certifications = [
    {
      icon: 'fas fa-award',
      name: {
        es: 'Professional Full-Stack Developer',
        en: 'Professional Full-Stack Developer'
      },
      meta: ['UTN · 2025', '195 hs', 'Blockchain'],
      link: 'https://validator.centrodeelearning.com/validator/bd92d852-2d12-4756-93f6-6caa075293e6'
    },
    {
      icon: 'fas fa-database',
      name: {
        es: 'Bases de Datos',
        en: 'Databases'
      },
      meta: ['UTN · 2025', '96 hs', 'Excelente'],
      link: 'https://validator.centrodeelearning.com/validator/4f8c5abd-8045-46d5-9138-3c4eb12b18ad'
    },
    {
      icon: 'fab fa-node-js',
      name: {
        es: 'Desarrollo con NodeJS',
        en: 'NodeJS Development'
      },
      meta: ['UTN · 2025', '45 hs', 'Excelente'],
      link: 'https://validator.centrodeelearning.com/validator/bd875d48-9186-4635-ac5a-836fb234d6fa'
    },
    {
      icon: 'fab fa-react',
      name: {
        es: 'Desarrollo en React JS',
        en: 'React JS Development'
      },
      meta: ['UTN · 2025', '105 hs', 'Excelente'],
      link: 'https://validator.centrodeelearning.com/validator/4ba9cf10-ed2b-4c66-b137-50c434a423e9'
    },
    {
      icon: 'fab fa-angular',
      name: {
        es: 'Desarrollo con Angular',
        en: 'Angular Development'
      },
      meta: ['UTN · 2025', '45 hs', 'Excelente'],
      link: 'https://validator.centrodeelearning.com/validator/b5e6fa81-ccdf-479f-84a7-abe643b0682f'
    },
    {
      icon: 'fab fa-java',
      name: {
        es: 'Java Programming',
        en: 'Java Programming'
      },
      meta: ['2025', 'Politécnico'],
      link: 'https://politecnicodecolombia.edu.co/contable/app/certificados/pages/certificado.php?Id=wmgrkRa6XBMvZpGjeJzK'
    },
    {
      icon: 'fab fa-python',
      name: {
        es: 'Python',
        en: 'Python'
      },
      meta: ['8 horas', '2025'],
      link: 'https://drive.google.com/file/d/1o36sXga8S98vdVv28yqdiA8AySWcTnoC/view?usp=sharing'
    },
    {
      icon: 'fas fa-brain',
      name: {
        es: 'Claude 101',
        en: 'Claude 101'
      },
      meta: ['Anthropic Education · 2026', 'Certificación'],
      link: 'https://verify.skilljar.com/c/vwahg9ju2584'
    },
    {
      icon: 'fab fa-microsoft',
      name: {
        es: 'Azure DevOps esencial',
        en: 'Azure DevOps Essentials'
      },
      meta: ['LinkedIn Learning · 2026', 'DevOps'],
      link: 'https://www.linkedin.com/learning/certificates/20e3e9c8d13d08b1b47853de52c228f0249e20002a7b9ee2e748f13b450f7dad'
    },
    {
      icon: 'fab fa-microsoft',
      name: {
        es: 'Fundamentos de Azure',
        en: 'Azure Fundamentals'
      },
      meta: ['Código Facilito · 2026', 'Cloud'],
      link: 'https://codigofacilito.com/certificates/03f9062e-1a65-4b8d-a648-f5d666e48639'
    },
    {
      icon: 'fab fa-docker',
      name: {
        es: 'Profesional de Docker',
        en: 'Docker Professional'
      },
      meta: ['Código Facilito · 2026', 'Containers'],
      link: 'https://codigofacilito.com/certificates/8d7efb1d-e535-410d-9857-1db5f4c82ae0'
    },
    {
      icon: 'fab fa-aws',
      name: {
        es: 'Introducción a AWS: Servicios principales',
        en: 'Introduction to AWS: Core Services'
      },
      meta: ['LinkedIn Learning · 2026', 'Cloud'],
      link: 'https://www.linkedin.com/learning/certificates/4b5ee4f5cacc6952b57f3169215d4c70e848e50f0ab36e55cefa99c6183a2153'
    },
    {
      icon: 'fas fa-code',
      name: {
        es: 'Upgrade Applications with .NET Modernization',
        en: 'Upgrade Applications with .NET Modernization'
      },
      meta: ['LinkedIn Learning · 2026', '.NET'],
      link: 'https://www.linkedin.com/learning/certificates/54a8da8d6cc05309ebf67c2db45e14c0c9869dfc97d97b6af814e08a3996a599'
    },
    {
      icon: 'fas fa-code',
      name: {
        es: '.NET 10 Esencial',
        en: '.NET 10 Essentials'
      },
      meta: ['LinkedIn Learning · 2026', '.NET Framework / C#'],
      link: 'https://www.linkedin.com/learning/certificates/212fedaa9efae1530c0048960ca7a0d24585afa1e99be702361958fb5dbb7205'
    },
    // ===== NUEVA CERTIFICACIÓN =====
    {
      icon: 'fas fa-network-wired', // Icono que representa arquitectura/microservicios
      name: {
        es: '.NET a fondo: Microservicios',
        en: '.NET in Depth: Microservices'
      },
      meta: ['LinkedIn Learning · 2026', 'Architecture / RabbitMQ  / OpenTelemetry'],
      link: 'https://www.linkedin.com/learning/certificates/9b8b3eb913b2332cffb84538333ae023f26f5a848bfcb89e96ce4c971cabdc32'
    }
  ];

  const content = {
    es: {
      tag: 'Certificaciones',
      title: 'Certificaciones'
    },
    en: {
      tag: 'Certifications',
      title: 'Certifications'
    }
  };

  const data = content[language];

  return (
    <section className={styles.certifications} id="certifications">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>{data.tag}</span>
        <h2>{data.title}</h2>
      </div>
      <div className={styles.certGrid}>
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.certItem}
          >
            <i className={cert.icon}></i>
            <div className={styles.certInfo}>
              <div className={styles.certName}>{cert.name[language]}</div>
              <div className={styles.certMeta}>
                {cert.meta.map((item, idx) => (
                  <span key={idx} className={styles.badge}>{item}</span>
                ))}
              </div>
            </div>
            <i className="fas fa-external-link-alt" style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}></i>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;