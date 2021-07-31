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
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
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
        width:"20rem",
      },
      [theme.breakpoints.up('md')]: {
        width:"rem",
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
            information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec eros gravida, blandit lorem at, sollicitudin quam. Curabitur eleifend ante at metus rutrum, non faucibus felis pretium. Cras malesuada lacus vel orci aliquam, quis ultricies nisl sagittis. Morbi magna nunc, egestas at placerat a, tempor ac est. Pellentesque lacinia, nulla et rutrum semper, leo elit sodales nisi, non accumsan ex dolor ut ante. Proin a tellus dui.",
            link: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/University_of_Central_Florida_seal.svg/1200px-University_of_Central_Florida_seal.svg.png"
        },
        {
          id:"ACM-W",
          title: "Mentor",
          date: "August 2020 - Current",
          information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec eros gravida, blandit lorem at, sollicitudin quam. Curabitur eleifend ante at metus rutrum, non faucibus felis pretium. Cras malesuada lacus vel orci aliquam, quis ultricies nisl sagittis. Morbi magna nunc, egestas at placerat a, tempor ac est. Pellentesque lacinia, nulla et rutrum semper, leo elit sodales nisi, non accumsan ex dolor ut ante. Proin a tellus dui.",
          link: "https://ucfacmw.org/img/logos/ACM&ACMW-logo.png"
      },
        {
            id:"KnightHacks",
            title: "Lead Hackathon Organizer",
            date: "November 2020 - Current",
           information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec eros gravida, blandit lorem at, sollicitudin quam. Curabitur eleifend ante at metus rutrum, non faucibus felis pretium. Cras malesuada lacus vel orci aliquam, quis ultricies nisl sagittis. Morbi magna nunc, egestas at placerat a, tempor ac est. Pellentesque lacinia, nulla et rutrum semper, leo elit sodales nisi, non accumsan ex dolor ut ante. Proin a tellus dui.",
            link: "https://club.knighthacks.org/static/knightHacksLogoGold-94df7bdce2a0594a5551f9659074a00c.svg"
        },
        {
          id:"NACME",
            title: "Coorporate Scholar",
            date: "May 2021",
            information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec eros gravida, blandit lorem at, sollicitudin quam. Curabitur eleifend ante at metus rutrum, non faucibus felis pretium. Cras malesuada lacus vel orci aliquam, quis ultricies nisl sagittis. Morbi magna nunc, egestas at placerat a, tempor ac est. Pellentesque lacinia, nulla et rutrum semper, leo elit sodales nisi, non accumsan ex dolor ut ante. Proin a tellus dui.",
            link: "https://mma.prnewswire.com/media/967123/NACME_Logo.jpg?p=publish"
        },
        {
          id:"UPS",
          title: "Intern",
          date: "June 2021 - August 2021",
          information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec eros gravida, blandit lorem at, sollicitudin quam. Curabitur eleifend ante at metus rutrum, non faucibus felis pretium. Cras malesuada lacus vel orci aliquam, quis ultricies nisl sagittis. Morbi magna nunc, egestas at placerat a, tempor ac est. Pellentesque lacinia, nulla et rutrum semper, leo elit sodales nisi, non accumsan ex dolor ut ante. Proin a tellus dui.",
          link: "https://1000logos.net/wp-content/uploads/2021/04/UPS-logo.png"
      },
      {
        id:"UPS Hackathon",
        title: "Participant",
        date: "June 2021 - August 2021",
        information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec eros gravida, blandit lorem at, sollicitudin quam. Curabitur eleifend ante at metus rutrum, non faucibus felis pretium. Cras malesuada lacus vel orci aliquam, quis ultricies nisl sagittis. Morbi magna nunc, egestas at placerat a, tempor ac est. Pellentesque lacinia, nulla et rutrum semper, leo elit sodales nisi, non accumsan ex dolor ut ante. Proin a tellus dui.",
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
      var el = document.querySelector("#experiences");
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
              <div class="h-auto  grid grid-rows-2 items-center justify-center grid-flow-col gap-4 text-center">
  <div class="text-gradient font-extrabold text-white text-4xl font-bold"> Timeline <div>
      </div> <div class="bg-gradient-to-r from-darkPink via-darkOrange to-darkGreen mt-2 h-3  w-96">  </div> </div>
      </div>
{/* <div class="flex flex-row items-center justify-center">
<text   onClick={() => GoTo("UPS")} class="inline-block k text-lg  text-gray-50 font-bold no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 m-2 ease-in-out"> UPS Hackathon </text>
          <text   onClick={() => GoTo("UPS")} class="inline-block k text-lg  text-gray-50 font-bold no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 m-2 ease-in-out"> UPS </text>
          <text  onClick={() =>GoTo("NACME")} class="inline-block text-lg  text-gray-50 font-bold no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 m-2 ease-in-out"> NACME </text>
          <text onClick={() => GoTo("KnightHacks")}  class="k text-lg inline-block text-gray-50 font-bold no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 m-2 ease-in-out"> KnightHacks </text>
          <div  onClick={() => GoTo("ACM-W")} class="text-lginline-block text-gray-50 font-bold no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 m-2  duration-300 ease-in-out"> ACM-W </div>
        <div  class="text-lg inline-block text-gray-50 font-bold no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 m-2 transform hover:scale-125 duration-300 ease-in-out" > UCF </div>
</div> */}
<div id="timeline">


<VerticalTimeline>
            <VerticalTimelineElement
    className="vertical-timeline-element--work "
    iconStyle={{ background: 'rgb(178, 179, 64)', color: '#fff' }}
    date="June 2021 - August 2021"
  >
     <Toolbar id={"UPS-Hackathon"}/>
     <div className="h-auto w-auto">
     <img src={experienceData[5].link} class="object-contain h-48 w-full "/>
     </div>
     <div class="mt-2">

         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> JavaScript </span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> React </span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Figma </span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> CSS </span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> HTML </span>

     </div>
        
    <h3 className="vertical-timeline-element-title font-bold">{experienceData[5].id}</h3>
    <h4 className="vertical-timeline-element-subtitle font-bold">{experienceData[5].title}</h4>
    <p>
    <ul class="list-disc text-left ml-3">
      <li> Worked with 3 other employees to create a customer experience related project.</li>
      <li> Developed a UX Wireframe to present a prototype of the solution</li>
      <li> Awarded Best Foot Forward for having the highest User Experience and Presentation Score</li>
     <li> Delivered presentations to the CEO, CIEO, and Vice Presidents of the company.</li>

      </ul>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    iconStyle={{ background: 'rgb(178, 179, 64)', color: '#fff' }}
    date="June 2021 - August 2021"
  >
     <Toolbar id={experienceData[4].id}/>
     <div className="h-auto w-auto">
     <img src={experienceData[4].link} class="object-contain h-48 w-full "/>
     </div>
     <div class="mt-2">
     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Python </span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> JavaScript </span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> CSS </span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> HTML </span>

     </div>
        
    <h3 className="vertical-timeline-element-title font-bold">{experienceData[4].id}</h3>
    <h4 className="vertical-timeline-element-subtitle font-bold">{experienceData[4].title}</h4>
    <p>
    <ul class="list-disc text-left ml-3">
      <li> Participated in a project based assignment within the UPS Development and Support Center (DSC). The leearning experiences included assisting in the implementtation of Buildings and Systems Engineering methodolgies and Application Devbelopment - developing global applications and data analysis.</li>
      <li> Worked with the Linux team on developing Buildings and Systems Engineering tools for managing Linux.Optimization of job setups, identifying and helping solve operation performance problems, and measuring and reporting processes and results.</li>
      </ul>
    </p>
  </VerticalTimelineElement>
 
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May 2021"
    iconStyle={{ background: 'rgb(178, 179, 64)', color: '#fff' }}

  >
     <Toolbar id={experienceData[3].id}/>
     <div className="h-auto w-auto">
       
     <img src={experienceData[3].link} class="object-contain h-48 w-full "/>
     </div>
     <div class="mt-2">
     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Diversity and Inclusion </span>
     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Professional Development </span>
     </div>
    
    <h3 className="vertical-timeline-element-title font-bold">{experienceData[3].id}</h3>
    <h4 className="vertical-timeline-element-subtitle font-bold">{experienceData[3].title}</h4>
    <p>
    <ul class="list-disc text-left ml-3">
      <li> Attend weekly workshops on professional development and diversity and inclusion</li>
      <li> Selected to be a NACME Coorporate Scholar by UPS.</li>
      </ul>
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="November 2020 - Present "
    iconStyle={{ background: 'rgb(178, 179, 64)', color: '#fff' }}
  
  >
    <Toolbar id={experienceData[2].id}/>
    <div className="h-auto w-auto">
     <img src={experienceData[2].link} class="object-contain h-48 w-full "/>
     </div>
     <div class="mt-2">
     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Diversity and Inclusion </span>
     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Leadership </span>
     </div>
    
    <h3 className="vertical-timeline-element-title font-bold ">{experienceData[2].id}</h3>
    <h4 className="vertical-timeline-element-subtitle font-bold">{experienceData[2].title}</h4>
    <p>
    <ul class="list-disc text-left ml-3">
      <li> Create and execute a 36 hour hackathon that typically hosts 600+ students by creating spring tasks to lead a team of 20+ students</li>
      <li> Worked on making project development more inclusive by reaching out to multiple registered student organizations and making the event more begineer friendly</li>
      </ul>
    </p>
  </VerticalTimelineElement>
 
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="August 2020 - Present"
    iconStyle={{ background: 'rgb(178, 179, 64)', color: '#fff' }}
    
  >
     <Toolbar id={experienceData[1].id}/>
     <div className="h-auto w-auto">
     <img src={experienceData[1].link} class="object-contain h-48 w-full "/>
     </div>
     <div class="mt-2">
     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Diversity and Inclusion </span>
     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Leadership </span>
     </div>
     <h3 className="vertical-timeline-element-title font-bold">{experienceData[1].id}</h3>
    <h4 className="vertical-timeline-element-subtitle font-bold">{experienceData[1].title} </h4>
    <p>
    <ul class="list-disc text-left ml-3">
      <li> Over two semesters I mentored a total of five freshmen majoring in computer science or statistics</li>
      <li> Provided direct 1-on-1 support for internship preperation and organization. </li>
      
      </ul>
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="March 2020 "
    iconStyle={{ background: 'rgb(178, 179, 64)', color: '#fff' }}
   
  >
    <Toolbar id={experienceData[0].id}/>
    <div className="h-auto w-auto">
     <img src={experienceData[0].link} class="object-contain h-48 w-full "/>
     </div>
     <div class="mt-2">
     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Web Development </span>
     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> App Development </span>
     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> React </span>
     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> React-Native </span>
     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> JS,CSS,HTML </span>
     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Swift,Java </span>
     </div>
    <h3 className="vertical-timeline-element-title font-bold"> Undergraduate Researcher </h3>
    <h4 className="vertical-timeline-element-subtitle font-bold">{experienceData[0].title} </h4>
    <p>
    <ul class="list-disc text-left ml-3">
      <li> Developed a web application that displays data and allows user interaction to modify data.</li>
      <li> Developed a mobile application that displays and data and allows user interaction to modify data</li>
      <li> Integrated simply user interface to efficiently allow quick access to application features.</li>
      <li> Worked on integrating LiDar data into the Unreal Engine 4.</li>
      </ul>
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>
        </div>
    );
}
export default Experiences;
