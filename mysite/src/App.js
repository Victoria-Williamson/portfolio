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
      
     
      <Grid container
  direction="column"
  wrap="nowrap"
  spacing={1}>
    <Grid item xs={20}> <div class="border-small"/></Grid>
    <Grid item xs={20}>
    <Toolbar id="home" />
      <Home/>
    </Grid>
    <Grid item xs={20}>
    <Toolbar id="about" />
      <AboutMe/>
    </Grid>
    <Grid item xs={20}>
    <Toolbar id="activities" />
      <Activities/>
    </Grid>
    <Grid item xs={20}>
    <Toolbar id="experiences" />
      <Experiences/>
    </Grid>
    <Grid item xs={20}>
    <Toolbar id="projects" />
      <Projects/>
    </Grid>
    <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="body1" color="inherit">
               
              </Typography>
            </Toolbar>
        </AppBar>
    </Grid>
    {/* <div class="relative h-32 w-full ...">
  <div class="absolute bottom-0 right-0 h-16 w-full text-center  p-4 text-white"> </div>
</div> */}
    </div>
  );
}

export default App;
