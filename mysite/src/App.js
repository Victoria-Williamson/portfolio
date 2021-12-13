import './App.css';
import Home from "./Home/Home";
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
    <div className="App">
           <ReactNotification/>
      <AppBar color="primary">
        <Nav current="Home"/>  
      </AppBar>
      <Toolbar id="home" />
      <div class="grid grid-flow-row auto-rows-auto margin-auto">
      
      <Home />
     
      <Toolbar id="about"/>
      <AboutMe  />
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
