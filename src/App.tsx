import React from 'react';
import NavBar from './components/NavBar';
import TopSection from './components/TopSection';
import AboutMe from './components/AboutMe';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMe from './components/ContactMe';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <TopSection />
      <AboutMe />
      <ExperienceSection />
      <ProjectsSection />
      <ContactMe />
    </React.Fragment>
  )
}

export default App;
