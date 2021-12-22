import React from 'react';
import "./AboutMe.css";
import Self from "./images/Self.svg"
import Grid from '@material-ui/core/Grid';
import { data } from "./AboutMe_Info";
function Skills()
{
    return (
        <div class="mt-5 h-auto">
            <div class="h-auto  grid grid-rows-2 items-center justify-center grid-flow-col gap-4 text-center">
  <div class="text-gradient font-extrabold text-white text-4xl"> Skills <div>
      </div> <div class="bg-gradient-to-r from-darkPink via-darkOrange to-darkGreen mt-1 h-3  w-96">  </div> </div>
</div>
  <div class="grid grid-rows-2 items-center justify-center sm:grid-flow-row grid-flow-col gap-2 text-center">
  <div class="text-gradient font-bold text-white text-3xl"> Languages <div>
      </div>  </div>
</div>
<div class="flex flex-wrap text-center justify-center px-10 lg:px-64">
{data.languages.map((lang) =>
{
       return(
       <div class="lg:w-32 lg:h-32 h-20 w-20 m-2 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0 text-center align-middle">
       
         <img  class="w-5/6 h-5/6 flex items-center justify-center object-scale-down px-1"  alt={lang.title} src={lang.image}/>
  </div>
       )
})} 
</div>

<div class="h-auto mt-5  lg:px-64 flex-wrap flex grid grid-rows-2 items-center justify-center sm:grid-flow-row grid-flow-col gap-2 text-center">
  <div class="text-gradient font-extrabold text-white text-3xl font-bold"> Frameworks <div>
      </div>  </div>
      
</div>
<div class="h-auto ">
<div class="flex flex-wrap text-center justify-center px-10">
{data.frameworks.map((framework) =>
{
       return(
              <div class="lg:w-32 lg:h-32 h-20 w-20 m-2 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
              <img  class="w-5/6 h-5/6" alt={framework.title} src={framework.image}/>
       </div>
       )
})} 
</div>
</div>

<div class="flex-wrap flex  items-center justify-center gap-2 text-center">
  <div class="text-gradient font-extrabold text-white text-3xl"> Coursework <div>
      </div> </div>
</div>
<div class="flex flex-col lg:grid lg:grid-cols-3 gap-2 justify-center mt-4 lg:gap-0 lg:mx-20">
<div class="mx-8 px-5">
<h2 class="title-font tracking-widest text-lightPink text-lg font-bold text-center sm:text-left mt-3">Statistics and Math Courses</h2>
<li class="text-white list-none text-lg">
{data.math.map((course) =>
{
       return(
<ul>
            <span class=" text-2xl w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg class="fill-current text-darkPink" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
             
            </span> {course}
    </ul>
       )
})} 
</li>
</div>
<div class="mx-8 px-5">
<h2 class="title-font tracking-widest text-lightOrange text-lg font-bold text-center sm:text-left mt-3">General Computer Science</h2>
<li class="text-white list-none text-center text-lg">
{data.compSci.map((course) =>
{
       return(
<ul>
            <span class=" text-2xl w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg class="fill-current text-darkOrange" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
             
            </span> {course}
    </ul>
       )
})} 
</li>
</div>
<div class="mx-8 px-5">
<h2 class="title-font tracking-widest text-lg font-bold text-center sm:text-left text-darkGreen mt-3 ">Electives</h2>
<li class="text-white list-none text-lg ">
{data.electives.map((course) =>
{

       return(
<ul>
            <span class=" text-2xl w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg class="fill-current text-darkGreen" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
             
            </span> {course}
    </ul>
       )
})} 
</li>
</div>
</div>

      </div>
    
        
    )       
}
export default Skills;

