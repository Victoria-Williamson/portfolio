import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Page from "./Page";
import blob from "../public/blobs/blob2.svg";

const experiences: Array<{
  id: string;
  company: string;
  position: string;
  date: string;
  information: Array<String>;
  image: any;
  skills?: Array<string>;
}> = [
  {
    id: "Google",
    company: "Google",
    position: "Software Engineering Intern",
    date: "May 2022 - August 2022",
    information: [
      "Worked on a cross-functional team to add a feature to the Chrome Android application by using Java",
      "Developed a new feature by creating a design doc listing recommended and alternative methods for implementation.",
      "Designed a system following the Model View Controller (MVC) architecture and modeled it by creating UML diagrams.",
      "Tested new functionality by developing unit tests with Mockito and JUnit",
    ],
    image: require("../public/exp/google.png"),
    skills: ["MVC", "Android", "Java"],
  },
  {
    id: "UR",
    company: "VarLab",
    position: "Undergraduate Research Assistant",
    date: "March 2020 - Current",
    information: [
      "Developed a web application that displays data and allows user interaction to modify data.",
      "Developed a mobile application that displays and data and allows user interaction to modify data",
      "Integrated simply user interface to efficiently allow quick access to application features.",
      "Worked on integrating LiDar data into the Unreal Engine 4.",
    ],
    image: require("../public/exp/ucf.png"),
    skills: ["React", "React-Native"],
  },
  {
    id: "KnightHacks",
    position: "Lead Hackathon Organizer",
    company: "Knight Hacks",
    date: "November 2020 - December 2021",
    information: [
      "Created and executed a 36 hour hackathon that typically hosts 600+ students by creating spring tasks to lead a team of 20+ students",
      "Worked on making project development more inclusive by reaching out to multiple registered student organizations and making the event more beginner friendly",
    ],
    skills: ["project management", "leadership", "organization"],
    image: require("../public/exp/knighthacks.png"),
  },
  {
    id: "TA",
    company: "Algorithms for Machine Learning",
    position: "Teaching Assistant",
    date: "August 2021 - December 2021",
    information: [
      " Held weekly office hours to assist students with understanding supervised learning and unsupervised learning machine learning models and tactics.",
    ],
    image: require("../public/exp/ucf.png"),
    skills: ["Python", "Scikit-Learn", "Tensorflow"],
  },
  {
    id: "UPS",
    position: "Intern",
    company: "UPS",
    date: "June 2021 - August 2021",
    skills: ["Python", "Figma", "JavaScript"],
    image: require("../public/exp/ups.png"),
    information: [
      "For the company hackathon I developed a UX Wireframe to present a prototype of the solution.",
      "Awarded Best Foot Forward for having the highest User Experience and Presentation Score",
      "Delivered presentations to the CEO, CIEO, and Vice Presidents of the company.",
    ],
  },
  {
    id: "ACM-W",
    position: "Mentor",
    company: "ACM-W",
    date: "August 2020 - May 2021",
    information: [
      "Over two semesters I mentored a total of five freshmen majoring in computer science or statistics",
      "Provided direct 1-on-1 support for internship preparation and organization.",
    ],
    skills: ["Diversity and Inclusion", "Leadership"],
    image: require("../public/exp/acmw.png"),
  },
];
export default function Experiences() {
  return (
    <Page id="exp" backgroundImage={`url(${blob.src})`}>
      <div className="text-5xl font-bold mb-10 text-center mt-32">
        Experiences
      </div>
      <div className="max-h-[95vh] overflow-y-auto mb-24">
        <VerticalTimeline>
          {experiences.map((experience) => {
            return (
              <VerticalTimelineElement
                key={experience.id}
                className="vertical-timeline-element--work text-[#1D061E]"
                iconStyle={{
                  background: `url(${experience.image.default.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  padding: "1px",
                  backgroundColor: "white",
                }}
              >
                <text className="vertical-timeline-element-title font-bold text-2xl text-[#1D061E]">
                  {" "}
                  {experience.company}
                </text>
                <br />
                <text className="vertical-timeline-element-subtitle text-lg font-semibold text-darkPink">
                  {" "}
                  {experience.position}{" "}
                </text>
                <br />
                <text className="vertical-timeline-element-subtitle text-md text-gray-500">
                  {" "}
                  {experience.date}{" "}
                </text>

                <div className="mt-3">
                  {experience.skills &&
                    experience.skills.map((skill, index) => {
                      return (
                        <span
                          key={`slill${index}`}
                          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        >
                          {" "}
                          {skill}{" "}
                        </span>
                      );
                    })}
                </div>
                <p>
                  <ul className="list-disc text-left ml-3">
                    {experience.information.map((info, index) => {
                      return <li key={`info${index}`}> {info} </li>;
                    })}
                  </ul>
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </Page>
  );
}
