import React from 'react';
import "./Home.css";
import Resume from "./Resume";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import CV from "./CV";
import GitHub from "./GitHub1.png";
import LinkedIn from "./Linkedin_Logo.png";
import Twitter from "./Twitter2.png";

import Grid from '@material-ui/core/Grid';
import GetAppIcon from '@material-ui/icons/GetApp';
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const colors = ['#7c4dff', '#0091ea', '#ff9100', '#ff1744']
function Home()
{
        <div className="h-full">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </div>
        // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //         document.getElementById("link").target = "_self";     //change target
        //     }
    return <div class="mt-20">
          
          <main className=" flex flex-wrap mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 items-center">
            <div className="grid grid-flow-row auto-row-max sm:text-center lg:text-left lg:w-1/2 xl:w-1/2  px-2 ">
            <h1 className=" text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline text-white">Victoria Williamson</span>
                
              </h1>
              
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-md lg:mx-0">
              Hi I'm Victoria Williamson ! I first became interested in programming after taking AP Computer Science Principles my sophomore year of high school and ended up loving it! Since then I have: signed up for numerous hackathons, and explored numerous areas of computer science through technical electives. Through this journey, I have gained an interest in web development, data science, and machine learning.
              </p>
              <div className="mt-0 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                 
                </div>
                <div class="grid grid-rows-2  gap-4 mt-3 sm:mt-0 sm:ml-3">
  <div><a
                    href="https://drive.google.com/file/d/1mhIYjhgXDBt8YCmbvYiqKpsECknlD6kt/view?usp=sharing"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white  bg-gradient-to-r from-purple-600 via-violet to-themePink  hover:from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out md:py-4 md:text-lg md:px-10 font-extrabold"
                  >
                    Resume <GetAppIcon/>
                  </a></div>

  <div>
        
          <div class="grid grid-flow-col auto-rows-max gap-2 -mt-4  ">
  <div className="hover:text-pink-500 hover:text-no-underline text-center h-full  transform hover:scale-100 duration-300 ease-in-out">
          <a id="link"  class=" z-0 no-underline inline-block text-gray-50 no-underline hover:text-pink-500 hover:text-no-underline text-center   transform hover:scale-100 duration-300 ease-in-out" 
                  href="https://www.linkedin.com/in/victoria-williamson-8394331a1/" 
                   target="_blank" 
                   >
                          
 <div className="relative rounded-full h-12 w-12 flex items-center justify-center bg-gradient-to-r from-purple-500 via-purple-500 to-purple-500 hover:from-indigo-800 to-purple-500 text-white font-bold  focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
 <img class="z-40 " src={LinkedIn}/>
                       </div>
                     
                   </a></div>
                   <div><a id="link"  class=" z-0 no-underline inline-block text-gray-50 no-underline hover:text-pink-500 hover:text-no-underline text-center   transform hover:scale-100 duration-300 ease-in-out" 
                  href="https://twitter.com/ViWilliamson/" 
                   target="_blank" 
                   >
                           
<div className=" z-0 rounded-full  h-12 w-12 flex items-center justify-center bg-gradient-to-r from-violet via-violet to-violet hover:from-pink-300 to-darkPink text-white font-bold py-2 focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
<img class="z-40 " src={Twitter}/>
                       

                        </div>
                        </a></div>
                        <div><a id="link" href="https://github.com/Victoria-Williamson" target="_blank" class=" z-0 no-underline inline-block text-gray-50 no-underline hover:text-pink-500 hover:text-no-underline text-center   transform hover:scale-100 duration-300 ease-in-out">
     <div className=" z-0 rounded-full  h-12 w-12 flex items-center justify-center bg-gradient-to-r from-pink-500 via-pink-500 to-pink-500 hover:from-red-400 to-pink-500 text-white font-bold py-2 focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
     <img class="z-40 " src={GitHub}/>
     </div>
     </a></div>
</div>

                  <div class="grid grid-cols-3 lg:gap-4 gap-1 mt-3 items-center">
  <div><a id="link"  class=" z-0 no-underline inline-block text-gray-50 no-underline hover:text-pink-500 hover:text-no-underline text-center h-10 md:h-auto  transform hover:scale-100 duration-300 ease-in-out" 
                  href="https://www.linkedin.com/in/victoria-williamson-8394331a1/" 
                   target="_blank" 
                   >
                    </a>      
</div>
</div>
  </div>
</div>
               
            <br/>
            <div className="grid grid-flow-row auto-row-max">

            </div>
           
                </div>
                
              </div>
              
          </main>
         
          <div className="md:mt-0 sm:mt-10 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className=" h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://lh3.googleusercontent.com/pw/ACtC-3eLW4w1W3cHMlWaugcWIS-T6I4Tb8fCjgsC-0ZVNp-6Fu09WzuZq4M9B9XewIebAzFgPEMoj1w5anMaLGmFFo3bRN1ZJKUyJ9Bu9mHFHI7lWdHaa0En1hXcYMl9e8Xt06T1QaAg-yu1CPiVFmCvJAVoGA=w1216-h912-no?authuser=0"
          alt=""
        />
      </div>
     
      
  </div>
}
export default Home;