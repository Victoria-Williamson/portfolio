import React from "react";
import "./AboutMe.css";
import Self from "./images/Self.svg";
import Grid from "@material-ui/core/Grid";
import { data } from "./AboutMe_Info";
function AboutMe() {
  return (
    <div class="mt-5 h-auto">
      <div class="h-auto  grid grid-rows-2 items-center justify-center grid-flow-col gap-4 text-center">
        <div class="text-gradient font-extrabold text-white text-4xl">
          {" "}
          About Me <div></div>{" "}
          <div class="bg-gradient-to-r from-darkPink via-darkOrange to-darkGreen mt-1 h-3  w-96">
            {" "}
          </div>{" "}
        </div>
      </div>

      <div id="about-border">
        <div class="flex items-center w-screen justify-center absolute z-10 ">
          <div
            class="flex flex-col items-center justify-center w-96 lg:items-center rounded bg
                     "
          >
            <div class="w-screen h-72 flex flex-col items-center">
              <img class="object-fit h-72 p-10" src={Self}></img>
            </div>
            <div class="w-full h-full mx-5 bg-white text-center font-medium p-3 shadow mb-4 rounded-lg">
              <text>
                Hi! I’m currently a junior majoring in Computer Science and
                Statistics at the University of Central Florida. I am originally
                from Kernersville, North Carolina but recently moved to Orlando,
                Florida to purse a degree. When I am not working or studying I
                spend a lot of my time exploring different resturants in Orlando
                and exploring the theme parks.
              </text>
              <br />

              <a
                target="_blank"
                href="https://www.canva.com/design/DAE8k24XXrg/3IPBaBIrvTwaXzPeNV2Juw/edit"
                class="text-white hover:no-underline  hover:opacity-100   font-bold opacity-50
                                px-3 py-2 rounded-md text-sm md:flex-start  uppercase flex flex-row items-center justify-center gap-2"
              >
                <button class="mt-2 w-80 h-14 bg-darkOrange rounded-xl text-white font-bold text-2xl hover:bg-lightOrange transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out">
                  {" "}
                  Resume{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
