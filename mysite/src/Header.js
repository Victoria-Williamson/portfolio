import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  DownloadIcon,
} from "@heroicons/react/outline";
import Resume from "./Home/images/Resume.svg";
import "./Header.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Nav(props) {
  console.log("props", props);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      console.log(window.scrollY);
      const scrollCheck = window.scrollY < 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  function goToElement(name) {
    var element = document.querySelector(name);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    element.classList.add("highlight");
  }

  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    console.log("here", window.scrollY);
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("navbar").style.padding = "30px 10px";
      console.log("option 1");
    } else {
      document.getElementById("navbar").style.padding = "80px 10px";
      console.log("option 2");
    }
  }
  const [isOpen, setIsOpen] = useState(false);
  var navigation = props.thumbnails;

  if (!navigation[0].current) {
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
                  <div className="flex-1 flex">
                    <div className="hidden sm:block sm:ml-6 w-full">
                      <div className="flex items-center w-full">
                        <div className="flex justify-center  w-full">
                          {navigation.map((item) => (
                            <button
                              key={item.name}
                              onClick={() => goToElement(item.href)}
                              className={classNames(
                                item.current
                                  ? " text-lightPink hover:no-underline font-bold "
                                  : "text-white hover:no-underline  hover:opacity-100   font-bold opacity-50",
                                "px-3 py-2 rounded-md text-sm md:flex-start justify-start uppercase"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </button>
                          ))}
                          <div
                            class="text-white hover:no-underline    font-normal',
                          'px-3 py-2 rounded-md text-sm md:flex-start justify-start uppercase"
                          >
                            <a
                              href="https://www.canva.com/design/DAEpp7QDs9s/YXxPaa7IRmjzm8URN-yTdg/view?utm_content=DAEpp7QDs9s&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
                              class="text-white hover:no-underline  hover:opacity-100   font-bold opacity-50
                                px-3 py-2 rounded-md text-sm md:flex-start  uppercase flex flex-row items-center justify-center gap-2"
                            >
                              <div>
                                <DownloadIcon className="h-8" />
                              </div>
                              <div>Resume</div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
                </div>
              </div>

              <div className="sm:hidden ">
                <Disclosure.Panel>
                  <div className="px-2 pt-2 pb-3 space-y-1 justify-center flex flex-col items-center">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => goToElement(item.href)}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Nav;
