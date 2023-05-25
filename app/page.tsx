"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "@/components/About";
import NavBar from "@/components/NavBar";
import Home from "@/components/Home";
import Skills from "@/components/Skills";
import React from "react";

export default function Page() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
    </>
  );
}
