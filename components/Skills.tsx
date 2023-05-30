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
      <div
        id="skills"
        className="flex items-center justify-center flex-col mx-10"
      >
        <div
          className="flex items-center justify-center flex-col"
          data-aos="zoom-in-up"
        >
          <text className="text-5xl font-bold mb-2"> Skills</text>
          <text className="text-4xl font-bold my-10 text-center">
            {" "}
            Languages and Frameworks
          </text>
          <div className="flex items-center justify-center flex-wrap gap-8 lg:w-3/4">
            {languages.map((skill, index) => {
              return (
                <div
                  key={`skills-skills-${index}`}
                  className="flex items-center justify-center gap-2 flex-col"
                >
                  <div className="bg-white h-24 w-24 lg:h-32 lg:w-32 rounded-full flex items-center justify-center p-6">
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
                  <text className="text-x font-medium text-white capitalize mt-2">
                    {skill.title}
                  </text>
                </div>
              );
            })}
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          className="flex items-center justify-center flex-col mt-4"
        >
          <text className="text-4xl font-bold mt-10 mb-20"> Coursework </text>
          <div className="flex items-center justify-center gap-4 flex-wrap flex-row px-10">
            {courses.map((courseType, index) => {
              return courseType.classes.map((course) => {
                return (
                  <div
                    key={`course-${index}`}
                    className="flex items-center justify-center flex-row gap-2 capitalize text-xs bg-white text-slate-700 rounded-3xl px-6 py-4 font-bol text-center"
                  >
                    {course}
                  </div>
                );
              });
            })}
          </div>
        </div>
      </div>
    </Page>
  );
}
