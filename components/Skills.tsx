import Page from "./Page";
import blob from "../public/blobs/blob1.svg";
import {CheckOutlined} from "@ant-design/icons";

const languages = [
  {
    image: require("../public/skills/css.svg"),
    title: "css",
  },
  {
    image: require("../public/skills/html.svg"),
    title: "html",
  },
  {
    image: require("../public/skills/java.png"),
    title: "java",
  },
  {
    image: require("../public/skills/js.png"),
    title: "javaScript",
  },
  {
    image: require("../public/skills/python.svg"),
    title: "python",
  },
  {
    image: require("../public/skills/typescript.png"),
    title: "typescript",
  },
  {
    image: require("../public/skills/firebase.png"),
    title: "firebase",
  },
  {
    image: require("../public/skills/mongoDB.svg"),
    title: "mongoDB",
  },
  {
    image: require("../public/skills/nextjs.png"),
    title: "nextJS",
  },
  {
    image: require("../public/skills/react.svg"),
    title: "react",
  },
  {
    image: require("../public/skills/tailwind.svg"),
    title: "tailwind",
  },
];

const courses = [
  {
    title: "machine learning and data science",
    classes: [
      "robotic vision",
      "artificial intelligence",
      "algorithms for machine learning",
      "robotic systems",
      "big data analytics",
      "applied time series",
      "statistics for data science and artificial intelligence",
      "computer processing of statistical data",
    ],
    color: "#6D1A72",
  },

  {
    title: "software engineering",
    classes: [
      "senior design (capstone project)",
      "processes of object oritened software",
      "managing IT integration",
      "algorithm analysis",
      "data structures",
      "C Programming",
      "Java",
    ],
    color: "#6D1A72",
  },
];

export default function Skills() {
  return (
    <Page backgroundImage={`url(${blob.src})`}>
      <div className="flex items-center justify-center flex-col h-full w-full">
        <div className="flex items-center justify-center flex-col">
          <text className="text-5xl font-bold mb-10"> Skills</text>
          <text className="text-4xl font-bold my-10">
            {" "}
            Languages and Frameworks
          </text>
          <div className="flex items-center justify-center flex-wrap gap-8 lg:w-3/4">
            {languages.map((skill) => {
              return (
                <div className="flex items-center justify-center gap-2 flex-col">
                  <div className="bg-white h-32 w-32 lg:h-40 lg:w-40 rounded-full flex items-center justify-center p-6">
                    <div
                      style={{
                        backgroundImage: `url(${skill.image.default.src})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                      className="h-full w-full"
                    ></div>
                  </div>
                  <text className="text-xl font-bold text-white capitalize mt-2">
                    {skill.title}
                  </text>
                </div>
              );
            })}
          </div>
        </div>
        <text className="text-4xl font-bold mt-10 mb-20"> Coursework </text>
        <div className="grid items-center justify-center lg:grid-cols-2 gap-4">
          {courses.map((courseType) => {
            return (
              <div className="flex items-center justify-center flex-col px-8 text-center">
                <text className={`text-2xl font-bold text-center capitalize`}>
                  {courseType.title}
                </text>
                <br />
                <text className="text-xl ">
                  <ul>
                    {courseType.classes.map((course) => {
                      return (
                        <li className="flex items-center justify-center flex-row gap-2 capitalize mb-1">
                          <CheckOutlined color={courseType.color} />
                          {course}
                        </li>
                      );
                    })}
                  </ul>
                </text>
              </div>
            );
          })}
        </div>
      </div>
    </Page>
  );
}
