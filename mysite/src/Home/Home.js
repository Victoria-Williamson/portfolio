import React from "react";
import "./Home.css";
import Title from "./images/title.svg";
import GitHub from "./images/GitHub.svg";
import LinkedIn from "./images/LinkedIn.svg";
import Twitter from "./images/Twitter.svg";
import Resume from "./images/Resume.svg";
import Self from "./images/Self.svg";
import Grid from "@material-ui/core/Grid";
import GetAppIcon from "@material-ui/icons/GetApp";
function Home() {
  // fixing background
  return (
    <div class="background m-0 p-0 h-screen">
      <div class="flex h-screen  w-screen text-center flex-col items-center justify-center">
        <div class="flex h-screen flex-col w-screen gap-4 items-center justify-center lg:px-16">
          <img
            className="w-full xl:w-5/6 xl:max-w-6xl object-contain lg:px-32 md:px-12 px-10 mb-4"
            src={Title}
          />
          <div class="flex flex-row  w-screen px-2 text-center gap-5 items-center justify-center mb-8">
            <div class="mx-2 ">
              <a href="https://github.com/Victoria-Williamson">
                <img
                  className="transform hover:-translate-y-1 object-fit h-12 lg:h-14 w-full hover:scale-110 transition duration-500 ease-in-out"
                  src={GitHub}
                />
              </a>
            </div>
            <div class="mx-2">
              <a href="https://twitter.com/ViWilliamson/" class="">
                <img
                  className="transform hover:-translate-y-1 object-fit h-12 lg:h-14 w-full hover:scale-110 transition duration-500 ease-in-out"
                  src={Twitter}
                />
              </a>
            </div>
            <div class="mx-2 ">
              <a href="https://www.linkedin.com/in/victoria-williamson-8394331a1/">
                <img
                  className="transform hover:-translate-y-1 object-fit h-12 lg:h-14 w-full hover:scale-110 transition duration-500 ease-in-out"
                  src={LinkedIn}
                />
              </a>
            </div>

            <div class="mx-2">
              <a
                target="_blank"
                href="https://www.canva.com/design/DAE8k24XXrg/3IPBaBIrvTwaXzPeNV2Juw/edit"
              >
                <img
                  className="transform hover:-translate-y-1 object-fit h-16 lg:h-14 w-full hover:scale-110 transition duration-500 ease-in-out"
                  src={Resume}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
