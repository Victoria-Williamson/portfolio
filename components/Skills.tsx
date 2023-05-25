import Page from "./Page";
import blob from "../public/blobs/blob1.svg";
import Skill from "./items/Skill";
import img from "../public/skills/css.svg";
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

const courses = {
  ai: [
    "robotic vision",
    "artificial intelligence",
    "algorithms for machine learning",
    "robotic systems",
    "big data analytics",
    "applied time series",
    "statistics for data science and artificial intelligence",
    "computer processing of statistical data",
  ],
  software: [
    "senior design (capstone project)",
    "processes of object oritened software",
    "managing IT integration",
    "algorithm analysis",
    "data structures",
    "C Programming",
    "Java",
  ],
};

export default function Skills() {
  return (
    <Page backgroundImage={`url(${blob.src})`}>
      <div className="flex items-center justify-center flex-col h-full w-full">
        <div className="flex items-center justify-center flex-col">
          <text className="text-5xl font-bold mb-10"> Skills</text>
          <div className="flex items-center justify-center flex-wrap gap-8 lg:w-3/4">
            {languages.map((skill) => {
              return (
                <Skill
                  backgroundImage={`url(${skill.image.default.src})`}
                  title={skill.title}
                />
              );
            })}
          </div>
        </div>
        <text className="text-4xl font-bold my-10"> Coursework </text>
        <div className="grid items-center justify-center lg:grid-cols-2 gap-4">
          <div className="flex items-center justify-center flex-col px-8 text-center">
            <text className="text-3xl font-bold text-center">
              Machine Learning and Data Science
            </text>
            <br />
            <text className="text-2xl ">
              <ul>
                {courses.ai.map((course) => {
                  return (
                    <li className="flex items-center justify-center flex-row gap-2">
                      <CheckOutlined />
                      {course}
                    </li>
                  );
                })}
              </ul>
            </text>
          </div>
          <div className="flex items-center justify-center flex-col px-8 text-center">
            <text className="text-3xl font-bold text-center">
              Software Engineering
            </text>
            <br />
            <ul className="list-disc text-2xl">
              {courses.software.map((course) => {
                return (
                  <li className="flex items-center justify-center flex-row gap-2">
                    <CheckOutlined />
                    {course}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Page>
  );
}
