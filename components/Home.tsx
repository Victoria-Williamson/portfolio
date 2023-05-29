import blob from "../public/blobs/home.svg";
export default function Home() {
  return (
    <div
      style={{backgroundImage: `url(${blob.src})`, backgroundSize: "cover"}}
      className="w-screen h-screen"
    >
      <div className="w-full h-full flex items-center justify-center flex-col">
        <text className="text-white xl:text-9xl lg:text-8xl md:text-5xl text-6xl font-black text-center">
          Victoria Williamson
        </text>
        <text className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl  font-medium">
          Computer Science B.S '23
        </text>
        <text className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl  font-medium">
          Statistics B.S '23
        </text>
      </div>
    </div>
  );
}
