import "./Projects.css"
import React, {useState} from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Container from '@material-ui/core/Container';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import WebIcon from '@material-ui/icons/Web';
import { Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Paper from '@material-ui/core/Paper';
import ProjectInfo from "./ProjectsInfo";
import Typography from '@material-ui/core/Typography';
import { projectInformation, allProjects}  from "./projects_info";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor:"#272727",
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: "#FFFFFF",
  },
  titleBar: {
    background:"#272727",
    color: "#FFFFFF",
  },
  media: {
    height: 140,
  },
  paper:
  {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    backgroundColor:"#272727",
    color: "#FFFFFF",
  },
  chip:
  {
    backgroundColor:"#FFFFFF",
    margin: theme.spacing(0.5),
  }
}));
var web = [];
var ml = [];
var other = [];

allProjects.map((data)=>
{
  if(data.type === "Web Development")
  {
    web.push(data);
  }
  if(data.type === "Machine Learning")
  {
    ml.push(data);
  }
  else
  {
    other.push(data);
  }
  
})
function titleDiv(data)
{
  if(data.type === "Web Development")
    return 
    {

    }
} 
function Projects()
{
  
    const [info,setShowInfo] = useState(projectInformation[0]);
    const [open, setOpen] = useState(false)
    const [openList, setOpenList] = useState(false)
    var displayedData = projectInformation[0];

    function goToElement(e)
    {
      
      var name = e.target.innerHTML.replace(/\s/g, '');
      console.log(name);
      var element = document.querySelector("#" + name);
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      setOpenList(false);
      element.classList.add('highlight');
  
      setTimeout(() => element.classList.remove('highlight'), 3000)
    
    }

    function getProjectInfo(data)
    {
      setOpen(true);
      setShowInfo(data);
      console.log(info);
    }
    const languages = [
        {x: "Java"},
        {x: "Java"},
        {x: "Java"},
    ]
    const classes = useStyles();
    return(
    <div class="mt-4"> 
    <div onClick={() => {
      console.log("open");
      setOpenList(true)}}class="shadow-2xl text-center sticky text-pink-500 hover:text-pink-800 right-0 ml-4 rounded-full h-12 w-12 z-40 top-20 bg-white ...">
    <svg class="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-current my-auto mx-auto " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
</div>
<div id="projectInfo">
    <Transition.Root show={openList} as={Fragment}>
      <Dialog as="div" static className="fixed inset-0 overflow-hidden" open={openList} onClose={setOpenList}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 mt-14  -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpenList(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full mt-14 flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="uppercase text-1xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-darkPink to-blue-500 ">{info.title}
            
                  <div class="text-center">
        <text class="uppercase text-2xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-darkPink to-blue-500 ">
        Web Development Projects
        </text>
       <div class="ml-3">
       <ul class=" list-disc text-1xl text-left font-bold">
        {web.map((data) =>
        
        <li>
          <button onClick={(e) => {
            goToElement(e);
            setOpenList(false);
          }}>
          <text class="text-black text-md font-base hover:text-pink-500"> {data.title} </text>
          </button>
        </li>
      
        )}
        </ul>
       </div>
      
      </div>
      <div class="text-center">
        <text class="uppercase text-2xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-darkPink to-blue-500 ">
        Machine Learning Projects
        </text>
       <div class="ml-3">
       <ul class=" list-disc text-1xl text-left font-bold">
        {web.map((data) =>
        
        <li>
   <text class="text-black text-md font-base"> {data.title} </text>
        </li>
      
        )}
        </ul>
       </div>
      
      </div>
      <div class="text-center">
        <text class="uppercase text-2xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-darkPink to-blue-500 ">
        Other Projects
        </text>
       <div class="ml-3">
       <ul class=" list-disc text-1xl text-left font-bold">
        {other.map((data) =>
        
        <li>
   <text class="text-black text-md font-base"> {data.title} </text>
        </li>
      
        )}
        </ul>
       </div>
      
      </div><div class="text-center">
        <text class="uppercase text-2xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-darkPink to-blue-500 ">
        Web Development Projects
        </text>
       <div class="ml-3">
       <ul class=" list-disc text-1xl text-left font-bold">
        {web.map((data) =>
        
        <li>
          <button class={data.title} onClick={(e) => {
            console.log(e);
          
            goToElement(e);
            setOpenList(false);
          }}>
          <text class="text-black text-md font-base hover:text-pink-500"> {data.title} </text>
          </button>
        </li>
      
        )}
        </ul>
       </div>
      
      </div>
      <div class="text-center">
        <text class="uppercase text-2xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-darkPink to-blue-500 ">
        Machine Learning Projects
        </text>
       <div class="ml-3">
       <ul class=" list-disc text-1xl text-left font-bold">
        {web.map((data) =>
        
        <li>
   <text class="text-black text-md font-base"> {data.title} </text>
        </li>
      
        )}
        </ul>
       </div>
      
      </div>
      <div class="text-center">
        <text class="uppercase text-2xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-darkPink to-blue-500 ">
        Other Projects
        </text>
       <div class="ml-3">
       <ul class=" list-disc text-1xl text-left font-bold">
        {other.map((data) =>
        
        <li>
   <text class="text-black text-md font-base"> {data.title} </text>
        </li>
      
        )}
        </ul>
       </div>
      
      </div>
       </Dialog.Title>
                  </div>
                  <div className="overflow-y-auto  relative flex-1 px-4 sm:px-6 text-center mb-20 ">
                    {/* Replace with your content */}
                    {/* <div class="grid grid-cols-3 gap-4 ">
                        <div class="col-span-3 text-center">
                       
                        {info.languages.map((lan) => 
       <Chip size="small" label={lan}/>
      )}
                        </div>
                        <div class="bg-red-500 w-1/2 h-1/2"></div>
                        <div class="text-center">3</div>
                        <div class="col-span-2 ...">4</div>
                        <div class="...">5</div>
                        <div class="...">6</div>
                        <div class="col-span-2 ...">7</div>
                      </div> */}
                      <text class=" text-lg font-bold text-center font-extrabold"> TechStack </text>
                     
                       <div class="flex flex-wrap justify-center">
         {info.languages.map((lan) => 
         
         <div class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-gray-700 bg-gray-100 border border-gray-300 ">
         <div class="text-md font-bold leading-none max-w-full flex-initial"> {lan} </div>
     </div>
      )}
      </div>
      <img src={info.img}/>
      
                      <text class="text-lg font-bold text-center font-extrabold"> Summary </text>
                      <br/>
                      <text class=" text-sm  text-left"> {info.summary} </text>
                      <br/>
                      <text class="text-lg font-bold text-center font-extrabold"> Skills Gained </text>
                      <br/>
                      <text class=" text-sm"> {info.learned} </text>
                      
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <div className="h-full" aria-hidden="true" />
                    </div>
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
    <div id="projectInfo">
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" static className="fixed inset-0 overflow-hidden" open={open} onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 mt-14  -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full mt-14 flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="uppercase text-1xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-darkPink to-blue-500 ">{info.title}
                    {/* <div class="h-10 bg-gradient-to-br from-purple-600 to-darkPink text-center text-white font-extrabold text-xl">
        {info.type}
          </div> */}
                   
                    <div class="grid grid-cols-4 gap-0 mt-2">
  <div>{(() => {
        if (info.github) {
          return (
            <a id="link" class="inline-block text-darkPink no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
            href={info.github}
          >
              <svg  class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            
          </a>
          )
        }
        else
        {
          return(
            <div id="link" class="inline-block text-gray-300  text-center h-10 p-0 md:h-auto md:p-4 transform"
           
          >
        <svg  class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            
          </div>
          )
        } })()}</div>
  <div>{(() => {if (info.link) {
          return (
            <a id="link" class="inline-block text-darkPink no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
            href={info.link}
          >
             <svg  class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm22 22h-20v-16h20v16zm-1-15h-18v14h18v-14zm-10 5.649l-3.229 1.351 3.229 1.347v1.653l-5-2.201v-1.599l5-2.2v1.649zm7 2.15l-5 2.201v-1.653l3.229-1.347-3.229-1.351v-1.649l5 2.201v1.598z"/></svg>
            
          </a>
          )
        } 
        else
        {
          return(
            <div id="link" class="inline-block text-gray-300  text-center h-10 p-0 md:h-auto md:p-4 transform"
           
          >
          <svg  class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm22 22h-20v-16h20v16zm-1-15h-18v14h18v-14zm-10 5.649l-3.229 1.351 3.229 1.347v1.653l-5-2.201v-1.599l5-2.2v1.649zm7 2.15l-5 2.201v-1.653l3.229-1.347-3.229-1.351v-1.649l5 2.201v1.598z"/></svg>
            
          </div>
          )
        }
      })()}</div>
  <div>{(() => {
        if (info.site){
          return (
            <a id="link" class="inline-block text-darkPink no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
            href={info.site}
          >
            <svg  class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z"/></svg>
            
          </a>
          )
        }
        else
        {
          return(
            <div id="link" class="inline-block text-gray-300  text-center h-10 p-0 md:h-auto md:p-4 transform"
           
          >
            <svg  class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z"/></svg>
            
          </div>
          )
        }
      })()}</div>
  <div> {(() => {
        if (info.inspo !== undefined) {
          return (
           <div>
              <a  class="inline-block text-darkPink no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"  href={info.inspo}>
                < svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-5.572c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm-3.743 1.294l-1.04-1.94 1.208-.648 1.037 1.933c-.418.181-.822.401-1.205.655zm10.586 1.735l1.942-1.394.799 1.115-2.054 1.473c-.191-.43-.423-.827-.687-1.194zm-3.01-2.389l1.038-1.934 1.208.648-1.041 1.941c-.382-.254-.786-.473-1.205-.655zm-10.068 3.583l-2.054-1.472.799-1.115 1.942 1.393c-.264.366-.495.763-.687 1.194zm13.707 6.223l2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zm-13.108 1.155l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zm-1.178-3.676h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z"/></svg> </a>
                      </div>
          )
          }
          else
          {
            return(
              <div id="link" class="inline-block text-gray-300  text-center h-10 p-0 md:h-auto md:p-4 transform"
             
            >
            < svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-5.572c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm-3.743 1.294l-1.04-1.94 1.208-.648 1.037 1.933c-.418.181-.822.401-1.205.655zm10.586 1.735l1.942-1.394.799 1.115-2.054 1.473c-.191-.43-.423-.827-.687-1.194zm-3.01-2.389l1.038-1.934 1.208.648-1.041 1.941c-.382-.254-.786-.473-1.205-.655zm-10.068 3.583l-2.054-1.472.799-1.115 1.942 1.393c-.264.366-.495.763-.687 1.194zm13.707 6.223l2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zm-13.108 1.155l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zm-1.178-3.676h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z"/></svg> 
              
            </div>
            )
          }
      })()} </div>
</div>
<div>
        </div>
       </Dialog.Title>
                  </div>
                  <div className="overflow-y-auto  relative flex-1 px-4 sm:px-6 text-center mb-20 ">
                    {/* Replace with your content */}
                    {/* <div class="grid grid-cols-3 gap-4 ">
                        <div class="col-span-3 text-center">
                       
                        {info.languages.map((lan) => 
       <Chip size="small" label={lan}/>
      )}
                        </div>
                        <div class="bg-red-500 w-1/2 h-1/2"></div>
                        <div class="text-center">3</div>
                        <div class="col-span-2 ...">4</div>
                        <div class="...">5</div>
                        <div class="...">6</div>
                        <div class="col-span-2 ...">7</div>
                      </div> */}
                      <text class=" text-lg font-bold text-center font-extrabold"> TechStack </text>
                     
                       <div class="flex flex-wrap justify-center">
         {info.languages.map((lan) => 
         
         <div class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-gray-700 bg-gray-100 border border-gray-300 ">
         <div class="text-md font-bold leading-none max-w-full flex-initial"> {lan} </div>
     </div>
      )}
      </div>
      <img src={info.img}/>
      
                      <text class="text-lg font-bold text-center font-extrabold"> Summary </text>
                      <br/>
                      <text class=" text-sm  text-left"> {info.summary} </text>
                      <br/>
                      <text class="text-lg font-bold text-center font-extrabold"> Skills Gained </text>
                      <br/>
                      <text class=" text-sm"> {info.learned} </text>
                      
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <div className="h-full" aria-hidden="true" />
                    </div>
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
      <Grid container
  direction="column"
  justify="center"
  alignItems="center"
  wrap="nowrap"
  spacing={5}>
      <Grid item xs={0}>
          <div id="Project-Title">
          <svg preserveAspectRatio="none" viewBox="0 0 559 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M197.163 24.4756V37H189.839V1.45312H203.706C206.375 1.45312 208.719 1.94141 210.737 2.91797C212.772 3.89453 214.334 5.28613 215.425 7.09277C216.515 8.88314 217.061 10.9258 217.061 13.2207C217.061 16.7038 215.864 19.4544 213.472 21.4727C211.095 23.4746 207.799 24.4756 203.584 24.4756H197.163ZM197.163 18.543H203.706C205.643 18.543 207.116 18.0872 208.125 17.1758C209.15 16.2643 209.663 14.9622 209.663 13.2695C209.663 11.528 209.15 10.1201 208.125 9.0459C207.1 7.97168 205.684 7.41829 203.877 7.38574H197.163V18.543ZM236.494 17.2002C235.534 17.07 234.688 17.0049 233.955 17.0049C231.286 17.0049 229.536 17.9082 228.706 19.7148V37H221.65V10.584H228.315L228.511 13.7334C229.927 11.3083 231.888 10.0957 234.395 10.0957C235.176 10.0957 235.908 10.2015 236.592 10.4131L236.494 17.2002ZM237.935 23.5479C237.935 20.9274 238.439 18.5918 239.448 16.541C240.457 14.4902 241.906 12.9033 243.794 11.7803C245.698 10.6572 247.904 10.0957 250.41 10.0957C253.975 10.0957 256.88 11.1862 259.126 13.3672C261.388 15.5482 262.65 18.5104 262.91 22.2539L262.959 24.0605C262.959 28.1133 261.828 31.3685 259.565 33.8262C257.303 36.2676 254.268 37.4883 250.459 37.4883C246.65 37.4883 243.607 36.2676 241.328 33.8262C239.066 31.3848 237.935 28.0645 237.935 23.8652V23.5479ZM244.99 24.0605C244.99 26.5671 245.462 28.4876 246.406 29.8223C247.35 31.1406 248.701 31.7998 250.459 31.7998C252.168 31.7998 253.503 31.1488 254.463 29.8467C255.423 28.5283 255.903 26.4287 255.903 23.5479C255.903 21.0902 255.423 19.1859 254.463 17.835C253.503 16.484 252.152 15.8086 250.41 15.8086C248.685 15.8086 247.35 16.484 246.406 17.835C245.462 19.1696 244.99 21.2448 244.99 24.0605ZM274.775 10.584V38.4404C274.775 41.3538 274.002 43.6162 272.456 45.2275C270.91 46.8551 268.68 47.6689 265.767 47.6689C264.546 47.6689 263.382 47.5306 262.275 47.2539V41.6631C263.122 41.8096 263.862 41.8828 264.497 41.8828C266.629 41.8828 267.695 40.7516 267.695 38.4893V10.584H274.775ZM267.134 3.74805C267.134 2.6901 267.484 1.81934 268.184 1.13574C268.9 0.452148 269.868 0.110352 271.089 0.110352C272.31 0.110352 273.27 0.452148 273.97 1.13574C274.686 1.81934 275.044 2.6901 275.044 3.74805C275.044 4.82227 274.678 5.70117 273.945 6.38477C273.229 7.06836 272.277 7.41016 271.089 7.41016C269.901 7.41016 268.94 7.06836 268.208 6.38477C267.492 5.70117 267.134 4.82227 267.134 3.74805ZM292.451 37.4883C288.577 37.4883 285.42 36.3001 282.979 33.9238C280.553 31.5475 279.341 28.3818 279.341 24.4268V23.7432C279.341 21.0902 279.854 18.722 280.879 16.6387C281.904 14.5391 283.353 12.9277 285.225 11.8047C287.113 10.6654 289.261 10.0957 291.67 10.0957C295.283 10.0957 298.123 11.235 300.19 13.5137C302.274 15.7923 303.315 19.0231 303.315 23.2061V26.0869H286.494C286.722 27.8122 287.406 29.1956 288.545 30.2373C289.701 31.279 291.157 31.7998 292.915 31.7998C295.633 31.7998 297.757 30.8151 299.287 28.8457L302.754 32.7275C301.696 34.2249 300.264 35.3968 298.457 36.2432C296.65 37.0732 294.648 37.4883 292.451 37.4883ZM291.646 15.8086C290.246 15.8086 289.106 16.2806 288.228 17.2246C287.365 18.1686 286.812 19.5195 286.567 21.2773H296.382V20.7158C296.349 19.1533 295.926 17.9489 295.112 17.1025C294.299 16.2399 293.143 15.8086 291.646 15.8086ZM318.33 31.7998C319.632 31.7998 320.69 31.4417 321.504 30.7256C322.318 30.0094 322.741 29.0573 322.773 27.8691H329.39C329.373 29.6595 328.885 31.3034 327.925 32.8008C326.965 34.2819 325.646 35.4375 323.97 36.2676C322.31 37.0814 320.47 37.4883 318.452 37.4883C314.676 37.4883 311.698 36.292 309.517 33.8994C307.336 31.4906 306.245 28.1702 306.245 23.9385V23.4746C306.245 19.4056 307.327 16.1585 309.492 13.7334C311.657 11.3083 314.627 10.0957 318.403 10.0957C321.707 10.0957 324.352 11.0397 326.338 12.9277C328.34 14.7995 329.357 17.2979 329.39 20.4229H322.773C322.741 19.0557 322.318 17.9489 321.504 17.1025C320.69 16.2399 319.616 15.8086 318.281 15.8086C316.637 15.8086 315.392 16.4108 314.546 17.6152C313.716 18.8034 313.301 20.7402 313.301 23.4258V24.1582C313.301 26.8763 313.716 28.8294 314.546 30.0176C315.376 31.2057 316.637 31.7998 318.33 31.7998ZM341.865 4.08984V10.584H346.382V15.7598H341.865V28.9434C341.865 29.9199 342.052 30.6198 342.427 31.043C342.801 31.4661 343.517 31.6777 344.575 31.6777C345.356 31.6777 346.048 31.6208 346.65 31.5068V36.8535C345.267 37.2767 343.843 37.4883 342.378 37.4883C337.43 37.4883 334.907 34.9899 334.81 29.9932V15.7598H330.952V10.584H334.81V4.08984H341.865ZM364.619 29.7002C364.619 28.8376 364.188 28.1621 363.325 27.6738C362.479 27.1693 361.112 26.7217 359.224 26.3311C352.941 25.0127 349.8 22.3434 349.8 18.3232C349.8 15.9795 350.768 14.0264 352.705 12.4639C354.658 10.8851 357.205 10.0957 360.347 10.0957C363.7 10.0957 366.377 10.8851 368.379 12.4639C370.397 14.0426 371.406 16.0934 371.406 18.6162H364.351C364.351 17.6071 364.025 16.777 363.374 16.126C362.723 15.4587 361.706 15.125 360.322 15.125C359.134 15.125 358.215 15.3936 357.563 15.9307C356.912 16.4678 356.587 17.1514 356.587 17.9814C356.587 18.7627 356.953 19.3975 357.686 19.8857C358.434 20.3577 359.688 20.7728 361.445 21.1309C363.203 21.4727 364.684 21.8633 365.889 22.3027C369.616 23.6699 371.479 26.0381 371.479 29.4072C371.479 31.8161 370.446 33.7692 368.379 35.2666C366.312 36.7477 363.643 37.4883 360.371 37.4883C358.158 37.4883 356.188 37.0977 354.463 36.3164C352.754 35.5189 351.411 34.4365 350.435 33.0693C349.458 31.6859 348.97 30.1966 348.97 28.6016H355.659C355.724 29.8548 356.188 30.8151 357.051 31.4824C357.913 32.1497 359.069 32.4834 360.518 32.4834C361.868 32.4834 362.886 32.2311 363.569 31.7266C364.269 31.2057 364.619 30.5303 364.619 29.7002Z" fill="#FFFCFC"/>
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

          </div>
      </Grid>
      <Grid>
        
      </Grid>
  </Grid> 
  <div class="mt-8 bg-gradient-to-r from-purple-600 via-darkPink to-pink-500 ">
	<div class=" grid grid cols-3 gap-4">
    
  </div>
  <Grid container
  direction="row"
  justify="center"
  alignItems="center"
  wrap="wrap"
  spacing={2}>
      {projectInformation.map((data) =>
      <Grid item xs={0}>
        <div class="p-10">  
   
    <div class="max-w-sm  w-72 rounded overflow-hidden shadow-lg">
      <img class="w-full" class="lazy" src={data.img} alt="Mountain"/>
      <div class="px-6 py-4 bg-white ">
        <div class="font-bold text-xl mb-2"> {data.title} </div>
        <p class="text-gray-700 text-base">
         {data.description}
        </p>
      </div>
      <div class="bg-white px-6 pt-4 pb-2">
      {data.languages.map((lan) => 
         
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{lan} </span>

      )}

      </div>
    </div>
  </div>
            

  </Grid>
      )}
      </Grid>
      </div>
      
  <div class="mt-8"/>
  <div class="flex flex-wrap flex-initial flex-row justify-center">
      {allProjects.map((data) =>
      
      <div id={data.title.replace(/\s/g, '')}> 
         
       <div class="p-10">  
   
   <div class="max-w-sm  w-72 rounded overflow-hidden shadow-lg">
     <img class="w-full" class="lazy" src={data.img} alt="Mountain"/>
     <div class="px-6 py-4 bg-white ">
     <a id="link" class="inline-block text-darkPink no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out m-2"
           onClick={() => getProjectInfo(data)}
          >
            <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"/></svg>
            
          </a>
     {(() => {
        if (data.github) {
          return (
            <a id="link" class="inline-block text-darkPink no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out m-2"
            href={data.github}
          >
              <svg  class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            
          </a>
          )
        } })()}
        {(() => {if (data.link) {
          return (
            <a id="link" class="inline-block text-darkPink no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out m-2"
            href={data.link}
          >
             <svg  class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm22 22h-20v-16h20v16zm-1-15h-18v14h18v-14zm-10 5.649l-3.229 1.351 3.229 1.347v1.653l-5-2.201v-1.599l5-2.2v1.649zm7 2.15l-5 2.201v-1.653l3.229-1.347-3.229-1.351v-1.649l5 2.201v1.598z"/></svg>
            
          </a>
          )
        } 
      })()}
       {(() => {
        if (data.site){
          return (
            <a id="link" class="inline-block text-darkPink no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out m-2"
            href={data.site}
          >
            <svg  class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z"/></svg>
            
          </a>
          )
        }
      })()}
       <div class="font-bold text-xl mb-2"> {data.title} </div>
       <p class="text-gray-700 text-base">
        {data.description}
       </p>
     </div>
     
     <div class="px-6 pt-4 pb-2 bg-white">
     {data.languages.map((lan) => 
        
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2">{lan} </span>

     )}
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-gradient-to-r from-pink-900 via-darkPink to-pink-500 text-center text-white text-sm">
        {data.type}
          </span>
    
     </div>
   </div>
 </div>
      
  
  </div>
      )}

</div>
  </div>);
}
export default Projects;