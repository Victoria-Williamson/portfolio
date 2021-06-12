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
                    <a>
                    <img
                   className="h-8 w-35"
                   src={ResumeButton}
                  alt="Workflow"
                />
                    </a>
                
                  <img
                   className="h-8 w-35"
                  src={ResumeButton}
                  alt="Workflow"
                />
                 
                </div>
                  <a
                    href="#home"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-bold"
                  >
                    Home
                  </a>

                  <a
                    href="#activities"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-bold"
                  >
                    Activites
                  </a>

                  <a
                    href="#experiences"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-bold"
                  >
                    Experiences
                  </a>

                  <a
                    href="#projects"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-bold font-bold"
                  >
                    Projects
                  </a>

                 
                           <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center space-x-4">
                  <img
                   className="h-8 w-8"
                   src={LinkedIn}
                  alt="Workflow"
                />
                  <img
                   className="h-8 w-8"
                 
                  src={LinkedIn}
                  alt="Workflow"
                />
                  <img
                   className="h-8 w-8"
                 
                  src={LinkedIn}
                  alt="Workflow"
                />
                 
                </div>
                </div>
               
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