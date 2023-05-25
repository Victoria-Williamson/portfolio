export default function Skill({
  backgroundImage,
  title,
}: {
  backgroundImage: string;
  title: string;
}) {
  return (
    <div className="flex items-center justify-center gap-2 flex-col">
      <div className="bg-white h-32 w-32 lg:h-40 lg:w-40 rounded-full flex items-center justify-center p-6">
        <div
          style={{
            backgroundImage: backgroundImage,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="h-full w-full"
        ></div>
      </div>
      <text className="text-xl font-bold text-white"> {title}</text>
    </div>
  );
}
