import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './LegalModal.module.css';

const LegalModal = ({ type, onClose }) => {
  const { language } = useLanguage();

  useEffect(() => {
    // Bloquear el scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!type) return null;

  const content = {
    es: {
      privacy: {
        title: 'Política de Privacidad',
        text: `
          <p><strong>La privacidad de los visitantes es una prioridad.</strong> Esta política describe cómo se maneja la información en este portafolio.</p>
          <p><strong>Recopilación de Datos:</strong> Este sitio web no recopila datos personales de forma automática ni utiliza cookies de seguimiento de terceros. La única forma de contacto directo es a través del correo electrónico proporcionado o el formulario de contacto.</p>
          <p><strong>Uso de la Información:</strong> Si decides contactarme a través del formulario o correo electrónico, la información proporcionada (nombre, email y mensaje) será utilizada exclusivamente para responder a tu consulta. Los datos no serán compartidos, vendidos ni cedidos a terceros.</p>
          <p><strong>Enlaces Externos:</strong> Este portafolio contiene enlaces a plataformas externas (GitHub, GitLab, LinkedIn, demos de proyectos). No soy responsable por las prácticas de privacidad de dichos sitios.</p>
          <p><em>Última actualización: Octubre 2026.</em></p>
        `
      },
      terms: {
        title: 'Términos y Condiciones',
        text: `
          <p><strong>Al acceder y utilizar este portafolio, aceptas los siguientes términos:</strong></p>
          <p><strong>Propósito del Sitio:</strong> Este sitio tiene fines informativos y de exhibición profesional. Su objetivo es mostrar las habilidades, proyectos y experiencia del autor.</p>
          <p><strong>Propiedad Intelectual:</strong> Todo el código fuente, diseño y contenido visual de los proyectos aquí mostrados son propiedad del autor, salvo que se indique lo contrario. Los proyectos son de código abierto y están sujetos a las licencias especificadas en sus respectivos repositorios.</p>
          <p><strong>Exactitud de la Información:</strong> Si bien se busca mantener la información actualizada, el autor no garantiza que todo el contenido esté libre de errores. El uso de la información aquí presentada es bajo tu propio riesgo.</p>
          <p><em>Última actualización: Octubre 2026.</em></p>
        `
      }
    },
    en: {
      privacy: {
        title: 'Privacy Policy',
        text: `
          <p><strong>The privacy of visitors is a priority.</strong> This policy describes how information is handled on this portfolio.</p>
          <p><strong>Data Collection:</strong> This website does not automatically collect personal data or use third-party tracking cookies. The only form of direct contact is through the provided email or the contact form.</p>
          <p><strong>Use of Information:</strong> If you choose to contact me through the form or email, the information provided (name, email, and message) will be used exclusively to respond to your inquiry. The data will not be shared, sold, or transferred to third parties.</p>
          <p><strong>External Links:</strong> This portfolio contains links to external platforms (GitHub, GitLab, LinkedIn, project demos). I am not responsible for the privacy practices of such sites.</p>
          <p><em>Last updated: October 2026.</em></p>
        `
      },
      terms: {
        title: 'Terms & Conditions',
        text: `
          <p><strong>By accessing and using this portfolio, you accept the following terms:</strong></p>
          <p><strong>Purpose of the Site:</strong> This site is for informational and professional display purposes. Its goal is to showcase the author's skills, projects, and experience.</p>
          <p><strong>Intellectual Property:</strong> All source code, design, and visual content of the projects shown here are the property of the author unless otherwise indicated. Projects are open source and subject to the licenses specified in their respective repositories.</p>
          <p><strong>Accuracy of Information:</strong> While efforts are made to keep information up-to-date, the author does not guarantee that all content is error-free. Use of the information presented here is at your own risk.</p>
          <p><em>Last updated: October 2026.</em></p>
        `
      }
    }
  };

  const data = content[language][type];

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>&times;</button>
        <h2 className={styles.modalTitle}>{data.title}</h2>
        <div className={styles.modalBody} dangerouslySetInnerHTML={{ __html: data.text }} />
      </div>
    </div>
  );
};

export default LegalModal;