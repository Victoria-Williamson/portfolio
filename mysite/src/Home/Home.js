import React from 'react';
import "./Home.css";
import Title from "./title.svg";
import Blob1 from "./blob_desktop/blob1-desktop.svg";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import CV from "./CV";
import Background from "./Background.svg";
import GitHub from "./GitHub.svg";
import LinkedIn from "./Linkedin_Logo.png";
import Twitter from "./Twitter.svg";
import Resume from "./Resume.svg";
import Grid from '@material-ui/core/Grid';
import GetAppIcon from '@material-ui/icons/GetApp';
function Home() {
  return <div class="background">
    <div class="flex h-screen  w-screen text-center flex-col items-center justify-center">
      <div class="flex h-screen flex-col w-screen gap-4 items-center justify-center lg:px-16">
        <img className="w-full object-contain lg:px-24 md:px-12 px-10" src={Title} />
        <div class="flex flex-row  w-screen text-center gap-5 items-center justify-center">
          <div class="mx-2 ">
            <a href="https://github.com/Victoria-Williamson">
              <img className="transform hover:-translate-y-1 object-fit h-12 lg:h-20 w-full hover:scale-110 transition duration-500 ease-in-out" src={GitHub} />
            </a>
          </div>
          <div class="mx-2">
            <a href="https://twitter.com/ViWilliamson/" class="">
              <img className="transform hover:-translate-y-1 object-fit h-12 lg:h-20 w-full hover:scale-110 transition duration-500 ease-in-out" src={Twitter} />
            </a>
          </div>
          <div class="mx-2 ">
            <a href="https://www.linkedin.com/in/victoria-williamson-8394331a1/">
              <img className="transform hover:-translate-y-1 object-fit h-12 lg:h-20 w-full hover:scale-110 transition duration-500 ease-in-out" src={LinkedIn} />
            </a>
          </div>

          <div class="mx-2">
            <a href="https://www.canva.com/design/DAEpp7QDs9s/YXxPaa7IRmjzm8URN-yTdg/view?utm_content=DAEpp7QDs9s&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">
              <img className="transform hover:-translate-y-1 object-fit h-12 lg:h-20 w-full hover:scale-110 transition duration-500 ease-in-out" src={Resume} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default Home;