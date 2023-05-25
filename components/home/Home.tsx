import HomeBlob from "./HomeBlob";
import HomeText from "./HomeText";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen">
        <HomeBlob />
      </div>

      <div className="w-screen h-screen z-10 absolute top-0">
        <HomeText />
      </div>
    </>
  );
}
