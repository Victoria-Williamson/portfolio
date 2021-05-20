import logo from './logo.svg';
import './App.css';
import Home from "./Home/Home";
import Activities from "./Activities/Activities";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom'
import ReactNotification from 'react-notifications-component';
import GetAppIcon from '@material-ui/icons/GetApp';
import prettyboarder from "./boarder.png";
import GitHub from "./GitHub.png";
import LinkedIn from "./Linkedin.png";
import Twitter from "./Twitter.png";
import AboutMe from "./AboutMe/AboutMe";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Experiences from "./Experiences/Experiences";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import { GetApp } from '@material-ui/icons';


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
    <Toolbar>
      <div class="Tool-Div" id="toolbar-desktop" >
      <Grid container
      id ="bigGrid"
  direction="row"
  justify="center"
  alignItems="center"
  wrap="nowrap"
  spacing={1}>
          <Grid id="grid1" item xs={20}>
               {/* Reusme Button*/}
               <a href="https://drive.google.com/file/d/1JIaehXoPsvEST1lEOvR9rTu3MtrORi3U/view?usp=sharing" target="_blank">
      <div id="Resume_Nav_Button" >
      <svg preserveAspectRatio="none" viewBox="0 0 186 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.64429 21.5C2.64429 11.1101 11.0669 2.6875 21.4568 2.6875H164.543C174.933 2.6875 183.355 11.1101 183.355 21.5V21.5C183.355 31.8899 174.933 40.3125 164.543 40.3125H21.4568C11.0669 40.3125 2.64429 31.8899 2.64429 21.5V21.5Z" stroke="url(#paint0_linear)" stroke-width="5"/>
