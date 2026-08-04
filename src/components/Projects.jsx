import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { projectData } from '../data/projectData';
import styles from './Projects.module.css';

const Projects = ({ openModal }) => {
  const { language } = useLanguage();

  const projectKeys = ['tareasync', 'seguro', 'inventario'];

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
    tareasync: 'https://tareasync.vercel.app/',
    seguro: 'https://segurovehicularprimium.netlify.app/',
    inventario: 'https://sistema-control-stock.netlify.app/'
  };

  const projectImages = {
    tareasync: 'https://i.postimg.cc/4yd5H7p6/tareas.jpg',
    seguro: 'https://i.postimg.cc/3R6y9dPm/seguro.jpg',
    inventario: 'https://i.postimg.cc/yYRRQy6N/inventario.jpg'
  };

  // Función para mostrar solo 6 tecnologías
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
          const imageUrl = projectImages[key];
          const allTechs = project.techs || [];
          const { display, remaining } = getDisplayTechs(allTechs);

          let iconClass = 'fa-solid fa-folder-open';
          if (key === 'tareasync') iconClass = 'fa-solid fa-tasks';
          else if (key === 'seguro') iconClass = 'fa-solid fa-car';
          else if (key === 'inventario') iconClass = 'fa-solid fa-cubes';

          return (
            <div key={key} className={styles.projectCard}>
              <div className={styles.projectImgWrapper}>
                <img 
                  src={imageUrl} 
                  alt={project.title} 
                  className={styles.projectImg}
                  loading="lazy"
                  onError={(e) => {
                    // Si la imagen falla, mostrar el icono
                    e.target.style.display = 'none';
                    e.target.parentElement.querySelector('.imageFallback').style.display = 'flex';
                  }}
                />
                <div className={styles.imageFallback}>
                  <i className={`${iconClass} ${styles.placeholderIcon}`}></i>
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
                    <span className={styles.moreTechs}>+{remaining} más</span>
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