import React from 'react';
import "./AboutMe.css";
import Grid from '@material-ui/core/Grid';
function AboutMe()
{
    


//       <div id="infoBoxTwo"/>
//       <div id="infoBoxTwoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla varius velit sed semper. In eget dapibus massa. Nulla aliquet orci lectus, sit amet placerat ipsum ornare quis. Phasellus feugiat, nisl vel ultrices aliquet, risus ipsum convallis elit, ut vestibulum odio eros quis libero. Etiam fringilla, mag.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla varius velit sed semper. In eget dapibus massa. Nulla aliquet orci lectus, sit  amet, consectetur adipiscing elit. Sed fringilla varius </div>
//   </div>
    return (
        <div class="mt-4">
              <Grid container
  direction="column"
  justify="center"
  alignItems="center"
  wrap="nowrap"
  spacing={4}>
      <Grid item xs={0}>
    <div id="Extras">
    <svg preserveAspectRatio="none" viewBox="0 0 559 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M167.611 30.6758H154.77L152.328 38H144.54L157.772 2.45312H164.56L177.865 38H170.077L167.611 30.6758ZM156.747 24.7432H165.634L161.166 11.4375L156.747 24.7432ZM204.525 25.0361C204.525 29.2679 203.622 32.5719 201.815 34.9482C200.009 37.3083 197.486 38.4883 194.247 38.4883C191.382 38.4883 189.096 37.3896 187.387 35.1924L187.069 38H180.722V0.5H187.777V13.9521C189.405 12.0479 191.545 11.0957 194.198 11.0957C197.421 11.0957 199.944 12.2839 201.767 14.6602C203.606 17.0202 204.525 20.3486 204.525 24.6455V25.0361ZM197.47 24.5234C197.47 21.8542 197.047 19.9092 196.2 18.6885C195.354 17.4515 194.092 16.833 192.416 16.833C190.17 16.833 188.624 17.7526 187.777 19.5918V30.0166C188.64 31.8721 190.202 32.7998 192.465 32.7998C194.743 32.7998 196.241 31.6768 196.957 29.4307C197.299 28.3564 197.47 26.7207 197.47 24.5234ZM207.797 24.5479C207.797 21.9274 208.301 19.5918 209.311 17.541C210.32 15.4902 211.768 13.9033 213.656 12.7803C215.561 11.6572 217.766 11.0957 220.272 11.0957C223.837 11.0957 226.742 12.1862 228.988 14.3672C231.251 16.5482 232.512 19.5104 232.772 23.2539L232.821 25.0605C232.821 29.1133 231.69 32.3685 229.428 34.8262C227.165 37.2676 224.13 38.4883 220.321 38.4883C216.513 38.4883 213.469 37.2676 211.19 34.8262C208.928 32.3848 207.797 29.0645 207.797 24.8652V24.5479ZM214.853 25.0605C214.853 27.5671 215.325 29.4876 216.269 30.8223C217.213 32.1406 218.563 32.7998 220.321 32.7998C222.03 32.7998 223.365 32.1488 224.325 30.8467C225.285 29.5283 225.766 27.4287 225.766 24.5479C225.766 22.0902 225.285 20.1859 224.325 18.835C223.365 17.484 222.014 16.8086 220.272 16.8086C218.547 16.8086 217.213 17.484 216.269 18.835C215.325 20.1696 214.853 22.2448 214.853 25.0605ZM252.987 35.3145C251.246 37.4303 248.837 38.4883 245.761 38.4883C242.929 38.4883 240.764 37.6745 239.267 36.0469C237.785 34.4193 237.029 32.0348 236.996 28.8936V11.584H244.052V28.6494C244.052 31.4001 245.305 32.7754 247.812 32.7754C250.204 32.7754 251.848 31.9453 252.743 30.2852V11.584H259.823V38H253.183L252.987 35.3145ZM273.593 5.08984V11.584H278.109V16.7598H273.593V29.9434C273.593 30.9199 273.78 31.6198 274.154 32.043C274.529 32.4661 275.245 32.6777 276.303 32.6777C277.084 32.6777 277.776 32.6208 278.378 32.5068V37.8535C276.994 38.2767 275.57 38.4883 274.105 38.4883C269.158 38.4883 266.635 35.9899 266.537 30.9932V16.7598H262.68V11.584H266.537V5.08984H273.593ZM304.525 2.45312L313.656 28.2344L322.738 2.45312H332.357V38H325.009V28.2832L325.741 11.5107L316.146 38H311.117L301.547 11.5352L302.279 28.2832V38H294.955V2.45312H304.525ZM350.448 38.4883C346.575 38.4883 343.417 37.3001 340.976 34.9238C338.55 32.5475 337.338 29.3818 337.338 25.4268V24.7432C337.338 22.0902 337.851 19.722 338.876 17.6387C339.901 15.5391 341.35 13.9277 343.222 12.8047C345.11 11.6654 347.258 11.0957 349.667 11.0957C353.28 11.0957 356.12 12.235 358.188 14.5137C360.271 16.7923 361.312 20.0231 361.312 24.2061V27.0869H344.491C344.719 28.8122 345.403 30.1956 346.542 31.2373C347.698 32.279 349.154 32.7998 350.912 32.7998C353.63 32.7998 355.754 31.8151 357.284 29.8457L360.751 33.7275C359.693 35.2249 358.261 36.3968 356.454 37.2432C354.647 38.0732 352.646 38.4883 350.448 38.4883ZM349.643 16.8086C348.243 16.8086 347.104 17.2806 346.225 18.2246C345.362 19.1686 344.809 20.5195 344.564 22.2773H354.379V21.7158C354.346 20.1533 353.923 18.9489 353.109 18.1025C352.296 17.2399 351.14 16.8086 349.643 16.8086Z" fill="#FFFCFC"/>
<rect y="59" width="559" height="10" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="279.5" y1="59" x2="151.49" y2="-86.7832" gradientUnits="userSpaceOnUse">
<stop offset="0.078125" stop-color="#1DA1F2"/>
<stop offset="0.40625" stop-color="#A749BC"/>
<stop offset="0.614583" stop-color="#D12784"/>
<stop offset="0.880208" stop-color="#D62C49"/>
</linearGradient>
</defs>
</svg>
    </div>
</Grid>
<Grid item>
<div id="border-small"/>
</Grid>
</Grid>

<Grid container
  direction="row"
  justify="center"
  alignItems="center"
  wrap="wrap"
  spacing={5}>
      <Grid item>
          <div border-solid id="selfie" className="h-36 w-36 md:h-72 md:w-72"/>
      </Grid>
            <Grid item>
             
                <body id="textInfo" class=" max-w-7xl h-80 mx-4 space-y-2  bg-transparent rounded-l flex space--4 "> 
    <text class="overflow-y-auto  my-4 lg:text-2xl sm:text-xl md:text-2xl text-white 0 font-normal leading-tight m-8 text-left font-bold">Hi I'm Victoria Williamson !
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec eros gravida, blandit lorem at, sollicitudin quam. Curabitur eleifend ante at metus rutrum, non faucibus felis pretium. Cras malesuada lacus vel orci aliquam, quis ultricies nisl sagittis. Morbi magna nunc, egestas at placerat a, tempor ac est. Pellentesque lacinia, nulla et rutrum semper, leo elit sodales nisi, non accumsan ex dolor ut ante. Proin a tellus dui.
   </text>
</body> 
            
      </Grid>
      </Grid>
      </div>
    
        
    )       
}
export default AboutMe;

