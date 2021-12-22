import './App.css';
import React, { useEffect, useState } from 'react';
import Home from "./Home/Home";
import Skills from "./AboutMe/Skills";
import Activities from "./Activities/Activities";
import Experiences from "./Experiences/Experiences";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Nav from "./Header";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom'
import ReactNotification from 'react-notifications-component';


function App(props) {

  const [thumbnails, setThumbnails] = useState([
    { name: 'Home', href: '#home', current: true },
      { name: 'About', href: '#about', current: false },
      { name: 'Skills', href: '#skills', current: false },
      { name: 'Timeline', href: '#experiences', current: false },
      { name: 'Projects', href: '#projects', current: false }
      
  ])

  function determineWithinView()
  {
    console.log('home2',document.getElementById("home2"));
    var old = thumbnails;
    var updatedThumbnails = []
    var prevTrue = -1;
    var foundTrue = false;
    var count = 0;
  
    thumbnails.forEach((thumb) =>
    {
      if (thumb.current)
      {
        prevTrue = count;
      }
      var bounding = document.querySelector(thumb.href).getBoundingClientRect();
  
      var value = ((
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ))
      if (value)
      {
        foundTrue = true;
      }

      thumb.current = value;
      updatedThumbnails.push(thumb);
      count++;
    })

    
    if (foundTrue)
    {
      setThumbnails(updatedThumbnails);
    }
   
    
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));

    function ScrollTop(props) {
      const { children, window } = props;
      const classes = useStyles();
      // Note that you normally won't need to set the window ref as useScrollTrigger
      // will default to window.
      // This is only being set here because the demo is in an iframe.
      const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
      });

      const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    
        if (anchor) {
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      };
      return (
        <Zoom in={trigger}>
          <div onClick={handleClick} role="presentation" className={classes.root}>
            {children}
          </div>
        </Zoom>
      );
    }
  
  return (
    <div className="App" onScroll={() => (determineWithinView())}>
           <ReactNotification/>
      <AppBar color="primary">
        <Nav thumbnails={thumbnails}/>  
      </AppBar>
      <div id="home"/>
      <div class="flex flex-col">
      
      <Home />
     
      <Toolbar id="about"/>
      <AboutMe id="aboutThing" />
      <Toolbar id="skills"/>
      <Skills/>
      <Toolbar id="activities"/>
      <Activities/>
      <Toolbar id="experiences" />
      <Experiences/>
      <Toolbar id="projects" />
      <Projects/>
</div>
    <footer class="text-gray-600 body-font">
  
</footer>
    </div>
  );
}

export default App;
