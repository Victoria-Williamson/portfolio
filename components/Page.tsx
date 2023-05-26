import React from "react";

export default function Page({
  children,
  backgroundImage,
}: {
  children: React.ReactNode;
  backgroundImage?: string;
}) {
  return (
    <div
      style={
        backgroundImage
          ? {backgroundImage: backgroundImage, backgroundSize: "cover"}
          : {}
      }
      className="w-screen min-h-screen h-full bg-[#1D061E] lg:px-[150px] py-4"
    >
      {children}
    </div>
  );
}
