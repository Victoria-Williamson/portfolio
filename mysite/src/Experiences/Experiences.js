import React from "react";
import "./Experiences.css";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "./Experience_Data";

function Experiences() {
	return (
		<div class="mt-5">
			<div class="h-auto grid grid-rows-2 items-center justify-center grid-flow-col gap-4 text-center">
				<div class="text-gradient text-white text-4xl font-bold">
					{" "}
					Timeline <div></div>{" "}
					<div class="bg-gradient-to-r from-darkPink via-darkOrange to-darkGreen mt-2 h-3  w-96">
						{" "}
					</div>{" "}
				</div>
			</div>
			<div id="timeline" className="px-8 lg:px-36">
				<VerticalTimeline>
					{experienceData.map((experience) => (
						<VerticalTimelineElement
							className="vertical-timeline-element--work "
							iconStyle={{
								background: "url(" + experience.link + ") no-repeat center",
								backgroundSize: "cover",
								backgroundColor: "white",
							}}
						>
							<text className="vertical-timeline-element-title font-bold text-2xl">
								{" "}
								{experience.where}
							</text>
							<br />
							<text className="vertical-timeline-element-subtitle text-lg font-semibold text-darkPink">
								{" "}
								{experience.title}{" "}
							</text>
							<br />
							<text className="vertical-timeline-element-subtitle text-md text-gray-500">
								{" "}
								{experience.date}{" "}
							</text>

							<div className="mt-3">
								{experience.skills.map((skill) => {
									return (
										<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
											{" "}
											{skill}{" "}
										</span>
									);
								})}
							</div>
							<p>
								<ul class="list-disc text-left ml-3">
									{experience.information.map((info) => {
										return <li> {info} </li>;
									})}
								</ul>
							</p>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</div>
		</div>
	);
}
export default Experiences;
