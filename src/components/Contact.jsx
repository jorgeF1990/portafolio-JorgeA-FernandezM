import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Contact.module.css';

const Contact = () => {
  const { language } = useLanguage();
  const [state, handleSubmit] = useForm('mwleeebo');

  const content = {
    es: {
      tag: 'Contacto',
      title: 'Hablemos',
      desc: '¿Tienes un proyecto en mente? ¡Escríbeme!',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      sent: '¡Mensaje enviado!',
      error: 'Error al enviar. Intenta de nuevo.',
      location: 'Ubicación',
      locationValue: 'CABA, Buenos Aires, Argentina'
    },
    en: {
      tag: 'Contact',
      title: "Let's Talk",
      desc: 'Have a project in mind? Let\'s connect!',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending...',
      sent: 'Message sent!',
      error: 'Error sending. Please try again.',
      location: 'Location',
      locationValue: 'CABA, Buenos Aires, Argentina'
    }
  };

  const data = content[language];

  if (state.succeeded) {
    return (
      <section className={styles.contact} id="contact">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>{data.tag}</span>
          <h2>{data.title}</h2>
          <p className={styles.sectionDesc}>{data.desc}</p>
        </div>
        <div className={styles.successMessage}>
          <i className="fas fa-check-circle"></i>
          <p>{data.sent}</p>
          <button 
            className={styles.resetBtn} 
            onClick={() => window.location.reload()}
          >
            {language === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>{data.tag}</span>
        <h2>{data.title}</h2>
        <p className={styles.sectionDesc}>{data.desc}</p>
      </div>
      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <i className="fas fa-envelope"></i>
            <div>
              <strong>Email</strong>
              <a href="mailto:jorgesf29b@gmail.com">jorgesf29b@gmail.com</a>
            </div>
          </div>
          <div className={styles.contactItem}>
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <strong>{data.location}</strong>
              <span>{data.locationValue}</span>
            </div>
          </div>
          <div className={styles.contactItem}>
            <i className="fab fa-github"></i>
            <div>
              <strong>GitHub</strong>
              <a href="https://github.com/jorgeF1990" target="_blank" rel="noopener noreferrer">github.com/jorgeF1990</a>
            </div>
          </div>
          <div className={styles.contactItem}>
            <i className="fab fa-linkedin-in"></i>
            <div>
              <strong>LinkedIn</strong>
              <a href="https://www.linkedin.com/in/jorge-fern%C3%A1ndez-montaner-50115412b/" target="_blank" rel="noopener noreferrer">Jorge Fernández</a>
            </div>
          </div>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.visuallyHidden}>{data.name}</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder={data.name}
              required
            />
            <ValidationError 
              field="name" 
              prefix={data.name} 
              errors={state.errors}
              className={styles.fieldError}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.visuallyHidden}>{data.email}</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder={data.email}
              required
            />
            <ValidationError 
              field="email" 
              prefix={data.email} 
              errors={state.errors}
              className={styles.fieldError}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.visuallyHidden}>{data.message}</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder={data.message}
              required
            ></textarea>
            <ValidationError 
              field="message" 
              prefix={data.message} 
              errors={state.errors}
              className={styles.fieldError}
            />
          </div>
          <button
            type="submit"
            className={styles.btnPrimary}
            disabled={state.submitting}
          >
            <i className={`fas ${state.submitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
            {state.submitting ? data.sending : data.send}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;