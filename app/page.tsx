"use client";

import About from "@/components/about/About";
import NavBar from "@/components/global/NavBar";
import Home from "@/components/home/Home";

export default function Page() {
  return (
    <>
      <NavBar />
      <div className="w-screen bg-red-300">
        <Home />
        <About />
      </div>
    </>
  );
}
