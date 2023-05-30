import {Row, Col} from "antd";
import pic from "../public/blobs/vic.png";
import Image from "next/image";
import Page from "./Page";
import blob from "../public/blobs/blob3.svg";

export default function About() {
  return (
    <Page
      id="about"
      backgroundImage={`url(${blob.src})`}
      showBackgroundImageForAll={false}
    >
      <div className="min-h-screen grid items-center xl:grid-cols-2 xl:grid-rows-none grid-cols-none grid-rows-2 ">
        {/* Name and Description */}
        <div
          data-aos="fade-down-right"
          data-aos-delay="100"
          data-aos-duration="800"
          className="flex justify-center items-center h-full flex-col px-20"
        >
          <text className="text-3xl lg:text-6xl font-bold mb-4 text-left">
            {"Hi, I'm Victoria"}
          </text>
          <text className="text-xl lg:text-2xl text-justify  ">
            I am a recent graduate from the University of Central Florida with a
            bachelors degree in Computer Science and a bachelors degree in
            Statistics, which has allowed me to gain experience in{" "}
            <b> backend, frontend, and data science </b> projects through
            internships and research experiences. As well as <b> mentorship </b>
            and <b> leadership </b> opportunities through teaching assistant,
            mentorship programs, and clubs.
          </text>
        </div>

        {/* Picture */}
        <div
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos="fade-down-left"
          className={" flex items-center justify-center"}
        >
          <Image className="max-h-[1750px] w-auto" src={pic} alt="vic" />
        </div>
      </div>
    </Page>
  );
}
