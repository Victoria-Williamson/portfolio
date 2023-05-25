import {Row, Col} from "antd";
import pic from "../public/vic.png";
import Image from "next/image";
import Page from "./Page";

export default function About() {
  return (
    <Page>
      <Row className="h-screen">
        {/* Name and Description */}
        <Col
          data-aos="fade-down-right"
          data-aos-delay="100"
          data-aos-duration="800"
          span={12}
          className="flex justify-center h-full flex-col px-20"
        >
          <text className="text-6xl font-bold mb-4 "> Hi, I'm Victoria </text>
          <text className="text-3xl text-justify  ">
            I am a recent graduate from the University of Central Florida with a
            bachelors degree in Computer Science and a bachelors degree in
            Statistics, which has allowed me to gain experience in{" "}
            <b> backend, frontend, and data science </b> projects through
            internships and research experiences. As well as <b> mentorship </b>{" "}
            and <b> leadership </b> opportunities through teaching assistant,
            mentorship programs, and clubs.
          </text>
        </Col>

        {/* Picture */}
        <Col
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos="fade-down-left"
          span={12}
          className={" flex items-center justify-center"}
        >
          <Image className="max-h-[1750px] w-auto" src={pic} alt="vic" />
        </Col>
      </Row>
    </Page>
  );
}
