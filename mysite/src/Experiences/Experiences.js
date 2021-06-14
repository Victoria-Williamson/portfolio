import React, { useEffect, useMemo, useCallback } from 'react';
import "./Experiences.css";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import Toolbar from '@material-ui/core/Toolbar';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import Card from 'react-bootstrap/Card';
import Popover from '@material-ui/core/Popover';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const data =  {
  img: "https://lh3.googleusercontent.com/pw/ACtC-3ej1Hq6IOxshfBV8Fr4Pk2ybc7vpgnjbWvLDFpLaVp_P-VDMBVwSxqKgqeFBvTXRVGxQbzkETRqaCwf5buWHEh87B-bOMpqMNrq_VYEJnq9jxi2MF9o9d0Rd0Z4n4A75GKkLErD33qAqm2x76j-NkAnvw=w1269-h912-no?authuser=0",
  title: "Project Title",
  languages: ["Java", "JavaScript", "Swift"],
  purpose: "Work",
  link: "https://github.com/Victoria-Williamson",
  author: "Me",
  description: "Maecenas non enim mattis, consectetur nunc et, dapibus sem. Phasellus cursus porta augue, ac consectetur ipsum porttitor sit amet. In vel pulvinar arcu. Pellentesque nibh metus, efficitur a molestie sit amet, vehicula a nisi. Aenean interdum pretium lorem nec molestie. In hac habitasse platea dictumst. In sed sodales neque, mattis vulputate mauris. Nunc a lorem auctor, pulvinar massa ut, efficitur odio. Etiam blandit arcu vitae erat rhoncus porta. In eget gravida ligula. Sed id congue orci.",
};
const useStyles = makeStyles((theme) => ({
    paper1: {
      [theme.breakpoints.down('md')]: {
        width:"calc(300px + 10vw)",
      },
      
      padding: '2px 1px',
      backgroundColor: '#272727',
      color: '#FFFFFF',
      alignContent: "center",
      alignItems: "center",
    },
    title:
    {
      alignContent: "center",
      alignItems: "center",
    },
    text:
    {
      alignContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    paper2: {
        padding: '6px 16px',
        backgroundColor: '#272727',
        color: '#FFFFFF'
      },
      paper3: {
        padding: '6px 16px',
        backgroundColor: '#272727',
        color: '#FFFFFF'
      },
      paper4: {
        padding: '6px 16px',
        backgroundColor: '#272727',
        color: '#FFFFFF'
      },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    btn:{
      color: '#FFFFFF',
      
    }
  }));
function Experiences()
{


  
 
    const experienceData = 
    [
        {
            id:"UR", 
            title: "Undergraduate Research",
            date:"March 2020 - Current",
            information: "Started Undergraduate Research Position at the UCF Department of Computer Science where I develp Web and Mobile applications",
            link: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/University_of_Central_Florida_seal.svg/1200px-University_of_Central_Florida_seal.svg.png"
        },
        {
          id:"ACM-W",
          title: "Mentor",
          date: "August 2020 - Current",
          information: "Started Mentoring Underclassmen through ACM-W. Through this I help them adjust to college, become organized, plan class schedules, and get involved on campustarted Mentoring Underclassmen through ACM-W. Through this I help them adjust to college, become organized, plan class schedules, and get involved on campus.",
          link: "https://ucfacmw.org/img/logos/ACM&ACMW-logo.png"
      },
        {
            id:"KnightHacks",
            title: "Lead Hackathon Organizer",
            date: "November 2020 - Current",
            information: "As lead hackathon organizer I am charge of the 36-hour Hackathon hosted annually at UCF. With this role I have created a person goal to make Hackathons more diverse by reaching out to organizations for underepresented groups and more inclusive by making the event more begineer friendly",
            link: "https://club.knighthacks.org/static/knightHacksLogoGold-94df7bdce2a0594a5551f9659074a00c.svg"
        },
        {
          id:"NACME",
            title: "Coorporate Scholar",
            date: "May 2021",
            information: "Some Information About this Thing",
            link: "https://mma.prnewswire.com/media/967123/NACME_Logo.jpg?p=publish"
        },
        {
          id:"UPS",
          title: "Intern",
          date: "June 2021 - August 2021",
          information: "Some Information About this Thing",
          link: "https://1000logos.net/wp-content/uploads/2021/04/UPS-logo.png"
      },
 
    ]
    function GoTo(id)
    {
      console.log("Clicked", id);
      var anchor = document.querySelector("#timeline-cover");
      var element =document.querySelector("#" + id);
      var pos = element.getBoundingClientRect();
      var top = element.offsetTop;
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      console.log(pos.top);
      anchor.scrollTop = pos.top;
      document.getElementById('timeline-cover').scrollTop = 0
  }
  var exp = experienceData;
    function showAlert(experience)
    {
        console.log("Alert");
        toast(experience.information);
    }
    const classes = useStyles();
    return(
        <div class="mt-4">
          

            <ToastContainer autoClose={false}/>
 <Grid container
  direction="column"
  justify="center"
  alignItems="center"
  wrap="nowrap"
  spacing={5}
  >
      <Grid item xs={20}> <div id="experience-title">
      <svg preserveAspectRatio="none" viewBox="0 0 559 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M167.427 21.5947H153.364V31.1162H169.868V37H146.04V1.45312H169.819V7.38574H153.364V15.8574H167.427V21.5947ZM183.76 18.4697L188.203 10.584H195.747L188.228 23.5234L196.064 37H188.496L183.784 28.6992L179.097 37H171.504L179.341 23.5234L171.846 10.584H179.414L183.76 18.4697ZM222.92 24.0361C222.92 28.1051 221.992 31.3685 220.137 33.8262C218.298 36.2676 215.807 37.4883 212.666 37.4883C209.997 37.4883 207.84 36.5605 206.196 34.7051V47.1562H199.141V10.584H205.684L205.928 13.1719C207.637 11.1211 209.867 10.0957 212.617 10.0957C215.872 10.0957 218.403 11.3001 220.21 13.709C222.017 16.1178 222.92 19.4382 222.92 23.6699V24.0361ZM215.864 23.5234C215.864 21.0658 215.425 19.1696 214.546 17.835C213.683 16.5003 212.422 15.833 210.762 15.833C208.548 15.833 207.026 16.6794 206.196 18.3721V29.1875C207.059 30.929 208.597 31.7998 210.811 31.7998C214.18 31.7998 215.864 29.041 215.864 23.5234ZM239.473 37.4883C235.599 37.4883 232.441 36.3001 230 33.9238C227.575 31.5475 226.362 28.3818 226.362 24.4268V23.7432C226.362 21.0902 226.875 18.722 227.9 16.6387C228.926 14.5391 230.374 12.9277 232.246 11.8047C234.134 10.6654 236.283 10.0957 238.691 10.0957C242.305 10.0957 245.145 11.235 247.212 13.5137C249.295 15.7923 250.337 19.0231 250.337 23.2061V26.0869H233.516C233.743 27.8122 234.427 29.1956 235.566 30.2373C236.722 31.279 238.179 31.7998 239.937 31.7998C242.655 31.7998 244.779 30.8151 246.309 28.8457L249.775 32.7275C248.717 34.2249 247.285 35.3968 245.479 36.2432C243.672 37.0732 241.67 37.4883 239.473 37.4883ZM238.667 15.8086C237.267 15.8086 236.128 16.2806 235.249 17.2246C234.386 18.1686 233.833 19.5195 233.589 21.2773H243.403V20.7158C243.371 19.1533 242.948 17.9489 242.134 17.1025C241.32 16.2399 240.164 15.8086 238.667 15.8086ZM269.209 17.2002C268.249 17.07 267.402 17.0049 266.67 17.0049C264.001 17.0049 262.251 17.9082 261.421 19.7148V37H254.365V10.584H261.03L261.226 13.7334C262.642 11.3083 264.603 10.0957 267.109 10.0957C267.891 10.0957 268.623 10.2015 269.307 10.4131L269.209 17.2002ZM280.073 37H272.993V10.584H280.073V37ZM272.578 3.74805C272.578 2.6901 272.928 1.81934 273.628 1.13574C274.344 0.452148 275.312 0.110352 276.533 0.110352C277.738 0.110352 278.698 0.452148 279.414 1.13574C280.13 1.81934 280.488 2.6901 280.488 3.74805C280.488 4.82227 280.122 5.70117 279.39 6.38477C278.674 7.06836 277.721 7.41016 276.533 7.41016C275.345 7.41016 274.385 7.06836 273.652 6.38477C272.936 5.70117 272.578 4.82227 272.578 3.74805ZM298.066 37.4883C294.193 37.4883 291.035 36.3001 288.594 33.9238C286.169 31.5475 284.956 28.3818 284.956 24.4268V23.7432C284.956 21.0902 285.469 18.722 286.494 16.6387C287.52 14.5391 288.968 12.9277 290.84 11.8047C292.728 10.6654 294.876 10.0957 297.285 10.0957C300.898 10.0957 303.739 11.235 305.806 13.5137C307.889 15.7923 308.931 19.0231 308.931 23.2061V26.0869H292.109C292.337 27.8122 293.021 29.1956 294.16 30.2373C295.316 31.279 296.772 31.7998 298.53 31.7998C301.248 31.7998 303.372 30.8151 304.902 28.8457L308.369 32.7275C307.311 34.2249 305.879 35.3968 304.072 36.2432C302.266 37.0732 300.264 37.4883 298.066 37.4883ZM297.261 15.8086C295.861 15.8086 294.722 16.2806 293.843 17.2246C292.98 18.1686 292.427 19.5195 292.183 21.2773H301.997V20.7158C301.965 19.1533 301.541 17.9489 300.728 17.1025C299.914 16.2399 298.758 15.8086 297.261 15.8086ZM319.453 10.584L319.673 13.6357C321.561 11.2757 324.092 10.0957 327.266 10.0957C330.065 10.0957 332.148 10.9176 333.516 12.5615C334.883 14.2054 335.583 16.6631 335.615 19.9346V37H328.56V20.1055C328.56 18.6081 328.234 17.5257 327.583 16.8584C326.932 16.1748 325.85 15.833 324.336 15.833C322.35 15.833 320.861 16.6794 319.868 18.3721V37H312.812V10.584H319.453ZM351.973 31.7998C353.275 31.7998 354.333 31.4417 355.146 30.7256C355.96 30.0094 356.383 29.0573 356.416 27.8691H363.032C363.016 29.6595 362.528 31.3034 361.567 32.8008C360.607 34.2819 359.289 35.4375 357.612 36.2676C355.952 37.0814 354.113 37.4883 352.095 37.4883C348.319 37.4883 345.34 36.292 343.159 33.8994C340.978 31.4906 339.888 28.1702 339.888 23.9385V23.4746C339.888 19.4056 340.97 16.1585 343.135 13.7334C345.299 11.3083 348.27 10.0957 352.046 10.0957C355.35 10.0957 357.995 11.0397 359.98 12.9277C361.982 14.7995 363 17.2979 363.032 20.4229H356.416C356.383 19.0557 355.96 17.9489 355.146 17.1025C354.333 16.2399 353.258 15.8086 351.924 15.8086C350.28 15.8086 349.035 16.4108 348.188 17.6152C347.358 18.8034 346.943 20.7402 346.943 23.4258V24.1582C346.943 26.8763 347.358 28.8294 348.188 30.0176C349.019 31.2057 350.28 31.7998 351.973 31.7998ZM379.219 37.4883C375.345 37.4883 372.188 36.3001 369.746 33.9238C367.321 31.5475 366.108 28.3818 366.108 24.4268V23.7432C366.108 21.0902 366.621 18.722 367.646 16.6387C368.672 14.5391 370.12 12.9277 371.992 11.8047C373.88 10.6654 376.029 10.0957 378.438 10.0957C382.051 10.0957 384.891 11.235 386.958 13.5137C389.041 15.7923 390.083 19.0231 390.083 23.2061V26.0869H373.262C373.49 27.8122 374.173 29.1956 375.312 30.2373C376.468 31.279 377.925 31.7998 379.683 31.7998C382.401 31.7998 384.525 30.8151 386.055 28.8457L389.521 32.7275C388.464 34.2249 387.031 35.3968 385.225 36.2432C383.418 37.0732 381.416 37.4883 379.219 37.4883ZM378.413 15.8086C377.013 15.8086 375.874 16.2806 374.995 17.2246C374.132 18.1686 373.579 19.5195 373.335 21.2773H383.149V20.7158C383.117 19.1533 382.694 17.9489 381.88 17.1025C381.066 16.2399 379.91 15.8086 378.413 15.8086ZM408.418 29.7002C408.418 28.8376 407.987 28.1621 407.124 27.6738C406.278 27.1693 404.91 26.7217 403.022 26.3311C396.74 25.0127 393.599 22.3434 393.599 18.3232C393.599 15.9795 394.567 14.0264 396.504 12.4639C398.457 10.8851 401.004 10.0957 404.146 10.0957C407.498 10.0957 410.176 10.8851 412.178 12.4639C414.196 14.0426 415.205 16.0934 415.205 18.6162H408.149C408.149 17.6071 407.824 16.777 407.173 16.126C406.522 15.4587 405.505 15.125 404.121 15.125C402.933 15.125 402.013 15.3936 401.362 15.9307C400.711 16.4678 400.386 17.1514 400.386 17.9814C400.386 18.7627 400.752 19.3975 401.484 19.8857C402.233 20.3577 403.486 20.7728 405.244 21.1309C407.002 21.4727 408.483 21.8633 409.688 22.3027C413.415 23.6699 415.278 26.0381 415.278 29.4072C415.278 31.8161 414.245 33.7692 412.178 35.2666C410.111 36.7477 407.441 37.4883 404.17 37.4883C401.956 37.4883 399.987 37.0977 398.262 36.3164C396.553 35.5189 395.21 34.4365 394.233 33.0693C393.257 31.6859 392.769 30.1966 392.769 28.6016H399.458C399.523 29.8548 399.987 30.8151 400.85 31.4824C401.712 32.1497 402.868 32.4834 404.316 32.4834C405.667 32.4834 406.685 32.2311 407.368 31.7266C408.068 31.2057 408.418 30.5303 408.418 29.7002Z" fill="#FFFCFC"/>
<rect y="57" width="559" height="10" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="279.5" y1="57" x2="151.49" y2="-88.7832" gradientUnits="userSpaceOnUse">
<stop offset="0.078125" stop-color="#1DA1F2"/>
<stop offset="0.40625" stop-color="#A749BC"/>
<stop offset="0.614583" stop-color="#D12784"/>
<stop offset="0.880208" stop-color="#D62C49"/>
</linearGradient>
</defs>
</svg>

          </div> </Grid>
          <Grid item>
        <div  class="text-2xl md:text-l sm:text-l inline-block text-gray-50 font-bold no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 m-2 transform hover:scale-125 duration-300 ease-in-out" > UCF </div>
        <div  onClick={() => GoTo("ACM-W")} class="text-2xl md:text-l sm:text-l inline-block text-gray-50 font-bold no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 m-2  duration-300 ease-in-out"> ACM-W </div>
        <text onClick={() => GoTo("KnightHacks")}  class="k text-2xl md:text-l sm:text-l inline-block text-gray-50 font-bold no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 m-2 ease-in-out"> KnightHacks </text>
        <text  onClick={() =>GoTo("NACME")} class="inline-block text-2xl md:text-l sm:text-l text-gray-50 font-bold no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 m-2 ease-in-out"> NACME </text>
        <text   onClick={() => GoTo("UPS")} class="inline-block k text-2xl md:text-l sm:text-l text-gray-50 font-bold no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 m-2 ease-in-out"> UPS </text>

          </Grid>
          <Grid item xs={20}>
            <Toolbar id="timeline-cover">
          <div id="timeline">
     
          <div class="container">
          <div
            class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
          >
            
           {/* Right Start */}
           <Toolbar id={experienceData[4].id}/>
           <div id="test2" class="flex flex-row-reverse md:contents">
              <div
                class="bg-transparent col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <div class="max-h-96 max-w-96 overflow-ellipsis overflow-hidden ..."> 
                <text class="font-bold text-2xl text-white"> UPS </text>
                <img src={experienceData[4].link} className="object-scale-down h-48 w-full"/>
                <div className="font-bold text-2xl text-center max-w-full overflow-ellipsis overflow-hidden max-h-full mx-4 space-y-2 bg-transparent text-white "> {experienceData[4].title}
      </div>
      <text className="italic font-bold text-x"> {experienceData[4].date} </text>
     
                </div>
                 
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1  mb-2 mt-2 absolute top-7  bg-white pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-0  rounded-full text-center bg-gradient-to-r from-purple-600 via-darkPink to-pink-500 shadow"
                ></div>
              </div>
            </div>
            
            {/*Left Start*/}
            <Toolbar id={experienceData[3].id}/>
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1  absolute top-10  mb-2 mt-5  bg-white pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-0 mt-5  rounded-full text-center bg-gradient-to-r from-purple-600 via-darkPink to-pink-500 shadow"
                ></div>
                
              </div>
              <div
                class="bg-transparent col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md text-center "
              >
               <div class="max-h-96 max-w-96 overflow-ellipsis overflow-hidden ..."> 
                <text class="font-bold text-2xl text-white"> NACME </text>
                <img src={experienceData[3].link} className="object-scale-down h-48 w-full"/>
                <div className="font-bold text-2xl text-center max-w-full overflow-ellipsis overflow-hidden max-h-full mx-4 space-y-2 bg-transparent text-white "> {experienceData[3].title}
      </div>
      <text className="italic font-bold text-x"> {experienceData[3].date} </text>
     
                </div>
              </div>
            </div>
            <Toolbar id={experienceData[2].id}/>
            <div class="flex flex-row-reverse md:contents">
              <div
                class="bg-transparent col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
              <div class="max-h-96 max-w-96 overflow-ellipsis overflow-hidden ..."> 
                <text class="font-bold text-2xl text-white"> KnigtHacks </text>
                <img src={experienceData[2].link} className="object-scale-down h-48 w-full"/>
                <div className="font-bold text-2xl text-center truncate  max-w-full max-h-full mx-4 space-y-2 bg-transparent text-white "> {experienceData[2].title}
      </div>
      <text className="italic font-bold text-x"> {experienceData[2].date} </text>
     
                </div>
                 
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                <div class="h-3/4 w-1  mb-5 mt-5 absolute top-10  bg-white "></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-10  rounded-full text-center bg-gradient-to-r from-purple-600 via-darkPink to-pink-500 shadow"
                ></div>
              </div>
            </div>
            
            {/*Left Start*/}
            <Toolbar id={experienceData[1].id}/>
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1  mb-3 mt-5 absolute top-5  bg-white "></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-5  rounded-full text-center bg-gradient-to-r from-purple-600 via-darkPink to-pink-500 shadow"
                ></div>
                
              </div>
              <div
                class="bg-transparent col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md text-center "
              >
                <div class="max-h-96 max-w-96 overflow-ellipsis overflow-hidden ..."> 
                <text class="font-bold text-2xl text-white"> ACM-W </text>
                <img src={experienceData[1].link} className="object-scale-down h-48 w-full"/>
                <div className="font-bold text-2xl text-center truncate  max-w-full max-h-full mx-4 space-y-2 bg-transparent text-white "> {experienceData[1].title}
      </div>
      <text className="italic font-bold text-x"> {experienceData[1].date} </text>
     
                </div>
              </div>
            </div>
            <Toolbar id={experienceData[0].id}/>
            <div class="flex flex-row-reverse md:contents">
              <div
                class="bg-transparent col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
              <div class="max-h-96 max-w-96 overflow-ellipsis overflow-hidden ..."> 
                <text class="font-bold text-2xl text-white"> UCF</text>
                <img src={experienceData[0].link} className="object-scale-down h-48 w-full"/>
                <div className="font-bold text-2xl text-center truncate  max-w-full max-h-full mx-4 space-y-2 bg-transparent text-white "> {experienceData[0].title}
      </div>
      <text className="italic font-bold text-x"> {experienceData[0].date} </text>
     
                </div>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1  mb-2 mt-4 absolute top-16  bg-white pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-10  rounded-full text-center bg-gradient-to-r from-purple-600 via-darkPink to-pink-500 shadow"
                ></div>
              </div>
            </div>
           
          </div>
        </div>
            

         </div>
         </Toolbar>
          </Grid>
    </Grid>

        </div>
    );
}
export default Experiences;
