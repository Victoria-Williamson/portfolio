import blob from "../public/blobs/home.svg";
import Page from "./Page";
export default function Home() {
  return (
    <Page backgroundImage={`url(${blob.src})`} id="Home">
      <div className="w-full min-h-screen flex items-center justify-center flex-col">
        <text className="text-white xl:text-9xl lg:text-8xl md:text-5xl text-6xl font-black text-center">
          Victoria Williamson
        </text>
        <text className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl  font-medium">
          {"Computer Science B.S '23"}
        </text>
        <text className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl  font-medium">
          {"Statistics B.S '23"}
        </text>
      </div>
    </Page>
  );
}
