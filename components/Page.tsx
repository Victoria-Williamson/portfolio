import React from "react";

export default function Page({
  id,
  children,
  backgroundImage,
  showBackgroundImageForAll,
}: {
  id: string;
  children: React.ReactNode;
  backgroundImage?: string;
  showBackgroundImageForAll?: boolean;
}) {
  return showBackgroundImageForAll !== false ? (
    <div
      id={id}
      style={
        backgroundImage
          ? {backgroundImage: backgroundImage, backgroundSize: "cover"}
          : {}
      }
      className="w-screen min-h-screen h-full bg-[#1D061E] lg:px-[150px] py-4"
    >
      {children}
    </div>
  ) : (
    <>
      <div
        style={
          backgroundImage
            ? {backgroundImage: backgroundImage, backgroundSize: "cover"}
            : {}
        }
        className="w-screen min-h-screen h-full bg-[#1D061E] lg:px-[150px] py-4 hidden lg:block"
      >
        {children}
      </div>
      <div className="w-screen min-h-screen h-full bg-[#1D061E] lg:px-[150px] py-4 block lg:hidden">
        {children}
      </div>
    </>
  );
}
