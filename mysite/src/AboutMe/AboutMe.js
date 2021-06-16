import React from 'react';
import "./AboutMe.css";
import fullPic from "./fullPic.jpg";
import Me from "./me.jpg";
import Grid from '@material-ui/core/Grid';
function AboutMe()
{
    return (
        <div class="relative h-full mt-5">
            
            <div class="h-auto  grid grid-rows-2 items-center justify-center grid-flow-col gap-4 text-center">
  <div class="text-gradient font-extrabold text-white text-4xl font-bold"> About Me <div>
      </div> <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mt-1 h-2  w-96">  </div> </div>
</div>
<section class="text-gray-600 body-font">
  <div class="mt-10 relative container mx-auto flex md:flex-row flex-col items-center">
      
   
      <img class="lg:w-1/2 md:w-1/4 object-cover object-center" alt="hero" src={fullPic}/>
    
    <div class="lg:flex-grow  lg:pl-5 flex flex-col items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-center"> Hi, I'm Victoria Williamson
      </h1>
      <p class="mb-8 leading-relaxed text-white text-lg"> I first became interested in programming after taking AP Computer Science Principles my sophomore year of high school and ended up loving it! Since then I have: signed up for numerous hackathons, and explored numerous areas of computer science through technical electives. Through this journey, I have gained an interest in web development, data science, and machine learning.</p>
      <div class="flex justify-center">
       {/* If U put buttons put them here */}
      </div>
    </div>
  </div>
</section>
<section class="text-gray-600 body-font">
  <div class="container items-center py-24 mx-auto">
  <div class="h-auto  flex-wrap flex grid grid-rows-2 items-center justify-center sm:grid-flow-row grid-flow-col gap-2 text-center">
  <div class="text-gradient font-extrabold text-white text-3xl font-bold"> Skills <div>
      </div> <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mt-1 h-2  w-72">  </div> </div>
</div>
    <div class=" md:flex md:flex-wrap sm:-m-4  -mb-10 -mt-4">
      {/*New Skill}*/}
      <div class="p-4  lg:w-1/5 md:w-1/4 flex flex-col text-center items-center ">
      <text class="text-white text-lg font-bold mb-2"> React </text>
        <div class="w-40 h-40 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
         <img  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"/>
        </div>
        <div class="flex-grow">
        </div>
      </div>
      {/* End of new Skill*/}
       {/*New Skill}*/}
       <div class="p-4 lg:w-1/5 md:w-1/4 flex flex-col text-center items-center">
       <text class="text-white text-lg font-bold mb-2"> HTML </text>
        <div class="w-40 h-40 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
         <img class="w-5/6 h-5/6" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"/>
        </div>
        <div class="flex-grow">
         
         
        </div>
      </div>
      {/* End of new Skill*/}
       {/*New Skill}*/}
       <div class="p-4 lg:w-1/5 md:w-1/4 flex flex-col text-center items-center">
       <text class="text-white text-lg font-bold mb-2"> CSS</text>
        <div class="w-40 h-40 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
         <img  class="w-5/6 h-5/6"  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"/>
        </div>
        <div class="flex-grow">
         
          
        </div>
      </div>
      {/* End of new Skill*/}
       {/*New Skill}*/}
       <div class="p-4 lg:w-1/5 md:w-1/4 flex flex-col text-center items-center">
       <text class="text-white text-lg font-bold mb-2"> Python </text>
        <div class="w-40 h-40 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
         <img  class="w-5/6 h-5/6" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"/>
        </div>
        <div class="flex-grow">
         
       
        </div>
      </div>
      {/* End of new Skill*/}
      
       {/*New Skill}*/}
       <div class="p-4  lg:w-1/5 md:w-1/4 flex flex-col text-center items-center">
       <text class="text-white text-md font-bold mb-2"> Tailwind CSS </text>
        <div class="w-40 h-40 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
         <img class="w-5/6 h-5/6" src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"/>
        </div>
        <div class="flex-grow">
         
         
        </div>
      </div>
      {/* End of new Skill*/}
       {/*New Skill}*/}
       <div class="p-4  lg:w-1/5 md:w-1/4 flex flex-col text-center items-center">
       <text class="text-white text-sm font-bold mb-2"> Material UI</text>
        <div class="w-40 h-40 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
         <img class="w-3/6 h-3/6" src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"/>
        </div>
        <div class="flex-grow">
        
          
        </div>
      </div>
      {/* End of new Skill*/}
       {/*New Skill}*/}
       <div class="p-4   lg:w-1/5  md:w-1/4 flex flex-col text-center items-center">
       <text class="text-white text-lg font-bold mb-2"> Tensorflow </text>
        <div class="w-40 h-40 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
            
         <img class="w-4/6 h-4/6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/115px-Tensorflow_logo.svg.png"/>
        </div>
        <div class="flex-grow">
         
        </div>
      </div>
      {/* End of new Skill*/}
       {/*New Skill}*/}
       <div class="p-4  lg:w-1/5 md:w-1/4 flex flex-col text-center items-center">
       <text class="text-white text-md font-bold mb-2"> Skit Learn </text>
        <div class="w-40 h-40 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
         <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/260px-Scikit_learn_logo_small.svg.png"/>
        </div>
        <div class="flex-grow">
        </div>
      </div>
      {/* End of new Skill*/}
       {/*New Skill}*/}
       <div class="p-4 lg:w-1/5 md:w-1/4 flex flex-col text-center items-center">
       <text class="text-white text-lg font-bold mb-2"> Pandas </text>
        <div class="w-40 h-40 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
            
         <img class="w-3/6 h-3/6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/1200px-Pandas_mark.svg.png"/>
        </div>
      </div>
      {/* End of new Skill*/}
       {/*New Skill}*/}
       <div class="p-4  lg:w-1/5 md:w-1/4 flex flex-col text-center items-center">
       <text class="text-white text-lg font-bold mb-2"> Numpy </text>
        <div class="w-40 h-40 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
         <img class="w-4/6 h-4/6"   src="https://user-images.githubusercontent.com/50221806/86498201-a8bd8680-bd39-11ea-9d08-66b610a8dc01.png"/>
        </div>
        
      </div>
      {/* End of new Skill*/}
    </div>
    
  </div>
</section>
<section class="text-gray-400 body-font">
  <div class="container  mx-auto">
  <div class="h-auto  flex-wrap flex grid grid-rows-2 items-center justify-center sm:grid-flow-row grid-flow-col gap-2 text-center">
  <div class="text-gradient font-extrabold text-white text-3xl font-bold"> Coursework <div>
      </div> <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mt-1 h-2  w-72">  </div> </div>
</div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3 sm:w-1/2 w-full text-white text-lg font-base">
        <h2 class="font-medium title-font tracking-widest text-white mb-4 text-lg font-bold text-center sm:text-left">Statistics and Math Courses</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
          <a>
            <span class="bg-gray-800 text-purple-400 text-lg w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span> Statistics 1 and 2
          </a>
          <a>
            <span class="bg-gray-800 text-purple-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Calculus 1,2, and 3
          </a>
          <a>
            <span class="bg-gray-800 text-purple-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span> Matrix and Linear Algebra
          </a>
        </nav>
      </div>
      <div class="p-4 lg:w-1/3 sm:w-1/2 w-full text-white text-lg font-base">
        <h2 class="font-medium title-font tracking-widest text-white text-lg  font-bold mb-4 text-sm text-center sm:text-left">General Computer Science</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
          <a>
            <span class="bg-gray-800 text-purple-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>  C Programming 
          </a>
          <a>
            <span class="bg-gray-800 text-purple-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Object Oriented Programming
          </a>
          <a>
            <span class="bg-gray-800 text-purple-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Data Structures
          </a>
          <a>
            <span class="bg-gray-800 text-purple-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Algorithm Analysis
          </a>
        </nav>
      </div>
      <div class="p-4 lg:w-1/3 sm:w-1/2 w-full text-white  text-lg">
        <h2 class="font-medium title-font tracking-widest text-white mb-4 text-lg font-bold text-sm text-center sm:text-left">Electives</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-left items-center -mb-1 space-y-2">
          <a>
            <span class="bg-gray-800 text-purple-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Artificial Intelligence
          </a>
          <a>
            <span class="bg-gray-800 text-purple-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Robot Vision
          </a>
          <a>
            <span class="bg-gray-800 text-purple-400 w-4 h-4 mr-2 rounded-full inline-flex">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Algorithms For Machine Learning
          </a>
        </nav>
      </div>
     
    </div>
  </div>
</section>
GitHub

      </div>
    
        
    )       
}
export default AboutMe;

