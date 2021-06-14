import React from 'react';
import "./Home.css";
import Resume from "./Resume";
import CV from "./CV";
import GitHub from "./GitHub1.png";
import LinkedIn from "./Linkedin_Logo.png";
import Twitter from "./Twitter2.png";

import Grid from '@material-ui/core/Grid';
import GetAppIcon from '@material-ui/icons/GetApp';

const colors = ['#7c4dff', '#0091ea', '#ff9100', '#ff1744']
function Home()
{
        // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //         document.getElementById("link").target = "_self";     //change target
        //     }
    return <div class="mt-20">
               <Grid container
      id ="bigGridHome"
  direction="column"
  justify="center"
  alignItems="center"
  wrap="nowrap"
  spacing={3}>
          
          <div class="text-center xl:text-9xl md:text-7xl  text-4xl text-white font-bold mt-4"> Victoria Williamson</div>
    
          <Grid id="grid1Home" item xs={20}>
      <div class="text-center xl:text-5xl lg:text-3xl sm:text-xl text-white font-bold"> Computer Science & Statistics Major at the University of Central Florida</div>
      <div class="text-center xl:text-5xl lg:text-3xl sm:text-xl text-white font-bold">May 2023 Graduate</div>
      <div class="text-center xl:text-5xl lg:text-3xl sm:text-xl text-white font-bold">Orlando,FL</div>
          </Grid>
          <Grid>
                  <div id="border"/>
          </Grid>
          <Grid container direction="row"
          justify="center"
          alignItems="center"
          wrap="nowrap"
          spacing={5}>
                <Grid item xs ={20}>
              
               <div class="rounded-full text-white bg-gradient-to-r from-purple-600 via-violet to-themePink  hover:from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
               <a href="https://drive.google.com/file/d/1mhIYjhgXDBt8YCmbvYiqKpsECknlD6kt/view?usp=sharing" target="_blank"
                class="text-white"
                type="button"
              >
                Resume
                <GetAppIcon/>
              </a>
               </div>
            
           
      </Grid>
    
          </Grid>
          <Grid>
                  <div id="border"/>
          </Grid>
          <Grid>
                  <div id="border"/>
          </Grid>
          <Grid container direction="row"
          justify="center"
          alignItems="center"
          wrap="nowrap"
          spacing={2}>
                  <Grid id="grid2" item xs = {20}>
                  <a id="link"  class=" z-0 no-underline inline-block text-gray-50 no-underline hover:text-pink-500 hover:text-no-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-100 duration-300 ease-in-out" 
                  href="https://www.linkedin.com/in/victoria-williamson-8394331a1/" 
                   target="_blank" 
                   >
                          
 <div className="z-0 relative rounded-full h-12 w-12 flex items-center justify-center bg-gradient-to-r from-purple-500 via-purple-500 to-purple-500 hover:from-indigo-800 to-purple-500 text-white font-bold py-2 px-4 focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
 <img class="z-40  absolute m-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " src={LinkedIn}/>
                       </div>
                     
                   </a>
                 
</Grid>
<Grid id="grid1" item xs = {20}>
<a id="link"  class="no-underline inline-block text-gray-50 no-underline hover:text-pink-500 hover:text-no-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-100 duration-300 ease-in-out" 
                  href="https://twitter.com/ViWilliamson/" 
                   target="_blank" 
                   >
                           
<div className=" z-0 rounded-full  h-12 w-12 flex items-center justify-center bg-gradient-to-r from-violet via-violet to-violet hover:from-pink-300 to-darkPink text-white font-bold py-2 px-4 focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
<img class="z-40  absolute m-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " src={Twitter}/>
                       

                        </div>
                        </a>
</Grid>

<Grid id="grid2" item xs={20}>
  <a id="link" href="https://github.com/Victoria-Williamson" target="_blank">
     <div className=" z-0 rounded-full  h-12 w-12 flex items-center justify-center bg-gradient-to-r from-pink-500 via-pink-500 to-pink-500 hover:from-red-400 to-pink-500 text-white font-bold py-2 px-4 focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
     <img class="z-40  absolute m-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " src={GitHub}/>
                

                        </div>
</a>

</Grid>
                  </Grid>
          </Grid>
  </div>
}
export default Home;