<path d="M69.4214 24.9766H67.1948V31H63.0815V13.9375H69.7964C71.8198 13.9375 73.4019 14.3867 74.5425 15.2852C75.6831 16.1836 76.2534 17.4531 76.2534 19.0938C76.2534 20.2812 76.0112 21.2656 75.5269 22.0469C75.0503 22.8281 74.3003 23.4609 73.2769 23.9453L76.8394 30.8242V31H72.4331L69.4214 24.9766ZM67.1948 21.8008H69.7964C70.5776 21.8008 71.1636 21.5977 71.5542 21.1914C71.9526 20.7773 72.1519 20.2031 72.1519 19.4688C72.1519 18.7344 71.9526 18.1602 71.5542 17.7461C71.1558 17.3242 70.5698 17.1133 69.7964 17.1133H67.1948V21.8008ZM84.6909 31.2344C82.7456 31.2344 81.1714 30.6562 79.9683 29.5C78.7651 28.3359 78.1636 26.8242 78.1636 24.9648V24.6367C78.1636 23.3398 78.4019 22.1953 78.8784 21.2031C79.3628 20.2109 80.0659 19.4453 80.9878 18.9062C81.9097 18.3594 83.0034 18.0859 84.269 18.0859C86.0503 18.0859 87.4565 18.6406 88.4878 19.75C89.519 20.8516 90.0347 22.3906 90.0347 24.3672V25.9023H82.1831C82.3237 26.6133 82.6323 27.1719 83.1089 27.5781C83.5854 27.9844 84.2026 28.1875 84.9604 28.1875C86.2104 28.1875 87.187 27.75 87.8901 26.875L89.6948 29.0078C89.2026 29.6875 88.5034 30.2305 87.5972 30.6367C86.6987 31.0352 85.73 31.2344 84.6909 31.2344ZM84.2456 21.1328C83.0894 21.1328 82.4019 21.8984 82.1831 23.4297H86.1675V23.125C86.1831 22.4922 86.0229 22.0039 85.687 21.6602C85.3511 21.3086 84.8706 21.1328 84.2456 21.1328ZM98.2729 27.4375C98.2729 27.1016 98.0972 26.832 97.7456 26.6289C97.394 26.4258 96.7261 26.2148 95.7417 25.9961C94.7573 25.7773 93.9448 25.4922 93.3042 25.1406C92.6636 24.7812 92.1753 24.3477 91.8394 23.8398C91.5034 23.332 91.3354 22.75 91.3354 22.0938C91.3354 20.9297 91.8159 19.9727 92.7769 19.2227C93.7378 18.4648 94.9956 18.0859 96.5503 18.0859C98.2222 18.0859 99.5659 18.4648 100.582 19.2227C101.597 19.9805 102.105 20.9766 102.105 22.2109H98.144C98.144 21.1953 97.6089 20.6875 96.5386 20.6875C96.1245 20.6875 95.7769 20.8047 95.4956 21.0391C95.2144 21.2656 95.0737 21.5508 95.0737 21.8945C95.0737 22.2461 95.2456 22.5312 95.5894 22.75C95.9331 22.9688 96.48 23.1484 97.23 23.2891C97.9878 23.4297 98.6519 23.5977 99.2222 23.793C101.128 24.4492 102.082 25.625 102.082 27.3203C102.082 28.4766 101.566 29.418 100.535 30.1445C99.5112 30.8711 98.1831 31.2344 96.5503 31.2344C95.4644 31.2344 94.4956 31.0391 93.644 30.6484C92.7925 30.2578 92.1284 29.7266 91.6519 29.0547C91.1753 28.3828 90.937 27.6758 90.937 26.9336H94.6284C94.644 27.5195 94.8394 27.9492 95.2144 28.2227C95.5894 28.4883 96.0698 28.6211 96.6558 28.6211C97.1948 28.6211 97.5972 28.5117 97.8628 28.293C98.1362 28.0742 98.2729 27.7891 98.2729 27.4375ZM111.492 29.6289C110.656 30.6992 109.527 31.2344 108.105 31.2344C106.714 31.2344 105.66 30.832 104.941 30.0273C104.23 29.2148 103.875 28.0508 103.875 26.5352V18.3203H107.824V26.5586C107.824 27.6445 108.351 28.1875 109.406 28.1875C110.312 28.1875 110.957 27.8633 111.339 27.2148V18.3203H115.312V31H111.609L111.492 29.6289ZM121.218 18.3203L121.347 19.8086C122.246 18.6602 123.453 18.0859 124.968 18.0859C126.57 18.0859 127.652 18.7227 128.214 19.9961C129.074 18.7227 130.316 18.0859 131.941 18.0859C134.511 18.0859 135.832 19.6406 135.902 22.75V31H131.941V22.9961C131.941 22.3477 131.832 21.875 131.613 21.5781C131.394 21.2812 130.996 21.1328 130.417 21.1328C129.636 21.1328 129.054 21.4805 128.671 22.1758L128.683 22.3398V31H124.722V23.0195C124.722 22.3555 124.617 21.875 124.406 21.5781C124.195 21.2812 123.792 21.1328 123.199 21.1328C122.441 21.1328 121.863 21.4805 121.464 22.1758V31H117.515V18.3203H121.218ZM144.292 31.2344C142.347 31.2344 140.773 30.6562 139.57 29.5C138.367 28.3359 137.765 26.8242 137.765 24.9648V24.6367C137.765 23.3398 138.003 22.1953 138.48 21.2031C138.964 20.2109 139.667 19.4453 140.589 18.9062C141.511 18.3594 142.605 18.0859 143.871 18.0859C145.652 18.0859 147.058 18.6406 148.089 19.75C149.121 20.8516 149.636 22.3906 149.636 24.3672V25.9023H141.785C141.925 26.6133 142.234 27.1719 142.71 27.5781C143.187 27.9844 143.804 28.1875 144.562 28.1875C145.812 28.1875 146.789 27.75 147.492 26.875L149.296 29.0078C148.804 29.6875 148.105 30.2305 147.199 30.6367C146.3 31.0352 145.332 31.2344 144.292 31.2344ZM143.847 21.1328C142.691 21.1328 142.003 21.8984 141.785 23.4297H145.769V23.125C145.785 22.4922 145.625 22.0039 145.289 21.6602C144.953 21.3086 144.472 21.1328 143.847 21.1328Z" fill="white"/>
<path d="M48.3992 19.3177H43.428V12.375H35.9712V19.3177H31L39.6996 27.4175L48.3992 19.3177ZM31 29.7318V32.046H48.3992V29.7318H31Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear" x1="92.9997" y1="2.6875" x2="92.9997" y2="40.3125" gradientUnits="userSpaceOnUse">
<stop stop-color="#D62C49"/>
<stop offset="0.395833" stop-color="#D12784"/>
<stop offset="0.421875" stop-color="#A749BC"/>
<stop offset="0.598958" stop-color="#8B52C6"/>
<stop offset="0.765625" stop-color="#4169E1"/>
<stop offset="0.875" stop-color="#007EE8"/>
<stop offset="0.953125" stop-color="#1DA1F2"/>
</linearGradient>
</defs>
</svg>
      </div>
      </a>
      </Grid>
      <Grid id="grid2" item xs={20}>
      <div id="CV_Nav_Button">
      <svg preserveAspectRatio="none" viewBox="0 0 186 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.64429 21.5C2.64429 11.1101 11.0669 2.6875 21.4568 2.6875H164.543C174.933 2.6875 183.355 11.1101 183.355 21.5V21.5C183.355 31.8899 174.933 40.3125 164.543 40.3125H21.4568C11.0669 40.3125 2.64429 31.8899 2.64429 21.5V21.5Z" stroke="url(#paint0_linear)" stroke-width="5"/>
