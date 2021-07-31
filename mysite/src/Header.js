import React, { useState } from "react";
import LinkedIn from "./LinkedIn.svg";
import ResumeButton from "./ResumeButton.svg";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Blob from "./Group.png";
import "./Header.css";



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);
  var navigation = [];
  if(props.current === "Home")
  {
    navigation =  [
      { name: 'Home', href: '#home', current: false },
      { name: 'About', href: '#about', current: false },
      { name: 'Timeline', href: '#experiences', current: false },
      { name: 'Projects', href: '#projects', current: false },
    ]
  }
  if(props.current === "About")
  {
    navigation =  [
      { name: 'Home', href: '#home', current: false},
      { name: 'About', href: '#about', current: true },
      { name: 'Timeline', href: '#experiences', current: false },
      { name: 'Projects', href: '#projects', current: false },
    ]
  }
  if(props.current === "Timeline")
  {
    navigation =  [
      { name: 'Home', href: '#home', current: false },
      { name: 'About', href: '#about', current: false },
      { name: 'Timeline', href: '#experiences', current: true},
      { name: 'Projects', href: '#projects', current: false },
    ]
  }
  if(props.current === "Projects")
  {
    navigation =  [
      { name: 'Home', href: '#home', current: false },
      { name: 'About', href: '#about', current: false },
      { name: 'Timeline', href: '#experiences', current: false },
      { name: 'Projects', href: '#projects', current: true },
    ]
  }

  return (
    <div>
          <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="no-underline inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="h-6 w-6 mt-3" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center">
              
                <div className="hidden sm:block sm:ml-6">
                 
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 hover:no-underline font-black hover:text-lightPink' : 'text-white hover:no-underline hover:bg-lightPink hover:text-white',
                          'px-3 py-2 rounded-md text-lg md:flex-start justify-start uppercase font-black'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               
               
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  );
}

export default Nav;