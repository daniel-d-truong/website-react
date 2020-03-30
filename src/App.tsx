import React from 'react';
import NavBar from './components/NavBar';
import TopSection from './components/TopSection';
import AboutMe from './components/AboutMe';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMe from './components/ContactMe';
import { createUseStyles } from 'react-jss';

const App: React.FC = () => {
    const width = 18;
    const useStyles = createUseStyles({
      main: {
          flex: 1,
          marginLeft: width + "em",
          marginTop: "-40px"
      }, 
      wrapper: {
          position: "relative",
      },
      fullscreen: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh" 
      },
      sideBySide: {
        display: 'flex',
        margin: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      }
    });

    const classes = useStyles();
    return (
      <div className={classes.sideBySide}>
        <NavBar width={width}/>
        <div className={classes.main}>
          <TopSection />
          <AboutMe />
          <ExperienceSection />
          <ProjectsSection />
          <ContactMe />
        </div>
      </div>
    )
}

export default App;