<path d="M105.246 25.2227C105.191 26.4102 104.871 27.4609 104.285 28.375C103.699 29.2812 102.875 29.9844 101.812 30.4844C100.757 30.9844 99.5503 31.2344 98.1909 31.2344C95.9487 31.2344 94.1831 30.5039 92.894 29.043C91.605 27.582 90.9604 25.5195 90.9604 22.8555V22.0117C90.9604 20.3398 91.2495 18.8789 91.8276 17.6289C92.4136 16.3711 93.2534 15.4023 94.3472 14.7227C95.4409 14.0352 96.7065 13.6914 98.144 13.6914C100.214 13.6914 101.878 14.2383 103.136 15.332C104.394 16.418 105.109 17.918 105.281 19.832H101.179C101.148 18.793 100.886 18.0469 100.394 17.5938C99.9019 17.1406 99.1519 16.9141 98.144 16.9141C97.1206 16.9141 96.3706 17.2969 95.894 18.0625C95.4175 18.8281 95.1675 20.0508 95.144 21.7305V22.9375C95.144 24.7578 95.3706 26.0586 95.8237 26.8398C96.2847 27.6211 97.0737 28.0117 98.1909 28.0117C99.1362 28.0117 99.8589 27.7891 100.359 27.3438C100.859 26.8984 101.125 26.1914 101.156 25.2227H105.246ZM113.812 26.3594L117.21 13.9375H121.804L116.062 31H111.562L105.867 13.9375H110.425L113.812 26.3594Z" fill="white"/>
<path d="M48.3992 19.3177H43.428V12.375H35.9712V19.3177H31L39.6996 27.4175L48.3992 19.3177ZM31 29.7318V32.046H48.3992V29.7318H31Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear" x1="92.9997" y1="2.6875" x2="92.9997" y2="40.3125" gradientUnits="userSpaceOnUse">
<stop stop-color="#D62C49"/>
<stop offset="0.395833" stop-color="#D12784"/>
<stop offset="0.421875" stop-color="#A749BC"/>
<stop offset="0.598958" stop-color="#8B52C6"/>
<stop offset="0.765625" stop-color="#4169E1"/>
<stop offset="0.875" stop-color="#007EE8"/>
<stop offset="0.953125" stop-color="#1DA1F2"/>
</linearGradient>
</defs>
</svg>
      </div>
      </Grid>

<Grid id="grid2" item xs={20}>
  <Button id="border-tab-big" onClick={HomeButton}> 
    Home
  </Button>
</Grid>
<Grid id="grid2" item xs={20}>
<Button id="border-tab-big" onClick={AboutButton}> 
    About
  </Button>
</Grid>
<Grid id="grid2" item xs={20}>
<Button id="border-tab-big" onClick={ActivitiesButton}> 
    Activities
  </Button>
</Grid>
<Grid id="grid2" item xs={20}>
<Button id="border-tab-big" onClick={ExperiencesButton}> 
    Experiences
  </Button>
</Grid>
<Grid id="grid2" item xs={20}>
<Button id="border-tab-big" onClick={ProjectsButton}> 
    Projects
  </Button>
</Grid>
<Grid id="grid2" item xs = {20}>
      <div id="LinkedIn">
      <a href="http://www.linkedin.com/in/victoria-n-williamson" target="_blank">
      <svg preserveAspectRatio="none" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#1DA1F2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7747 10.2839C14.7747 11.529 13.8267 12.5366 12.3442 12.5366C10.9194 12.5366 9.97132 11.529 10.0007 10.2839C9.97132 8.97828 10.9193 8 12.3726 8C13.8267 8 14.7463 8.97828 14.7747 10.2839ZM10.1199 28.8191V14.3162H14.6271V28.8181H10.1199V28.8191Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2398 18.9446C18.2398 17.1356 18.1802 15.5935 18.1206 14.3181H22.0356L22.2437 16.305H22.3326C22.9259 15.3854 24.4084 13.9927 26.8106 13.9927C29.7757 13.9927 32 15.9501 32 20.219V28.821H27.4927V20.7838C27.4927 18.9143 26.8408 17.6399 25.2098 17.6399C23.9637 17.6399 23.2229 18.4999 22.9268 19.3297C22.8076 19.6267 22.7489 20.0412 22.7489 20.4574V28.821H18.2416V18.9446H18.2398Z" fill="white"/>
</svg>
</a>

      </div>
