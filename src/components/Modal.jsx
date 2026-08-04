import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { projectData, featureIcons } from '../data/projectData';
import styles from './Modal.module.css';

const Modal = ({ projectKey, onClose }) => {
  const { language } = useLanguage();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (projectKey) {
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [projectKey, onClose]);

  if (!projectKey) return null;

  const data = projectData[projectKey]?.[language];
  if (!data) return null;

  const projectImages = {
    tareasync: 'https://i.postimg.cc/4yd5H7p6/tareas.jpg',
    seguro: 'https://i.postimg.cc/3R6y9dPm/seguro.jpg',
    inventario: 'https://i.postimg.cc/yYRRQy6N/inventario.jpg'
  };

  const demoLinks = {
    tareasync: 'https://tareasync.vercel.app/',
    seguro: 'https://segurovehicularprimium.netlify.app/',
    inventario: 'https://sistema-control-stock.netlify.app/'
  };

  const imageUrl = projectImages[projectKey];
  const demoUrl = demoLinks[projectKey];

  const featuresHtml = data.features.map((f) => {
    const iconClass = featureIcons[f] || 'fa-solid fa-check-circle';
    return (
      <span key={f}>
        <i className={iconClass}></i> {f}
      </span>
    );
  });

  const techsHtml = data.techs.map((t, index) => (
    <span key={index}>{t}</span>
  ));

  let repoHtml = null;
  if (data.repo) {
    repoHtml = (
      <p>
        <strong>{language === 'es' ? 'Repositorio:' : 'Repository:'}</strong>{' '}
        <a href={`https://${data.repo}`} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
          {data.repo}
        </a>
      </p>
    );
  }

  let demoHtml = null;
  if (data.demo) {
    demoHtml = (
      <p>
        <strong>{language === 'es' ? 'Demo en vivo:' : 'Live demo:'}</strong>{' '}
        <a href={`https://${data.demo}`} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
          {data.demo}
        </a>
      </p>
    );
  }

  let credentialsHtml = null;
  if (data.credentials) {
    credentialsHtml = (
      <div className={styles.credentialsBox}>
        <div className={styles.credHeader}>
          <i className="fas fa-key"></i>
          <h4>{language === 'es' ? 'Credenciales de prueba' : 'Test Credentials'}</h4>
        </div>
        <div className={styles.credentialsGrid}>
          <div className={styles.credentialItem}>
            <span className={styles.credLabel}>{language === 'es' ? 'Usuario' : 'User'}</span>
            <code className={styles.credValue}>{data.credentials.email}</code>
          </div>
          <div className={styles.credentialItem}>
            <span className={styles.credLabel}>{language === 'es' ? 'Contraseña' : 'Password'}</span>
            <code className={styles.credValue}>{data.credentials.password}</code>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} ref={modalRef}>
        <button className={styles.modalClose} onClick={onClose}>&times;</button>
        
        {imageUrl && (
          <a 
            href={demoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.modalImageLink}
          >
            <div className={styles.modalImageWrapper}>
              <img 
                src={imageUrl} 
                alt={data.title} 
                className={styles.modalImage}
                loading="lazy"
              />
              <div className={styles.modalImageOverlay}>
                <i className="fas fa-external-link-alt"></i>
                <span>{language === 'es' ? 'Abrir proyecto' : 'Open project'}</span>
              </div>
            </div>
          </a>
        )}

        <span className={styles.modalTag}>{data.tag}</span>
        <h2>{data.title}</h2>
        <div className={styles.modalMeta}>
          <i className="far fa-folder-open"></i> {data.meta}
        </div>
        <div className={styles.modalBodyContent}>
          <p>{data.description}</p>

          <h3>{language === 'es' ? 'Características principales' : 'Main Features'}</h3>
          <div className={styles.featureGrid}>
            {featuresHtml}
          </div>

          <h3>{language === 'es' ? 'Tecnologías utilizadas' : 'Technologies Used'}</h3>
          <div className={styles.modalTechTags}>
            {techsHtml}
          </div>

          {credentialsHtml}
          {repoHtml}
          {demoHtml}
        </div>
      </div>
    </div>
  );
};

export default Modal;