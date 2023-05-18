import HomeBlob from "./HomeBlob";
import HomeText from "./HomeText";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen z-0 absolute">
        <HomeBlob />
      </div>
      <div className="w-full h-full z-[5] absolute" />
      <div className="w-screen h-screen z-10 absolute">
        <HomeText />
      </div>
    </>
  );
}