</Grid>
<Grid id="grid1" item xs = {20}>
<div id="Twitter">
<a href="http://www.twitter.com" target="_blank">
<svg preserveAspectRatio="none" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#D12784"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 12.3086C31.1177 12.7006 30.1681 12.9646 29.1722 13.0838C30.1889 12.4742 30.9697 11.5095 31.3368 10.36C30.3865 10.9247 29.3314 11.3335 28.2107 11.5551C27.3123 10.5984 26.0316 10 24.6165 10C21.8975 10 19.6928 12.2047 19.6928 14.9237C19.6928 15.3092 19.7368 15.6852 19.8208 16.046C15.7283 15.8412 12.1005 13.8805 9.67189 10.9015C9.24792 11.6287 9.00553 12.4742 9.00553 13.3766C9.00553 15.0845 9.87347 16.5916 11.1958 17.4747C10.3878 17.4491 9.62949 17.2275 8.96473 16.8587V16.9203C8.96473 19.3066 10.663 21.296 12.9141 21.7496C12.5013 21.8616 12.0661 21.9224 11.6174 21.9224C11.2998 21.9224 10.991 21.8912 10.6902 21.8336C11.3166 23.7895 13.1357 25.2134 15.2899 25.2534C13.6052 26.5733 11.4822 27.3612 9.17512 27.3612C8.77675 27.3612 8.38477 27.338 8 27.2916C10.1791 28.6884 12.7669 29.5043 15.5475 29.5043C24.6037 29.5043 29.5562 22.0016 29.5562 15.4956C29.5562 15.282 29.5522 15.0693 29.5418 14.8589C30.5049 14.1629 31.34 13.2958 32 12.3086Z" fill="white"/>
</svg>
</a>

      </div>
</Grid>

<Grid id="grid2" item xs={20}>
  <a href="http://https://github.com/Victoria-Williamson" target="_blank">
     <div id="Github">
     <svg preserveAspectRatio="none" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#D62C49"/>
<path d="M2.81372 30.2351C5.24836 34.3138 9.09418 37.4526 13.6775 38.9785C14.6781 39.1614 15.0428 38.5438 15.0428 38.0134C15.0428 37.7939 15.0391 37.4058 15.0341 36.8866C15.0284 36.2853 15.021 35.5079 15.0158 34.6125C9.45266 35.8206 8.2789 31.931 8.2789 31.931C7.36911 29.6215 6.05783 29.0064 6.05783 29.0064C4.24194 27.7651 6.19535 27.7897 6.19535 27.7897C8.20278 27.9321 9.25867 29.8511 9.25867 29.8511C11.0426 32.9071 13.9402 32.0243 15.0796 31.5135C15.2613 30.2207 15.777 29.3391 16.3491 28.8394C11.9082 28.3348 7.23896 26.6184 7.23896 18.9545C7.23896 16.7715 8.01861 14.9863 9.29796 13.5879C9.09169 13.082 8.40536 11.0488 9.49318 8.29491C9.49318 8.29491 11.1728 7.75714 14.9937 10.3453C16.5885 9.90208 18.3001 9.67985 20.0006 9.67249C21.6986 9.67985 23.4101 9.90208 25.0075 10.3453C28.8259 7.75714 30.5018 8.29491 30.5018 8.29491C31.5933 11.0488 30.907 13.082 30.7007 13.5879C31.9825 14.9863 32.7572 16.7715 32.7572 18.9545C32.7572 26.638 28.0806 28.3287 23.625 28.8235C24.3432 29.441 24.9829 30.6615 24.9829 32.5277C24.9829 34.3153 24.9719 35.8722 24.9646 36.9036C24.961 37.4144 24.9583 37.7963 24.9583 38.0134C24.9583 38.5488 25.3181 39.1712 26.3335 38.976C29.9846 37.7573 33.1673 35.5155 35.5405 32.5904C31.8736 37.1109 26.2742 40 19.9999 40C12.6946 40 6.30402 36.0832 2.81372 30.2351Z" fill="white"/>
</svg>

</div>
</a>

</Grid>
        </Grid>
        <Grid item xs={6} sm={3}>
        </Grid>
      {/*Tabs*/}
      
      

      {/*Social Medias*/}
     
      </div>
      <div class="Tool-Div" id="toolbar-mobile" >
      <Grid container
      id ="bigGrid"
  direction="row"
  justify="center"
  alignItems="center"
  wrap="nowrap"
  spacing={1}>
<Grid id="grid2" item xs={20}>
  <div id="border-tab" onClick={HomeButton}>
    Home
  </div>
</Grid>
<Grid id="grid2" item xs={20}>
  <div id="border-tab" onClick={AboutButton}>
    About
  </div>
</Grid>
<Grid id="grid2" item xs={20}>
  <div id="border-tab" onClick={ActivitiesButton}>
    Activites
  </div>
</Grid>
<Grid id="grid2" item xs={20}>
  <div id="border-tab"  onClick={ExperiencesButton}>
    Experiences
  </div>
</Grid>
<Grid id="grid2" item xs={20} onClick={ProjectsButton}>
  <div id="border-tab">
    Projects
  </div>
</Grid>


        </Grid>
        <Grid item xs={6} sm={3}>
        </Grid>
      {/*Tabs*/}
      
      

      {/*Social Medias*/}
     
      </div>
    </Toolbar>
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
   
    </div>
  );
}

export default App;
