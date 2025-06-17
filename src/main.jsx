import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Core components
import Aurora from './assets/Aurora/Aurora.jsx';
import Navbar from './navbar.jsx';

// Page Sections
import AboutMe from './navbar/aboutme/aboutme.jsx';
import Skills from './navbar/skills/certificates.jsx';
import Project from './navbar/project/project.jsx';
import Contact from './navbar/contact/contact.jsx';

function App() {
  return (
    <StrictMode>
      <Navbar />
      <main>
        <AboutMe />
        <Skills />
        <Project />
        <Contact />
      </main>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);
