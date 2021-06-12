import React from 'react';
import "./Home.css";
import Resume from "./Resume";
import CV from "./CV";
import GitHub from "./GitHub2.png";
import LinkedIn from "./LinkedIn.svg";
import Twitter from "./Twitter.png";
import Grid from '@material-ui/core/Grid';
import GetAppIcon from '@material-ui/icons/GetApp';

function Home()
{
    return <div>
               <Grid container
      id ="bigGridHome"
  direction="column"
  justify="center"
  alignItems="center"
  wrap="nowrap"
  spacing={3}>
          <Grid id="grid1Home" item xs={20}>
          <div class="Name"> Victoria Williamson</div>
          </Grid>
          <Grid id="grid1Home" item xs={20}>
      <div class="Major"> Computer Science & Statistics Major at the University of Central Florida</div>
      <div class="Grad-Year">May 2023 Graduate</div>
      <div class="Location">Orlando,FL</div>
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
              
               
              <button
                class="rounded-full bg-gradient-to-r from-purple-600 via-darkPink to-pink-500 hover:from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Resume
                <GetAppIcon/>
              </button>
    
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
                  <a  class="no-underline inline-block text-gray-50 no-underline hover:text-pink-500 hover:text-no-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-100 duration-300 ease-in-out" 
                  href="https://www.linkedin.com/in/victoria-williamson-8394331a1/" 
                   target="_blank" 
                   >
 <div className=" rounded-full h-24 w-24 flex items-center justify-center bg-gradient-to-r from-purple-500 via-purple-500 to-purple-500 hover:from-pink-300 to-purple-500 text-white font-bold py-2 px-4 focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                       
                       <svg  className="bg-cover" preserveAspectRatio="none" viewBox="0 0 61 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5315 16.1971C22.5315 18.1581 21.0857 19.7452 18.8248 19.7452C16.652 19.7452 15.2063 18.1581 15.251 16.1971C15.2063 14.1408 16.652 12.6 18.8681 12.6C21.0857 12.6 22.4881 14.1408 22.5315 16.1971ZM15.4328 45.39V22.548H22.3064V45.3886H15.4328V45.39Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.8157 29.8378C27.8157 26.9887 27.7248 24.5598 27.6339 22.5511H33.6043L33.9216 25.6803H34.0573C34.9619 24.232 37.2228 22.0385 40.8861 22.0385C45.408 22.0385 48.8 25.1215 48.8 31.845V45.3931H41.9264V32.7345C41.9264 29.7901 40.9323 27.7829 38.4449 27.7829C36.5447 27.7829 35.415 29.1374 34.9633 30.4443C34.7816 30.9121 34.6921 31.5648 34.6921 32.2204V45.3931H27.8185V29.8378H27.8157Z" fill="white"/>
</svg>
                       </div>
                   </a>
                 
</Grid>
<Grid id="grid1" item xs = {20}>
<a  class="no-underline inline-block text-gray-50 no-underline hover:text-pink-500 hover:text-no-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-100 duration-300 ease-in-out" 
                  href="https://twitter.com/ViWilliamson/" 
                   target="_blank" 
                   >
<div className=" rounded-full h-24 w-24 flex items-center justify-center bg-gradient-to-r from-darkPink via-darkPink to-darkPink hover:from-pink-300 to-darkPink text-white font-bold py-2 px-4 focus:ring transform transition hover:scale-105 duration-300 ease-in-out">

<svg preserveAspectRatio="none" viewBox="0 0 61 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48.7999 19.3861C47.4544 20.0035 46.0063 20.4192 44.4875 20.607C46.038 19.6469 47.2287 18.1275 47.7886 16.317C46.3394 17.2065 44.7303 17.8503 43.0212 18.1993C41.6512 16.6924 39.6981 15.75 37.5401 15.75C33.3936 15.75 30.0315 19.2223 30.0315 23.5048C30.0315 24.1121 30.0986 24.7042 30.2267 25.2724C23.9856 24.9499 18.4533 21.8619 14.7496 17.1699C14.103 18.3152 13.7334 19.6469 13.7334 21.0681C13.7334 23.758 15.057 26.1317 17.0735 27.5227C15.8414 27.4823 14.6849 27.1333 13.6712 26.5525V26.6495C13.6712 30.4079 16.2611 33.5413 19.6939 34.2556C19.0644 34.432 18.4008 34.5278 17.7164 34.5278C17.2321 34.5278 16.7612 34.4786 16.3025 34.3879C17.2577 37.4684 20.0318 39.7111 23.3171 39.7741C20.7479 41.8529 17.5103 43.094 13.992 43.094C13.3845 43.094 12.7867 43.0574 12.2 42.9843C15.523 45.1842 19.4694 46.4693 23.7099 46.4693C37.5206 46.4693 45.0731 34.6525 45.0731 24.4056C45.0731 24.0692 45.067 23.7341 45.0511 23.4027C46.5199 22.3066 47.7935 20.9409 48.7999 19.3861Z" fill="white"/>
</svg>

                        </div>
                        </a>
</Grid>

<Grid id="grid2" item xs={20}>
  <a href="https://github.com/Victoria-Williamson" target="_blank">
     <div className=" rounded-full h-24 w-24 flex items-center justify-center bg-gradient-to-r from-pink-500 via-pink-500 to-pink-500 hover:from-red-400 to-pink-500 text-white font-bold py-2 px-4 focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
     <svg preserveAspectRatio="none" viewBox="0 0 61 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.29102 47.6202C8.00383 54.0442 13.8687 58.9879 20.8582 61.3911C22.3842 61.6792 22.9403 60.7066 22.9403 59.8712C22.9403 59.5253 22.9347 58.9142 22.9271 58.0964C22.9184 57.1493 22.9072 55.925 22.8991 54.5146C14.4154 56.4175 12.6254 50.2913 12.6254 50.2913C11.238 46.6539 9.23829 45.6851 9.23829 45.6851C6.46905 43.7301 9.448 43.7687 9.448 43.7687C12.5093 43.9931 14.1196 47.0155 14.1196 47.0155C16.8401 51.8287 21.2589 50.4383 22.9965 49.6338C23.2736 47.5976 24.06 46.2091 24.9325 45.4221C18.1601 44.6273 11.0395 41.9239 11.0395 29.8534C11.0395 26.4152 12.2285 23.6035 14.1795 21.4009C13.8649 20.6042 12.8183 17.4019 14.4772 13.0645C14.4772 13.0645 17.0386 12.2175 22.8654 16.2939C25.2976 15.5958 27.9077 15.2458 30.5009 15.2342C33.0904 15.2458 35.7005 15.5958 38.1365 16.2939C43.9595 12.2175 46.5153 13.0645 46.5153 13.0645C48.1799 17.4019 47.1332 20.6042 46.8187 21.4009C48.7734 23.6035 49.9549 26.4152 49.9549 29.8534C49.9549 41.9549 42.823 44.6177 36.0282 45.397C37.1235 46.3696 38.099 48.2918 38.099 51.2311C38.099 54.0465 38.0823 56.4987 38.0712 58.1231C38.0657 58.9276 38.0616 59.5291 38.0616 59.8712C38.0616 60.7143 38.6102 61.6947 40.1586 61.3872C45.7266 59.4677 50.5802 55.9368 54.1993 51.3298C48.6074 58.4496 40.0682 63 30.5 63C19.3593 63 9.61373 56.8311 4.29102 47.6202Z" fill="white"/>
</svg>

                        </div>
</a>

</Grid>
                  </Grid>
          </Grid>
  </div>
}
export default Home;