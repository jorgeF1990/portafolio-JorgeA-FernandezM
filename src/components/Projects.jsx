import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { projectData } from '../data/projectData';
import styles from './Projects.module.css';

const Projects = ({ openModal }) => {
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectKeys = ['databox', 'tareasync', 'seguro', 'inventario', 'actitud', 'feria'];

  const content = {
    es: {
      tag: 'Portafolio',
      title: 'Proyectos Destacados',
      desc: 'Algunos de mis trabajos recientes',
      viewProject: 'Ver proyecto',
      details: 'Detalles',
      liveDemo: 'Live Demo'
    },
    en: {
      tag: 'Portfolio',
      title: 'Featured Projects',
      desc: 'Some of my recent work',
      viewProject: 'View project',
      details: 'Details',
      liveDemo: 'Live Demo'
    }
  };

  const data = content[language];
  
  const demoLinks = {
    databox: null,
    tareasync: 'https://tareasync.vercel.app/',
    seguro: 'https://segurovehicularprimium.netlify.app/',
    inventario: 'https://sistema-control-stock.netlify.app/',
    actitud: 'https://actitud-8ad284.gitlab.io/',
    feria: 'https://feria-de-majo.vercel.app/'
  };

  // Agregamos las dos imágenes de DataBox en un array
  const projectImages = {
    databox: [
      'https://i.postimg.cc/q7d4kw6x/Captura-de-pantalla-2026-10-21-212921.png', // Modo Oscuro
      'https://i.postimg.cc/0Qn8XSQG/Captura-de-pantalla-2026-10-21-212840.png'  // Modo Claro
    ],
    tareasync: ['https://i.postimg.cc/4yd5H7p6/tareas.jpg'],
    seguro: ['https://i.postimg.cc/3R6y9dPm/seguro.jpg'],
    inventario: ['https://i.postimg.cc/yYRRQy6N/inventario.jpg'],
    actitud: ['https://i.postimg.cc/XYPXVFmy/image.png'],
    feria: ['https://i.postimg.cc/BQn4zbbJ/image.png']
  };

  // Efecto para el carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2); // Cambia entre 0 y 1
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  const getDisplayTechs = (techs) => {
    if (!techs || techs.length === 0) return { display: [], remaining: 0 };
    const maxDisplay = 6;
    if (techs.length <= maxDisplay) {
      return { display: techs, remaining: 0 };
    }
    return {
      display: techs.slice(0, maxDisplay),
      remaining: techs.length - maxDisplay
    };
  };

  const getProjectIcon = (key) => {
    const icons = {
      databox: 'fa-network-wired',
      tareasync: 'fa-tasks',
      seguro: 'fa-car',
      inventario: 'fa-cubes',
      actitud: 'fa-guitar',
      feria: 'fa-store'
    };
    return icons[key] || 'fa-folder-open';
  };

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>{data.tag}</span>
        <h2>{data.title}</h2>
        <p className={styles.sectionDesc}>{data.desc}</p>
      </div>
      <div className={styles.projectGrid}>
        {projectKeys.map((key) => {
          const project = projectData[key][language];
          const demoLink = demoLinks[key];
          
          // Lógica para seleccionar la imagen correcta del array
          const images = projectImages[key];
          const imageUrl = images[currentImageIndex % images.length]; 
          
          const allTechs = project.techs || [];
          const { display, remaining } = getDisplayTechs(allTechs);
          const iconClass = getProjectIcon(key);

          return (
            <div key={key} className={styles.projectCard}>
              <div className={styles.projectImgWrapper}>
                <img 
                  src={imageUrl} 
                  alt={project.title} 
                  className={styles.projectImg}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.querySelector('.imageFallback').style.display = 'flex';
                  }}
                />
                <div className={styles.imageFallback}>
                  <i className={`fas ${iconClass} ${styles.placeholderIcon}`}></i>
                </div>
              </div>
              <div className={styles.projectBody}>
                <h4>{project.title}</h4>
                <p className={styles.shortDesc}>{project.description}</p>
                <div className={styles.techTags}>
                  {display.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                  {remaining > 0 && (
                    <span className={styles.moreTechs}>+{remaining} mas</span>
                  )}
                </div>
                <div className={styles.projectActions}>
                  {demoLink && (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btnPrimary}
                    >
                      <i className="fas fa-external-link-alt"></i>
                      {data.viewProject}
                    </a>
                  )}
                  <button
                    className={styles.btnDetails}
                    onClick={() => openModal(key)}
                  >
                    <i className="fas fa-info-circle"></i> {data.details}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;