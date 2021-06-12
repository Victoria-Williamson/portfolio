import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import LinkedIn from "./LinkedIn.svg";
import ResumeButton from "./ResumeButton.svg"
import "./Header.css";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div>
      <nav className="bg-transparent">
        <div className="max-w-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              
              <div className="hidden md:block">
            
           
         
                <div className="ml-10 flex items-baseline space-x-4">
                <div className="flex items-center space-x-4">
                </div>
                  <a
                    href="#home"
                    className="text-gray-50 no-underline hover:text-pink-500 hover:no-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out px-3 py-2 rounded-md text-xl font-bold font-bold"
                  >
                    Home
                  </a>

                  <a
                    href="#activities"
                    className="text-gray-50 no-underline hover:text-pink-500 hover:no-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out px-3 py-2 rounded-md text-xl font-bold font-bold"
                  >
                    Activites
                  </a>

                  <a
                    href="#experiences"
                    className="text-gray-50 no-underline hover:text-pink-500 hover:no-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out px-3 py-2 rounded-md text-xl font-bold font-bold"
                  >
                    Experiences
                  </a>

                  <a
                    href="#projects"
                    className="text-gray-50 no-underline hover:text-pink-500 hover:no-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out px-3 py-2 rounded-md text-xl font-bold font-bold"
                  >
                    Projects
                  </a>
                  <a class="no-underline inline-block text-gray-50 no-underline hover:text-pink-500 hover:text-no-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" 
                  href="https://www.linkedin.com/in/victoria-williamson-8394331a1/" 
                   target="_blank" >
                  <svg  class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </a>
            <a
              class="inline-block text-gray-50 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
              href="https://twitter.com/ViWilliamson/"
            >
               <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
                ></path>
              </svg>
              
            </a>
            <a
              class="inline-block text-gray-50 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
              href="https://github.com/Victoria-Williamson"
              target="_blank"
            >
              <svg  class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              
            </a>
            <a
              class="inline-block text-gray-50 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-0 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
              href="https://drive.google.com/file/d/1JIaehXoPsvEST1lEOvR9rTu3MtrORi3U/view?usp=sharing" target="_blank">
            {/*Resume */}
            <svg class="fill-current h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 0h-20v24h14l6-6v-18zm-7 23h-12v-22h18v16h-6v6zm1-5h4.586l-4.586 4.586v-4.586zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm0-4h-4v1h4v-1zm-6.006 1h-7.991l-.003-.789c-.003-.72-.006-1.615 1.314-1.92 1.483-.341 1.236-.418 1.158-.563-1.078-1.988-.71-3.173-.395-3.703.388-.651 1.089-1.025 1.923-1.025.827 0 1.523.368 1.91 1.011.545.904.409 2.222-.379 3.713-.105.196-.195.255 1.119.559 1.355.312 1.352 1.212 1.35 1.936l-.006.781zm-6.994-1h6c-.007-.547-.07-.626-.54-.734-.855-.198-1.629-.376-1.901-.972-.142-.311-.113-.66.087-1.039.61-1.151.758-2.146.407-2.729-.276-.458-.778-.526-1.053-.526-.48 0-.857.19-1.063.537-.352.59-.201 1.58.414 2.714.204.377.236.727.095 1.039-.269.598-1.036.774-1.847.962-.525.121-.593.202-.599.748zm13-2v-1h-4v1h4zm0-4h-4v1h4v-1z"/></svg>
            </a>
            
                </div>
              </div>
            </div>
           
              
            <div className="-mr-2 absolute  right-0 w-16 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#home"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="#activities"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Activites
                </a>

                <a
                  href="#experiences"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Experiences
                </a>

                <a
                  href="#projects"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 Projects
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

    </div>
  );
}

export default Nav;