import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import styles from './App.module.css';

function App() {
  const [modalData, setModalData] = useState(null);

  const openModal = (projectKey) => {
    setModalData(projectKey);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalData(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className={styles.app}>
          <div className={styles.container}>
            <Header />
            <Hero />
            <Services />
            <TechStack />
            <Projects openModal={openModal} />
            <Experience />
            <Education />
            <Certifications />
            <Contact />
            <Footer />
          </div>
          <Modal projectKey={modalData} onClose={closeModal} />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;