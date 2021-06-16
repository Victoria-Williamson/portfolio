import './App.css';
import Home from "./Home/Home";
import Activities from "./Activities/Activities";
import Experiences from "./Experiences/Experiences";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Nav from "./Header";
import AppBar from '@material-ui/core/AppBar';
import GetAppIcon from '@material-ui/icons/GetApp';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom'
import ReactNotification from 'react-notifications-component';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';



function App(props) {

  function HomeButton()
  {
    console.log("Clicked");
    var anchor = document.querySelector("#home");
  
  
  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.getElementById("home").scrollTop -= 10;
  }
}

  function AboutButton()
  {
    console.log("Clicked");
    var anchor = document.querySelector("#about");
  
  
  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

  function ActivitiesButton()
  {
    console.log("Clicked");
    var anchor = document.querySelector("#activities");
  
  
  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function ExperiencesButton()
{
  console.log("Clicked");
  var anchor = document.querySelector("#experiences");


if (anchor) {
  anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
}

function ProjectsButton()
{
  console.log("Clicked");
  var anchor = document.querySelector("#projects");


if (anchor) {
  anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
}
  var desktopVisibillity;
  var mobileVisibillity;

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
        <Nav/>
       
      </AppBar>
      <Toolbar id="home" />
      <div class="grid grid-flow-row auto-rows-auto margin-auto">
        <div className="lg:h-screen">
      <Home />
      </div>
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
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <text class="text-white text-xl"> Victoria Williamson </text>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-white">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-white">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-white">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-white">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
    </div>
  );
}

export default App;
