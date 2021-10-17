import "./Projects.css"
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
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
  else if(data.type === "Machine Learning")
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
      setOpenList(true)}}class="shadow-2xl text-center sticky text-darkOrange hover:text-lightOrange right-0 ml-2 rounded-full h-12 w-12 z-40 top-20 bg-white ...">
    <svg class="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-current my-auto mx-auto " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/></svg>
    
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
                    <Dialog.Title className="text-1xl text-center font-extrabold text-themeBlack ">
                    
            
                  <div class="text-center">
        <text class="uppercase text-lg text-center font-extrabold  text-darkPink">
        Web Development 
        </text> 
      <div class="flex flex-wrap justify-center">
      
        {web.map((data) =>
        
   
          <button onClick={(e) => {
            goToElement(e);
            setOpenList(false);
          }}>
          <span class="inline-block hover:text-violet bg-darkPink rounded-full px-3 py-1 text-sm font-bold text-white font-black mr-2 mb-2">{data.title} </span>
  
          </button>
        )}
       
       </div>
       <text class="uppercase text-lg text-center font-extrabold  text-darkOrange">
        Machine Learning Projects
        </text> 
      <div class="flex flex-wrap justify-center">
      
        {ml.map((data) =>
        
   
          <button onClick={(e) => {
            goToElement(e);
            setOpenList(false);
          }}>
          <span class="inline-block hover:text-violet bg-darkOrange text-white font-black rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.title} </span>
  
          </button>
        )}
       
       </div>
       <text class="uppercase text-lg text-center font-extrabold  text-darkGreen">
        Other
        </text> 
      <div class="flex flex-wrap justify-center">
      
        {other.map((data) =>
        
   
          <button onClick={(e) => {
            goToElement(e);
            setOpenList(false);
          }}>
          <span class="inline-block bg-darkGreen  rounded-full px-3 py-1 text-sm font-black text-white mr-2 mb-2">{data.title} </span>
  
          </button>
        )}
       
       </div>
      </div>
       </Dialog.Title>
                  </div>
                  <div className="overflow-y-auto  relative flex-1 px-4 sm:px-6 text-center mb-20 ">
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
                    <Dialog.Title className=" text-1xl text-center font-extrabold text-grey-500 ">
                    <div class="bg-gradient-to-r from-darkPink via-darkOrange to-darkGreen  mt-1 h-5  w-full mb-2"/>
                      <text class="m-2">
                      {info.title}
                        </text>
                    {/* <div class="h-10 bg-gradient-to-br from-purple-600 to-darkPink text-center text-white font-extrabold text-xl">
        {info.type}
          </div> */}
                   
                    <div class="grid grid-cols-4 gap-0 mt-4">
  <div>{(() => {
        if (info.github) {
          return (
            <a id="link" class="inline-block text-darkPink no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
            href={info.github}
          >
              <svg  class="fill-current h-18" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            
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
                      <div class="text-left">
 <text class="text-left"> {info.summary} </text>
                      </div>
                     
                      <br/>
                      {/* <text class="text-lg font-bold text-center font-extrabold"> Skills Gained </text>
                      <br/> */}
                      {/* <ul class="list-disc text-left ml-3">
                     {info.tasks.map((task) =>
                     <li> {task} </li>)}
                      </ul>
                     */}
                      
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
    <div class="h-auto  grid grid-rows-2 items-center justify-center grid-flow-col gap-4 text-center">
  <div class="text-gradient font-extrabold text-white text-4xl font-bold"> Projects <div>
      </div> <div class="bg-gradient-to-r from-darkPink via-darkOrange to-darkGreen mt-2 h-3  w-96"> </div> </div>
      </div>
      <div class="h-auto  grid grid-rows-2 items-center justify-center grid-flow-col gap-4 text-center">
  <div class="text-gradient font-extrabold text-white text-3xl "> Featured Projects <div>
      </div> </div>
      </div>
      <Grid container
  direction="column"
  justify="center"
  alignItems="center"
  wrap="nowrap"
  spacing={5}>
     
      <Grid>
        
      </Grid>
  </Grid> 
  <div class="mt-8 bg-gradient-to-r from-darkPink via-darkOrange to-darkGreen">
	<div class=" grid grid-cols-3 gap-4">
    
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
  <div class="h-auto  grid grid-rows-2 items-center justify-center grid-flow-col gap-10 text-center">
  <div class="text-gradient font-extrabold text-white text-3xl font-bold"> All Projects <div>
      </div> </div>
      </div>
  <div class="flex flex-wrap flex-row gap-3 items-center justify-center">
      {allProjects.map((data) =>
      {
        if(data.type === "Web Development")
  {
          return (
            <div id={data.title.replace(/\s/g, '')}> 
  <a id="link" class="hover:no-underline "
      onClick={() => getProjectInfo(data)}
     >
    <div class="w-80 m-5 h-72 bg-gradient-to-r from-darkPink via-darkPink to-lightPink rounded-lg font-bold text-4xl text-white flex  justify-center flex-col items-center text-center p-3 transition duration-500 ease-in-out 0 transform hover:-translate-y-1 hover:no-underline hover:scale-110 ">
      <div class="hover:hidden">
        
      </div>
      <text class="text-center block hover:hidden"> {data.title} </text>
      <text class="text-2xl font-medium block hover:hidden"> {data.type}  </text>
      
      </div>
      </a>
      </div>
          )
  }
  else if(data.type === "Machine Learning")
  {
    return (
      <div id={data.title.replace(/\s/g, '')}> 
<a id="link" class=" hover:no-underline "
onClick={() => getProjectInfo(data)}
>
<div class="w-80 m-5 h-72 bg-gradient-to-r from-darkOrange via-darkOrange to-lightOrange rounded-lg font-bold text-4xl text-white flex  justify-center flex-col items-center text-center p-3 transition duration-500 ease-in-out 0 transform hover:-translate-y-1 hover:no-underline hover:scale-110 ">
<div class="hover:hidden">
  
</div>
<text class="text-center block hover:hidden"> {data.title} </text>
<text class="text-2xl font-medium block hover:hidden"> {data.type}  </text>

</div>
</a>
</div>
    )
  }
  else
  {
    return (
      <div id={data.title.replace(/\s/g, '')}> 
<a id="link" class=" hover:no-underline"
onClick={() => getProjectInfo(data)}
>
<div class="w-80 m-5 h-72 bg-gradient-to-r from-darkGreen via-darkGreen to-lightGreen rounded-lg font-bold text-4xl text-white flex  justify-center flex-col items-center text-center p-3 transition duration-500 ease-in-out 0 transform hover:-translate-y-1 hover:no-underline hover:scale-110 ">
<div class="hover:hidden">
  
</div>
<text class="text-center block hover:hidden"> {data.title} </text>
<text class="text-2xl font-medium block hover:hidden"> {data.type}  </text>

</div>
</a>
</div>
    )
  }

  
  <div id={data.title.replace(/\s/g, '')}> 
  <a id="link" class="inline-block font-bold text-pink-500 no-underline hover:text-pink-300 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out m- hover:no-underline"
      onClick={() => getProjectInfo(data)}
     >
    <div class="w-80 m-5 h-72 bg-gradient-to-r from-darkPink via-darkPink to-lightPink rounded-lg font-bold text-4xl text-white flex  justify-center flex-col items-center text-center p=3">
      <div class="hover:hidden">
        
      </div>
      <text class="text-center block hover:hidden"> {data.title} </text>
      <text class="text-2xl font-medium block hover:hidden"> {data.type}  </text>
      
      </div>
      </a>
      </div>

}
      
       
     
      )}

</div>
  </div>);
}
export default Projects;