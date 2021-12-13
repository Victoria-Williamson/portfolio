import React from 'react';
import "./AboutMe.css";
import Self from "./images/LinkedIn-Self.png"
import Grid from '@material-ui/core/Grid';
function AboutMe()
{
    return (
        <div class="relative h-full w-screen mt-5">
            
            <div class="h-auto  grid grid-rows-2 items-center justify-center grid-flow-col gap-4 text-center">
  <div class="text-gradient font-extrabold text-white text-4xl font-bold"> About Me <div>
      </div> <div class="bg-gradient-to-r from-darkPink via-darkOrange to-darkGreen mt-1 h-3  w-96">  </div> </div>
</div>

<div id="about-border">
<div class="flex items-center w-screen justify-center absolute z-10 ">
                    <div class="flex flex-col items-center justify-center w-96 lg:items-center rounded bg-white shadow">
                        <div class="w-screen h-60 dark:bg-gray-800 flex flex-col items-center">
                        <img class="object-fit h-60 p-4" src={Self}>
                          </img></div>
                        <div class="w-full h-full mx-5 bg-gray-100 text-center font-medium p-3">
                         <text>
                         Hi ! I’m currently a rising junior majoring in Computer Science and Statistics at the University of Central Florida. I am originally from Kernersville, North Carolina but recently moved to Orlando, Florida to purse a degree. When I am not working or studying I spend a lot of my time exploring different resturants in Orlando and exploring the theme parks. 
                         </text>
                         <br/>
                         <a href="https://www.canva.com/design/DAEpp7QDs9s/YXxPaa7IRmjzm8URN-yTdg/view?utm_content=DAEpp7QDs9s&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">
                         <button class="mt-2 w-80 h-14 bg-darkOrange  text-white font-bold text-2xl hover:bg-lightOrange transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out"> Resume </button>
                         </a>
                       
                        </div>
                    </div>
                </div>
</div>
  <div class="h-auto  flex-wrap flex grid mt-5 grid-rows-2 items-center justify-center sm:grid-flow-row grid-flow-col gap-2 text-center">
  <div class="text-gradient font-extrabold text-white text-3xl font-bold"> Languages <div>
      </div> <div class="bg-gradient-to-r from-darkPink via-darkOrange to-darkGreen  mt-1 h-3  w-72">  </div> </div>
</div>
<div class="h-auto ">
<div class="flex flex-wrap text-center justify-center px-10 lg:px-64">
<div class="lg:w-32 lg:h-32 h-20 w-20 m-2 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
         <img  class="w-5/6 h-5/6" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"/>
  </div>
  <div class="lg:w-32 lg:h-32 h-20 w-20 m-2 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
         <img  class="w-5/6 h-5/6"  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"/>
  </div>
  <div class="lg:w-32 lg:h-32 h-20 w-20 m-2 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
         <img  class="w-5/6 h-5/6"  src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"/>
  </div>
  <div class="flex-col items-center text-center">
  <div class="lg:w-32 lg:h-32 h-20 w-20 m-2 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
         <img  class="w-5/6 h-5/6 p-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png"/>
  </div>
  <div class="lg:w-32 lg:h-32 h-20 w-20 m-2 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
         <img  class="w-5/6 h-5/6 p-2 object-scale-down" src="https://cdn.freebiesupply.com/logos/large/2x/java-4-logo-png-transparent.png"/>
  </div>
 
  </div>
</div>
</div>
<div class="h-auto mt-5  lg:px-64 flex-wrap flex grid grid-rows-2 items-center justify-center sm:grid-flow-row grid-flow-col gap-2 text-center">
  <div class="text-gradient font-extrabold text-white text-3xl font-bold"> Frameworks <div>
      </div> <div class="bg-gradient-to-r from-darkPink via-darkOrange to-darkGreen  mt-1 h-3  w-72">  </div> </div>
      
</div>
<div class="h-auto ">
<div class="flex flex-wrap text-center justify-center px-10">
<div class="lg:w-32 lg:h-32 h-20 w-20 m-2 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
         <img  class="w-5/6 h-5/6" src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"/>
  </div>
  <div class="lg:w-32 lg:h-32 h-20 w-20 m-2 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
         <img  class="w-5/6 h-5/6 object-scale-down p-2"  src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"/>
  </div>
  <div class="lg:w-32 lg:h-32 h-20 w-20 m-2 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
         <img  class="w-5/6 h-5/6 object-scale-down"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/115px-Tensorflow_logo.svg.png"/>
  </div>
  <div class="flex-col items-center text-center">
  <div class="lg:w-32 lg:h-32 h-20 w-20 m-2 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
         <img  class="w-5/6 h-5/6 p-2 object-scale-down" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/260px-Scikit_learn_logo_small.svg.png"/>
  </div>
  <div class="lg:w-32 lg:h-32 h-20 w-20 m-2 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
         <img  class="w-5/6 h-5/6 p-2 object-scale-down" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/1200px-Pandas_mark.svg.png"/>
  </div>
  <div class="lg:w-32 lg:h-32 h-20 w-20 m-2 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
         <img  class="w-5/6 h-5/6 p-2 object-scale-down" src="https://user-images.githubusercontent.com/50221806/86498201-a8bd8680-bd39-11ea-9d08-66b610a8dc01.png"/>
  </div>
  <div class="lg:w-32 lg:h-32 h-20 w-20 m-2 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
         <img  class="w-5/6 h-5/6 p-2 object-scale-down" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"/>
  </div>
 
  </div>
</div>
</div>

<div class="h-auto  flex-wrap flex  items-center justify-center gap-2 text-center">
  <div class="text-gradient font-extrabold text-white text-3xl font-bold"> Coursework <div>
      </div> <div class="bg-gradient-to-r from-darkPink via-darkOrange to-darkGreen mt-1 h-3  w-72">  </div> </div>
</div>
<div class="flex flex-wrap flex-row gap-2 justify-center">
<div class="mx-8 my-4">
<h2 class="font-medium title-font tracking-widest text-lightPink mb-4 text-lg font-bold text-center sm:text-left mt-3">Statistics and Math Courses</h2>
<li class="text-white list-none text-lg">
<ul>
            <span class=" text-2xl w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg class="fill-current text-darkPink" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
             
            </span> Statistics 1 and 2
    </ul>
          <ul>
          <span class=" text-2xl w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg class="fill-current text-darkPink" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
             
            </span>Calculus 1,2, and 3
          </ul>
          <ul>
          <span class=" text-2xl w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg class="fill-current text-darkPink" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
             
            </span> Matrix and Linear Algebra
          </ul>
</li>
</div>
<div class="mx-8 my-4">
<h2 class="font-medium title-font tracking-widest text-lightOrange mb-4 text-lg font-bold text-center sm:text-left text-darkPink mt-3">General Computer Science</h2>
<li class="text-white list-none text-center text-lg">
<ul>
            <span class=" text-2xl w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg class="fill-current text-darkOrange" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
             
            </span> C Programming
    </ul>
    <ul>
            <span class=" text-2xl w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg class="fill-current text-darkOrange" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
             
            </span> Java
    </ul>
    <ul>
            <span class=" text-2xl w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg class="fill-current text-darkOrange" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
             
            </span> Data Structures
    </ul>
    <ul>
            <span class=" text-2xl w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg class="fill-current text-darkOrange" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
             
            </span> Algorithm Analysis
    </ul>
         
</li>
</div>
<div class="mx-8 my-4">
<h2 class="font-medium title-font tracking-widest  mb-4 text-lg font-bold text-center sm:text-left text-darkGreen mt-3">Electives</h2>
<li class="text-white list-none text-lg ">
<ul>
            <span class=" text-2xl w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg class="fill-current text-darkGreen" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
             
            </span> Artificial Intelligence
    </ul>
    <ul>
            <span class=" text-2xl w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg class="fill-current text-darkGreen" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
             
            </span> Robot Vision
    </ul>
    <ul>
            <span class=" text-2xl w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg class="fill-current text-darkGreen" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
             
            </span> Algorithms For Machine Learning
    </ul>
</li>
</div>
</div>

      </div>
    
        
    )       
}
export default AboutMe;

